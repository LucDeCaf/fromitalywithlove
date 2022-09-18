import Heading from "../../../components/Heading";
import CardPanel from "../../../components/CardPanel";
import { GetStaticProps } from "next";

const Page = ({ images }) => {
  return (
    <main>
      <Heading>Places</Heading>
      <CardPanel images={images} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://fromitalywithlove.vercel.app/api/get/images");
  const data = await res.json();
  if (data.success === false) throw Error;

  const images = await data.data.filter(image => image.categories.includes("places"));

  return {
    props: {
      images: images,
    },
  };
};

export default Page;
