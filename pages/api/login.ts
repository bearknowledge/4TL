import clientPromise from "../../lib/mongodb"
import {applyApiCookie} from 'next-universal-cookie';


export default async function handler(req: any, res: any) {
  applyApiCookie(req, res)
  const client = await clientPromise
  const db = client.db('404Direct')
  try {
    const login = await db.collection("accounts").find(
        {email: req.body.email,
          password: req.body.password}).toArray()

    if (login.length != 0 ) {

    res.cookie("Autherized",login[0].token, {path:'/'})
    res.redirect("/dashboard/" + login[0].token)
      

    } else {
       res.status(400).json({ status: 'Incorrect Email/Password'})
    }
    

  } catch {
     res.status(400).json({ status: 'Not able to login'})
  }


}