import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req: any, res: any) {
  try {
    const client = await clientPromise;
    const db = client.db("404Direct");
    const referral:string =  req.body.referral
    console.log(referral)
    const search = await db
      .collection("accounts")
      .find({"referral":referral })
      .toArray()
      res.json(search)

  } catch (e: any) {
    res.status(500).send({ message: e.message });
  }
}
