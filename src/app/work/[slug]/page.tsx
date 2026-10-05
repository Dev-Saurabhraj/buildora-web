import { ProjectDetailPage } from '../../../components/project/ProjectDetailPage';

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ProjectDetailPage slug={slug} />;
}
