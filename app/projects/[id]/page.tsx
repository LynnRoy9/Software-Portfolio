import { notFound } from "next/navigation";
import { projectsData } from "@/lib/projects-data";
import { ProjectDetails } from "@/components/project-details";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectIndex = projectsData.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const previousProject =
    projectIndex > 0
      ? projectsData[projectIndex - 1]
      : projectsData[projectsData.length - 1];
  const nextProject =
    projectIndex < projectsData.length - 1
      ? projectsData[projectIndex + 1]
      : projectsData[0];

  return (
    <ProjectDetails
      project={project}
      previousProject={previousProject}
      nextProject={nextProject}
    />
  );
}
