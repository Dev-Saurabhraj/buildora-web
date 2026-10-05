import { NextResponse } from 'next/server';
import { MailConfigurationError, sendProjectEnquiry } from '../../../lib/project-enquiry-mail';
import { validateProjectEnquiry } from '../../../lib/project-enquiry';

export const runtime = 'nodejs';

const MAX_REQUEST_BYTES = 12 * 1024;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ error: 'The enquiry is too large.' }, { status: 413 });
  }

  let payload: unknown;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > MAX_REQUEST_BYTES) {
      return NextResponse.json({ error: 'The enquiry is too large.' }, { status: 413 });
    }
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: 'Please submit a valid enquiry.' }, { status: 400 });
  }

  const validation = validateProjectEnquiry(payload);
  if (!validation.success) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  try {
    await sendProjectEnquiry(validation.data);
    return NextResponse.json({ message: 'Your project enquiry has been sent.' });
  } catch (error) {
    if (error instanceof MailConfigurationError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }

    console.error('Unable to deliver project enquiry email.');
    return NextResponse.json(
      { error: 'We could not send your enquiry right now. Please try again shortly.' },
      { status: 502 },
    );
  }
}
