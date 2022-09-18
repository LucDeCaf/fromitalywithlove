import Heading from "../../components/Heading";
import CardPanel from "../../components/CardPanel";
import { GetStaticProps } from "next";

const Page = ({ images }) => {
  return (
    <main>
      <Heading>Gallery</Heading>
      <CardPanel images={images} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://fromitalywithlove.vercel.app/api/get/images"
  );
  const data = await res.json();
  if (data.success === false) throw Error(data.message);

  const images = await data.data;

  return {
    props: {
      images: images,
    },
    revalidate: 10,
  };
};

export default Page;
