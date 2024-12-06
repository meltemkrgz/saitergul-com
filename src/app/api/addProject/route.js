import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export const POST = async (req) => {
  try {
    const formData = await req.formData();

    const title = formData.get('title');
    const description = formData.get('description');
    const location = formData.get('location');
    const images = formData.getAll('images');

    if (!title || !description || !location || images.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Tüm alanlar zorunludur.' }),
        { status: 400 }
      );
    }

    // Fotoğrafları `public/` içine kaydet
    const uploadDirectory = path.join(process.cwd(), 'public/uploads');
    await fs.promises.mkdir(uploadDirectory, { recursive: true });

    const savedImagePaths = [];
    for (const image of images) {
      console.log(image);

      // Check if image has the 'name' property instead of 'filename'
      if (image && typeof image === 'object' && 'name' in image) {
        const fileExtension = image.name.split('.').pop();
        const uniqueFileName = `${crypto.randomBytes(16).toString('hex')}.${fileExtension}`;
        const filePath = path.join(uploadDirectory, uniqueFileName);

        // Use buffer() method to get file content
        const buffer = await image.arrayBuffer();
        const fileBuffer = Buffer.from(buffer);

        // Fotoğrafı kaydet
        await fs.promises.writeFile(filePath, fileBuffer);
        
        savedImagePaths.push(`/uploads/${uniqueFileName}`);
      } else {
        console.error('Invalid file or missing name', image);
      }
    }

    // Veritabanı bağlantısını kur
    const db = await mysql.createConnection({
        host: "saitergul.com",
        user: "sai1cbgulcom_admin",
        password: "mznR301bJyGoHCc96wtdi7Nw22R9wJcmB23iveXseGwgEMZ9p1GV5bEhdyVPfJxKE9",
        database: "sai1cbgulcom_database"
      });

    // Projeyi veritabanına ekle
    const [result] = await db.execute(
      'INSERT INTO projects (title, description, location) VALUES (?, ?, ?)',
      [title, description, location]
    );

    const projectId = result.insertId;

    // Fotoğraf yollarını veritabanına ekle
    for (const imagePath of savedImagePaths) {
      await db.execute(
        'INSERT INTO project_photos (project_id, photo_path) VALUES (?, ?)',
        [projectId, imagePath]
      );
    }

    await db.end();

    return new Response(
      JSON.stringify({ message: 'Proje ve fotoğraflar başarıyla eklendi.' }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Bir hata oluştu.' }),
      { status: 500 }
    );
  }
};
