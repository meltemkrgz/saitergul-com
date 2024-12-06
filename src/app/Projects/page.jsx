"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true); // Yükleniyor durumunu başlat
        const response = await fetch("/api/getProjects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Projeler yüklenirken bir hata oluştu:", error);
      } finally {
        setLoading(false); // Yükleniyor durumunu bitir
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (id) => {
    router.push(`/Projects/ProjectDetails?id=${id}`);
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Projeler yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            src={project.thumbnail}
            title={project.title}
            location={project.location}
            numberOfPhotos={project.numberOfPhotos}
            onClick={() => handleProjectClick(project.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
