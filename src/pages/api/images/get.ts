import connectMongo from "../../../utils/connectMongo";
import Image from "../../../models/image";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ success: false, message: "Invalid request " + req.method });
  }

  try {
    await connectMongo();

    const images = await Image.find();

    return res.status(200).json({ success: true, data: images });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown Error";
    return res.status(400).json({ success: false, message: message });
  }
}
