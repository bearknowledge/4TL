import { NextRequest, NextResponse } from "next/server";
import {applyApiCookie} from 'next-universal-cookie';

export default async function handler(req: any, res: any) {
  applyApiCookie(req, res)
  try {
    res.clearCookie("Autherized")
    res.redirect("/login/")
    } 
   catch {
    res.status(400).json({ status: 'Not able to logout'})
  }
}