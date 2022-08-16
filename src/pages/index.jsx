import Hr from "../components/Hr";
import ImageSlider from "../components/ImageSlider";
import CardPanel from "../components/CardPanel";
import foodImages from "../data/food-images.json";
import carouselImages from "../data/carousel-images.json";

function Home() {
  return (
    <main>
      <h1 className="text-center text-info display-3 font-weight-bold cursive">
        From Italy, With Love
      </h1>
      <Hr />
      <ImageSlider images={carouselImages.categories} />
      <CardPanel images={foodImages.categories} />
    </main>
  );
}

export default Home;
