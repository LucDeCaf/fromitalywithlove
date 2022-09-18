import { Container, Row, Col } from "react-bootstrap";
import { GetStaticProps } from "next";

const Page = ({ images }) => {
  return (
    <main>
      <Container>
        <Row>
          <Col xs={6}>
            <h1>Welcome, user</h1>
            <h3>Manage your content</h3>

          </Col>
          <div>
            
          </div>
        </Row>
      </Container>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://fromitalywithlove.vercel.app/api/get/images");
  const data = await res.json();
  if (data.success === false) throw Error;

  const images = data.data;

  return {
    props: {
      images: images,
    },
  };
};

export default Page;
