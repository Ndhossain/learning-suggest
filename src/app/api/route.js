import pool from "./db"
import { NextResponse } from "next/server"
 
export async function GET(req, res) {
  try {
    return NextResponse.json({ result: "api is running" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'failed to load data' }, { status: 500 });
  }
}