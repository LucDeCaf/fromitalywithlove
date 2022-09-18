import Heading from "../../../components/Heading";
import CardPanel from "../../../components/CardPanel";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Page({ pageId, images }) {
  // Capitalize the first letter in the page title
  const pageTitle = pageId.slice(0, 1).toUpperCase() + pageId.slice(1);

  return (
    <main>
      <Heading>{pageTitle}</Heading>
      <CardPanel images={images} />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "pasta" } },
      { params: { id: "meat" } },
      { params: { id: "bread" } },
      { params: { id: "fruit" } },
    ],
    fallback: false,
  };
}

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
