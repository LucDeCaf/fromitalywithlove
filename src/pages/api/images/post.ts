import connectMongo from "../../../utils/connectMongo";
import Image from "../../../models/image";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Inavlid request " + req.method });
  }

  try {
    await connectMongo();

    const newImage = await Image.create(req.body);
    return res.status(201).json({ success: true, data: newImage });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown Error";
    return res.status(400).json({ success: false, message: message });
  }
}
