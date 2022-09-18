import { NextApiHandler } from "next";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../utils/firebase";

interface Response {
  success: boolean;
  data?: any;
  message?: string;
}

const handler: NextApiHandler<Response> = async (req, res) => {
  console.log("test")
  if (req.method !== "POST") {
    return res
    .status(405)
    .json({ success: false, message: `Invalid method "${req.method}"` });
  }

  const data = req.body;
  const storageRef = ref(
    storage,
    `images/${req.body.label.toLowerCase().replaceAll(" ", "-")}`
  );
  
  if (!data.label || !data.desc || !data.categories || !data.file) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid request body" });
  }

  try {
    const snapshot = await uploadBytesResumable(storageRef, data.file);
    const downloadUrl = await getDownloadURL(snapshot.ref);
    const dbInstance = collection(db, "images");
    const reference = await addDoc(dbInstance, {
      label: data.label,
      desc: data.desc,
      categories: data.categories,
      downloadUrl: downloadUrl,
    });

    return res.status(201).json({ success: true, data: reference });
  } catch (err) {
    return res
      .status(400)
      .json({ success: false, message: `An error occured: ${err.message}` });
  }
};

export default handler;
