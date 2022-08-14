import Gallery from "../../../components/Gallery";
import images from "../../../data/food-images.json";

function FoodGallery() {
  return (
    <main>
      <Gallery title="Food" images={images.categories} />
    </main>
  )
}

export default FoodGallery;
