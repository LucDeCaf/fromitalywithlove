import Heading from "../../../components/Heading";
import CardPanel from "../../../components/CardPanel";
import { GetStaticProps } from "next";

export default function Page({ images }) {
  return (
    <main>
      <Heading>Food</Heading>
      <CardPanel images={images} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/get/images");
  const data = await res.json();
  if (data.success === false) throw Error;

  const foodImages = data.data.filter(image => image.categories.includes("food"));

  return {
    props: {
      images: foodImages,
    },
  };
};
