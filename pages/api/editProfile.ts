import clientPromise from "../../lib/mongodb"
import {applyApiCookie} from 'next-universal-cookie';

function randomString(length: number, chars: any) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

export default async function handler(req: any, res: any) {
  const rString = randomString(16, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  applyApiCookie(req, res)
  res.clearCookie("Autherized", {path:'/api'})
  const client = await clientPromise
  const db = client.db('404Direct')
  
  try {

    if (req.body.role != undefined) {
      await db.collection("accounts").updateOne({token: req.cookies.Autherized}, {
        $set: {role: req.body.role}})  
        res.redirect("/profile/" + rString)

   
    } else if (req.body.telegram != undefined) {
      await db.collection("accounts").updateOne({token: req.cookies.Autherized}, {
        $set: {telegram: req.body.telegram}})
        res.redirect("/profile/" + rString)
  
    } else if (req.body.email != undefined) {
      await db.collection("accounts").updateOne({token: req.cookies.Autherized}, {
        $set: {email: req.body.email}})
        res.redirect("/profile/" + rString)

    } else if (req.body.company != undefined) {
      await db.collection("accounts").updateOne({token: req.cookies.Autherized}, {
        $set: {company: req.body.company}})
        res.redirect("/profile/" + rString)


    } else if (req.body.industry != undefined) {
      await db.collection("accounts").updateOne({token: req.cookies.Autherized}, {
        $set: {industry: req.body.industry}})
        res.redirect("/profile/" + rString)


    } else if (req.body.linkedin != undefined) {
      await db.collection("accounts").updateOne({token: req.cookies.Autherized}, {
        $set: {linkedin: req.body.linkedin}})
        res.redirect("/profile/" + rString)
    } 

  }

  catch {
    res.status(400).json({ status: 'Not able to create new profile' , data: req.body})
  }




}