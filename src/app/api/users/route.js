import pool from "../db"
import { NextResponse } from "next/server"
 
export async function GET(req, res) {
  try {
    const result = await pool.query('select * from users');
    return NextResponse.json({ result: result.rows }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'failed to load data' }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    const body = await req.json();
    let query = `INSERT INTO users ("userName", email, password, adress) VALUES ('${body.userName}', '${body.userEmail}', '${body.password}', '${body.adress}');`;
    const result = await pool.query(query);
    return NextResponse.json({ result: result }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'failed to load data' }, { status: 500 });
  }
}