import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SideProjectPage } from "@/components/home-dashboard/side-projects/SideProjectPage";
import {
  getSideProjectBySlug,
  getSideProjectSlugs,
} from "@/data/side-projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getSideProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getSideProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Lucas Viga`,
    description: project.cardDescription,
  };
}

export default async function ProjectSlugPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getSideProjectBySlug(slug);
  if (!project) notFound();
  return <SideProjectPage project={project} />;
}
