import Hr from "../components/Hr";
import ImageSlider from "../components/ImageSlider";
import CardPanel from "../components/CardPanel";

function Home() {
  return (
    <main>
      <h1 className="text-center text-info display-3 font-weight-bold cursive">
        From Italy, With Love
      </h1>
      <Hr />
      {/* <ImageSlider images={[]} />
      <CardPanel images={[]} /> */}
    </main>
  );
}

export default Home;