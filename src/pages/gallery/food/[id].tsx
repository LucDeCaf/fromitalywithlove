import Heading from "../../../components/Heading";
import CardPanel from "../../../components/CardPanel";
import { GetStaticProps } from "next";

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
  const pid = params.id;
  const res = await fetch("https://fromitalywithlove.vercel.app/api/get/images");
  const data = await res.json();
  if (data.success === false) throw Error;

  const images = data.data.filter((image) => image.categories.includes(pid));

  return {
    props: {
      pageId: pid,
      images: images,
    },
  };
}
