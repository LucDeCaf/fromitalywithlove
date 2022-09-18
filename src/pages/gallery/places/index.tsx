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
  let images = [];
  try {
    const res = await fetch(
      "https://fromitalywithlove.vercel.app/api/get/images"
    );
    const data = await res.json();
    if (data.success === false) throw Error(data.message);

    images = await data.data;
  } catch (err) {
    console.error(err.message);
  }

  return {
    props: {
      images: images,
    },
  };
};

export default Page;
