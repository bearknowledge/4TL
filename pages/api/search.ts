import clientPromise from "../../lib/mongodb";

export default async function handler(req: any, res: any) {
  try {
    const client = await clientPromise;
    const db = client.db("404Direct");

    const profiles = await db
      .collection("accounts")
      .createIndex({ "$**": "text" });

    const search = await db
      .collection("accounts")
      .find({ $text: {$search: req.body.search}})
      .toArray()
      
      res.json(search)
  } catch (e: any) {
    res.status(500).send({ message: e.message });
  }
}
