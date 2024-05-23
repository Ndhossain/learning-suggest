import pool from "../db"
import { NextResponse } from "next/server"

export async function POST(req, res) {
  try {
    const body = await req.formData();
    return NextResponse.json({ result: {email: body.get('email'), password: body.get('password')} }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'failed to load data' }, { status: 500 });
  }
}