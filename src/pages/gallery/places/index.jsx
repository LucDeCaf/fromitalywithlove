import Gallery from "../../../components/Gallery";
import images from "../../../data/places-images.json";

function PlacesGallery() {
  return (
    <main>
      <Gallery title="Places" images={images.categories} />
    </main>
  )
}

export default PlacesGallery;
