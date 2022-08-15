import Gallery from "../../../components/Gallery";
import images from "../../../data/food-images.json"

function MeatGallery() {
  return (
    <main>
      <Gallery title="Meat" images={images.meat} />
    </main>
  )
}

export default MeatGallery;
