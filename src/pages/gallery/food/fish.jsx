import Gallery from "../../../components/Gallery";
import images from "../../../data/food-images.json"

function FishGallery() {
  return (
    <main>
      <Gallery title="Fish" images={images.fish} />
    </main>
  )
}

export default FishGallery;
