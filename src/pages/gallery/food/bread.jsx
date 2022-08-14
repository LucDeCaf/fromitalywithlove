import Gallery from "../../../components/Gallery";
import images from "../../../data/food-images.json"

function BreadGallery() {
  return (
    <main>
      <Gallery title="Bread" images={images.bread} />
    </main>
  )
}

export default BreadGallery;
