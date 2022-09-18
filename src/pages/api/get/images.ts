import { collection, getDocs, DocumentData } from "firebase/firestore";
import { NextApiHandler } from "next";
import { db } from "../../../utils/firebase";

interface Response {
  success: boolean;
  message?: string;
  data?: DocumentData[];
}

const handler: NextApiHandler<Response> = async (req, res) => {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ success: false, message: `Invalid method "${req.method}"` });
  }

  try {
    const dbInstance = collection(db, "images");
    const images = await getDocs(dbInstance);
    const data = images.docs.map((doc) => doc.data());

    return res.status(200).json({ success: true, data: data });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

export default handler;
