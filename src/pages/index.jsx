import Hr from "../components/Hr";
import ImageSlider from "../components/ImageSlider";
import CardPanel from "../components/CardPanel";
import images from "../data/food-images.json";

function Home() {
  const sliderImages = [
    "/food/food-img-1.jpg",
    "/food/food-img-2.jpg",
    "/places/places-img-3.jpg",
  ];

  return (
    <main>
      <h1 className="text-center text-info display-3 font-weight-bold cursive">
        From Italy, With Love
      </h1>
      <Hr />
      <ImageSlider images={sliderImages} />
      <CardPanel images={images.categories} />
    </main>
  );
}

export default Home;
