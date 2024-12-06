import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id'); // Get the 'id' query parameter

  try {
    // Connect to the database
    const connection = await mysql.createConnection({
      host: "saitergul.com",
      user: "sai1cbgulcom_admin",
      password: "mznR301bJyGoHCc96wtdi7Nw22R9wJcmB23iveXseGwgEMZ9p1GV5bEhdyVPfJxKE9",
      database: "sai1cbgulcom_database"
    });

    // Query to fetch project details and associated photos
    const [rows] = await connection.execute(
      `SELECT p.id, p.title, p.location, p.description, 
              GROUP_CONCAT(pp.photo_path) AS photos
       FROM projects p
       LEFT JOIN project_photos pp ON p.id = pp.project_id
       WHERE p.id = ?
       GROUP BY p.id`,
      [id]
    );

    await connection.end();

    if (rows.length === 0) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const project = rows[0];
    const photos = project.photos ? project.photos.split(",") : [];
    return NextResponse.json({ project, photos });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch project details" }, { status: 500 });
  }
}
