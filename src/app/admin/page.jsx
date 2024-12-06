'use client';

import { useState } from 'react';
import styles from './styles.module.scss';

export default function AdminPage() {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    location: '',
    images: [],
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleFileChange = (e) => {
    setProjectData({ ...projectData, images: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('title', projectData.title);
      formData.append('description', projectData.description);
      formData.append('location', projectData.location);

      for (const file of projectData.images) {
        formData.append('images', file);
      }

      const response = await fetch('/api/addProject', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('Proje başarıyla eklendi!');
        setProjectData({ title: '', description: '', location: '', images: [] });
      } else {
        const errorData = await response.json();
        setMessage(`Hata: ${errorData.error}`);
      }
    } catch (error) {
      console.error(error);
      setMessage('Bir hata oluştu.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Proje Ekle</h1>
      {message && <p className={styles.message}>{message}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Başlık</label>
          <input
            type="text"
            id="title"
            name="title"
            value={projectData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Açıklama</label>
          <textarea
            id="description"
            name="description"
            value={projectData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="location">Konum</label>
          <input
            type="text"
            id="location"
            name="location"
            value={projectData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="images">Fotoğraflar</label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Projeyi Ekle
        </button>
      </form>
    </div>
  );
}
