import { Container, Accordion } from "react-bootstrap";
import { GetStaticProps } from "next";
import { nanoid } from "nanoid";
import type { ImageType } from "../../utils/types";
import Link from "next/link";

const Page = ({ images }: { images: ImageType[] }) => {
  return (
    <main>
      <Container>
        <div className="text-info">
          <h1 className="text-center text-decoration-underline display-4">
            Welcome, MG
          </h1>
          <h3 className="text-center mb-4 display-6">Manage your content</h3>
        </div>
        <h3 className="text-center text-decoration-underline h1 text-primary">
          Images
        </h3>
        <Accordion>
          {images.map((image, index) => {
            const editLink = `/admin/manage/image?id=${image.id}`;

            return (
              <Accordion.Item key={nanoid()} eventKey={index.toString()}>
                <Accordion.Header>{image.label}</Accordion.Header>
                <Accordion.Body>
                  Description: &quot;{image.desc}&quot;
                  <br />
                  Image: <a href={image.downloadUrl}>{image.downloadUrl}</a>
                  <br />
                  <Link href={editLink}>
                    <a>Edit image {image.id}</a>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
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
