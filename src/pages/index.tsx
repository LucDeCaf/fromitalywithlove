import type { GetStaticProps } from "next";
import Hr from "../components/Hr";
import ImageSlider from "../components/ImageSlider";
import CardPanel from "../components/CardPanel";

interface PageProps {
  carouselImages: [];
  cardPanelImages: [];
}

function Page({ carouselImages, cardPanelImages }: PageProps) {
  console.log(cardPanelImages);
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
  const res = await fetch("https://fromitalywithlove.vercel.app/api/get/images");
  const data = await res.json();
  if (data.success === false) throw Error;
  const images = data.data;

  const carouselImages = images.filter((doc) =>
    doc.categories.includes("carousel")
  );
  const cardPanelImages = images.filter((doc) => doc.categories.includes("food"));

  return {
    props: {
      carouselImages: carouselImages,
      cardPanelImages: cardPanelImages,
    },
  };
};

export default Page;
