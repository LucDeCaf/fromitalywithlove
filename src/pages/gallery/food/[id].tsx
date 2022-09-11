import Heading from "../../../components/Heading";
import CardPanel from "../../../components/CardPanel";

export default function Page({ pageId }) {
  // Capitalize the first letter in the page title
  const pageTitle = pageId.slice(0, 1).toUpperCase() + pageId.slice(1);

  return (
    <main>
      <Heading>{pageTitle}</Heading>
      {/* <CardPanel images={[]} /> */}
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
