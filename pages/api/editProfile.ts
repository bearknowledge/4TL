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

  console.log(req.cookies.Autherized1)
  res.json({status:"working"})

    } else if (req.body.telegram != undefined) {
      await db.collection("accounts").updateOne({token: req.body.referral}, {
        $set: {telegram: req.body.telegram}})
  
    } else if (req.body.email != undefined) {

    } else if (req.body.company != undefined) {

    } else if (req.body.industry != undefined) {

    } else if (req.body.linkedin != undefined) {

    } 

  }

  catch {
    res.status(400).json({ status: 'Not able to create new profile' , data: req.body})
  }




}