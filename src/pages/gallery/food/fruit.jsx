import Gallery from "../../../components/Gallery";
import images from "../../../data/food-images.json"

function FruitGallery() {
  return (
    <main>
      <Gallery title="Fruit" images={images.fruit} />
    </main>
  )
}

export default FruitGallery;
