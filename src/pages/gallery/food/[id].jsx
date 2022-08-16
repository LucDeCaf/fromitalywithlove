import Heading from "../../../components/Heading";

export default function SubGallery(props) {
  const pageTitle = props.pageId.toUpperCase();
  
  return (
    <>
      <Heading>{pageTitle}</Heading>
    </>
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
