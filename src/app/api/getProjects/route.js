import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: "saitergul.com",
      user: "sai1cbgulcom_admin",
      password: "mznR301bJyGoHCc96wtdi7Nw22R9wJcmB23iveXseGwgEMZ9p1GV5bEhdyVPfJxKE9",
      database: "sai1cbgulcom_database" 
    });

    const [rows] = await connection.execute(
      `SELECT p.id, p.title, p.location, COUNT(pp.id) AS numberOfPhotos, 
              COALESCE(MIN(pp.photo_path), '') AS thumbnail
       FROM projects p
       LEFT JOIN project_photos pp ON p.id = pp.project_id
       GROUP BY p.id`
    );

    await connection.end();

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Bir hata oluştu." }, { status: 500 });
  }
}
