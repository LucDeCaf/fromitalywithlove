import Heading from "../../../components/Heading";
import Gallery from "../../../components/Gallery";
import images from "../../../data/food-images.json";

export default function FoodGallery() {
  return (
    <main>
      <Heading>Food</Heading>
      <Gallery title="Food" images={images.categories} />
    </main>
  )
}
