import clientPromise from "../../lib/mongodb"
import {applyApiCookie} from 'next-universal-cookie';



export default async function handler(req: any, res: any) {
  applyApiCookie(req, res)
  res.clearCookie("Autherized", {path:'/api'})

  const client = await clientPromise
  const db = client.db('404Direct')
  try {

    if (req.body.role != undefined) {
      await db.collection("accounts").updateOne({token: req.cookies.Autherized}, {
        $set: {role: req.body.role}})  
        return res
   


    } else if (req.body.telegram != undefined) {
      await db.collection("accounts").updateOne({token: req.cookies.Autherized}, {
        $set: {telegram: req.body.telegram}})
  
    } else if (req.body.email != undefined) {
      await db.collection("accounts").updateOne({token: req.cookies.Autherized}, {
        $set: {email: req.body.email}})

    } else if (req.body.company != undefined) {
      await db.collection("accounts").updateOne({token: req.cookies.Autherized}, {
        $set: {company: req.body.company}})


    } else if (req.body.industry != undefined) {
      await db.collection("accounts").updateOne({token: req.cookies.Autherized}, {
        $set: {industry: req.body.industry}})


    } else if (req.body.linkedin != undefined) {
      await db.collection("accounts").updateOne({token: req.cookies.Autherized}, {
        $set: {linkedin: req.body.linkedin}})
    } 

  }

  catch {
    res.status(400).json({ status: 'Not able to create new profile' , data: req.body})
  }




}