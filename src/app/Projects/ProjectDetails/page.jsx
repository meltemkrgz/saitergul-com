"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./styles.module.scss";

async function fetchProjectDetails(id) {
  const res = await fetch(`http://localhost:3000/api/getProjectDetails?id=${id}`);
  const data = await res.json();
  return data;
}

export default function ProjectDetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [project, setProject] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [activePhoto, setActivePhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (id) {
        try {
          const { project, photos } = await fetchProjectDetails(id);
          setProject(project);
          setPhotos(photos);
        } catch (error) {
          console.error("Error fetching project details:", error);
        }
      }
      setLoading(false);
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handlePhotoClick = (photo) => {
    setActivePhoto(photo);
  };

  const closePhotoViewer = () => {
    setActivePhoto(null);
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Yükleniyor...</p>
      </div>
    );
  }

  if (!project) {
    return <p>Proje bulunamadı.</p>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.location}>Konum: {project.location}</p>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.photoGalleryTitle}>Fotoğraflar</div>
        <div className={styles.photoGallery}>
          {photos.map((photo, index) => (
            <div key={index} className={styles.photoContainer}>
              <img
                src={photo}
                alt={project.title}
                className={styles.photo}
                onClick={() => handlePhotoClick(photo)}
              />
              <div className={styles.imgInfo}>İncelemek için tıklayın</div>
            </div>
          ))}
        </div>
      </div>

      {activePhoto && (
        <div className={styles.photoViewer} onClick={closePhotoViewer}>
          <img src={activePhoto} alt="prefabrik-hatay" className={styles.enlargedPhoto} />
        </div>
      )}
    </div>
  );
}
