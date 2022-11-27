import clientPromise from "../../lib/mongodb"
import {applyApiCookie} from 'next-universal-cookie';

function randomString(length: number, chars: any) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}


export default async function handler(req: any, res: any) {
  applyApiCookie(req, res)

  const client = await clientPromise
  const db = client.db('404Direct')
  try {

    const getReferral = await db.collection("accounts").find({referral: req.body.referral }).toArray()
    
if (getReferral.length == 0) {
  res.json({status: "incorrect referral code"})
} 
 else if (getReferral[0].uses == undefined) {

  const checkProfile = await db.collection("accounts").find(
    {email: req.body.email}).toArray()

 if (checkProfile.length !== 0 ) {
 res.json({status: "account already exist"})
 } 

 await db.collection("accounts").updateOne({referral: req.body.referral}, {
  $set: {uses: 1}})

console.log(req.body)


const rString = randomString(16, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
const token = randomString(24, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' );
  req.body.referral = rString
  req.body.token = token
  delete req.body.input
   await db.collection("accounts").insertOne(req.body);
   res.cookie("Autherized1", token, {path:'/'})

    res.redirect("/dashboard/" + token)

} 
 else {
  res.json({status: "referral code already used"})
}
} 
  
  catch {
    res.status(400).json({ status: 'Not able to create new profile' , data: req.body})
  }

}