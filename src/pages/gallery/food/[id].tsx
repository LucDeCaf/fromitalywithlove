import Heading from "../../../components/Heading";
import CardPanel from "../../../components/CardPanel";
import { GetStaticProps } from "next";
import { pid } from "process";

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

export async function getStaticPaths() {
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
      pageId: params.id,
      images: images,
    },
    revalidate: 10,
  };
};
