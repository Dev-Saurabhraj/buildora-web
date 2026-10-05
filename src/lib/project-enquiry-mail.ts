import nodemailer from 'nodemailer';
import type { ProjectEnquiry } from './project-enquiry';

interface MailConfiguration {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
  from: string;
  to: string;
}

export class MailConfigurationError extends Error {
  constructor() {
    super('Email delivery is not configured yet. Please contact us directly.');
    this.name = 'MailConfigurationError';
  }
}

function getMailConfiguration(): MailConfiguration {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD, MAIL_FROM, MAIL_TO } =
    process.env;
  const port = Number(SMTP_PORT);

  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    !['true', 'false'].includes(SMTP_SECURE ?? '') ||
    !SMTP_USER ||
    !SMTP_PASSWORD ||
    !MAIL_FROM ||
    !MAIL_TO
  ) {
    throw new MailConfigurationError();
  }

  return {
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE === 'true',
    user: SMTP_USER,
    password: SMTP_PASSWORD,
    from: MAIL_FROM,
    to: MAIL_TO,
  };
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[character];
  });
}

export async function sendProjectEnquiry(enquiry: ProjectEnquiry): Promise<void> {
  const configuration = getMailConfiguration();
  const transporter = nodemailer.createTransport({
    host: configuration.host,
    port: configuration.port,
    secure: configuration.secure,
    auth: {
      user: configuration.user,
      pass: configuration.password,
    },
  });
  const safe = {
    name: escapeHtml(enquiry.name),
    email: escapeHtml(enquiry.email),
    company: escapeHtml(enquiry.company || 'Not provided'),
    service: escapeHtml(enquiry.service),
    notes: escapeHtml(enquiry.notes || 'No additional notes provided.').replace(/\r?\n/g, '<br>'),
  };

  await transporter.sendMail({
    from: configuration.from,
    to: configuration.to,
    replyTo: enquiry.email,
    subject: `New project enquiry — ${enquiry.name.replace(/[\r\n]/g, ' ')}`,
    text: [
      'New project enquiry',
      '',
      `Name: ${enquiry.name}`,
      `Email: ${enquiry.email}`,
      `Company or project: ${enquiry.company || 'Not provided'}`,
      `Service: ${enquiry.service}`,
      '',
      'Project goals:',
      enquiry.notes || 'No additional notes provided.',
    ].join('\n'),
    html: `
      <div style="margin:0;background:#f3f4f6;padding:32px;font-family:Arial,sans-serif;color:#171717">
        <table role="presentation" style="width:100%;max-width:640px;margin:0 auto;border-collapse:collapse;background:#fff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden">
          <tr>
            <td style="padding:28px 32px;background:#111216;color:#fff">
              <p style="margin:0 0 8px;color:#ff7a32;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase">Buildora · Project enquiry</p>
              <h1 style="margin:0;font-size:24px">New enquiry from ${safe.name}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px">
              <table role="presentation" style="width:100%;border-collapse:collapse">
                <tr><th align="left" style="padding:10px 0;border-bottom:1px solid #eee;color:#777;font-size:12px">NAME</th><td style="padding:10px 0;border-bottom:1px solid #eee">${safe.name}</td></tr>
                <tr><th align="left" style="padding:10px 0;border-bottom:1px solid #eee;color:#777;font-size:12px">EMAIL</th><td style="padding:10px 0;border-bottom:1px solid #eee"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
                <tr><th align="left" style="padding:10px 0;border-bottom:1px solid #eee;color:#777;font-size:12px">COMPANY / PROJECT</th><td style="padding:10px 0;border-bottom:1px solid #eee">${safe.company}</td></tr>
                <tr><th align="left" style="padding:10px 0;border-bottom:1px solid #eee;color:#777;font-size:12px">SERVICE</th><td style="padding:10px 0;border-bottom:1px solid #eee">${safe.service}</td></tr>
              </table>
              <h2 style="margin:24px 0 8px;font-size:15px">Project goals</h2>
              <p style="margin:0;color:#444;line-height:1.7">${safe.notes}</p>
            </td>
          </tr>
        </table>
      </div>
    `,
  });
}
