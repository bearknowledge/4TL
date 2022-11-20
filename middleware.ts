
import { NextRequest, NextResponse } from "next/server";



function randomString(length: number, chars: any) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

const rString = randomString(16, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');


export function middleware(req: NextRequest, res: any) {
const response = NextResponse.next()
const verify = req.cookies.get("Autherized")
  let url = req.url


  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/login")
  }
  if (!verify && url.includes("/profile")) {
    return NextResponse.redirect("http://localhost:3000/login")
  }
  if(verify && url === "http://localhost:3000/login") {

    return NextResponse.redirect('http://localhost:3000/dashboard/300')
  }

  return response;
}


// export const config = {
//   matcher: '/',
// }