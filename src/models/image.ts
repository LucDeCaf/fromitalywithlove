import { Schema, model, models } from "mongoose";

export interface ImageType {
  src: string;
  title: string | undefined;
  url: string | undefined;
  desc: string | undefined;
  links: { url: string; text: string; }[];
}

const imageSchema = new Schema({
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  categories: {
    type: Array,
    required: true,
  },
  links: {
    type: Array,
  }
});

const Image = models.Image || model("Image", imageSchema);
export default Image;
