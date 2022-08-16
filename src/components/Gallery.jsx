import styles from "../styles/Gallery.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { nanoid } from "nanoid";

function Gallery(props) {
  const imageElements = props.images.map((image) => {
    return (
      <Col key={nanoid()} className="mt-4">
        {image.title && (
          <a className="text-decoration-none h1" href={image.url}>
            {image.title}
          </a>
        )}
        <a href={image.url} className={styles.galleryImage}>
          <Image
            className="border border-secondary rounded"
            src={image.src}
            alt={`image of ${image.title}`}
            layout="responsive"
            width={3}
            height={2}
          />
        </a>
      </Col>
    );
  });

  return (
    <>
      <Container fluid="md">
        <Row xs="1" sm="2">
          {imageElements}
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
