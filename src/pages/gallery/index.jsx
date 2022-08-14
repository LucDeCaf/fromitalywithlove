import Gallery from "../../components/Gallery";
import images from "../../data/gallery-images.json";

function GalleryPage() {
  return (
    <main>
      <Gallery title="Gallery" images={images.categories} />
    </main>
  );
}

export default GalleryPage;
