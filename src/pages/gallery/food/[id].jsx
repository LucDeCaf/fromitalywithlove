import Heading from "../../../components/Heading";
import Gallery from "../../../components/Gallery";
import foodImages from "../../../data/food-images.json";

export default function SubGallery({ pageId }) {
  // Capitalize the first letter in the page title
  const pageTitle = pageId.slice(0, 1).toUpperCase() + pageId.slice(1);
  const usedImages = foodImages[pageId];

  return (
    <main>
      <Heading>{pageTitle}</Heading>
      <Gallery images={usedImages} />
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

export async function getStaticProps({ params }) {
  return {
    props: {
      pageId: params.id,
    },
  };
}
