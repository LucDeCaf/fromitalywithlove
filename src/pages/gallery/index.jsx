import Heading from "../../components/Heading";
import Gallery from "../../components/Gallery";
import images from "../../data/gallery-images.json";

export default function GalleryPage() {
  return (
    <main>
      <Heading>Gallery</Heading>
      <Gallery title="Gallery" images={images.categories} />
    </main>
  );
}
