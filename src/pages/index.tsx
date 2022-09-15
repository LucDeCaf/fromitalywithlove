import { db } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import type { GetStaticProps } from "next";
import Hr from "../components/Hr";
import ImageSlider from "../components/ImageSlider";
import CardPanel from "../components/CardPanel";

interface PageProps {
  carouselImages: [];
  cardPanelImages: [];
}

function Home({ carouselImages, cardPanelImages }: PageProps) {
  console.log(carouselImages);
  return (
    <main>
      <h1 className="text-center text-info display-3 font-weight-bold cursive">
        From Italy, With Love
      </h1>
      <Hr />
      <ImageSlider images={carouselImages} />
      <CardPanel images={cardPanelImages} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const dbInstance = collection(db, "images");

  // Query for carousel images
  const carouselQuery = query(
    dbInstance,
    where("categories", "array-contains", "carousel")
  );
  const carouselImages = await getDocs(carouselQuery);
  const carouselImageDocs = carouselImages.docs.map((doc) => doc.data());

  // Query for card panel images
  const cardPanelQuery = query(
    dbInstance,
    where("categories", "array-contains", "food")
  );
  const cardPanelImages = await getDocs(cardPanelQuery);
  const cardPanelImageDocs = cardPanelImages.docs.map((doc) => doc.data());

  return {
    props: {
      carouselImages: carouselImageDocs,
      cardPanelImages: cardPanelImageDocs,
    },
  };
};

export default Home;
