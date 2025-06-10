import { source } from '@/lib/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  // For now, let's use a simple div to render content
  return (
    <DocsPage toc={[]} full={false}>
      <DocsBody>
        <h1>{page.data.title}</h1>
        <div>
          <p>Documentation content will be rendered here.</p>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export function generateMetadata({
  params,
}: {
  params: { slug?: string[] };
}): Metadata {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: 'ForteUI Documentation',
  };
}
