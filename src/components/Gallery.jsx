import styles from "../styles/Gallery.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "./Heading";
import { nanoid } from "nanoid";

function Gallery(props) {
  const imageElements = props.images.map((image) => {
    return (
      <Col key={nanoid()} className="mt-4">
        {image.title ? (
          <a className="text-decoration-none h1" href={image.url}>
            {image.title}
          </a>
        ) : null}
        {image.url ? (
          <a href={image.url}>
            <img className={styles.galleryImage} src={image.src} />
          </a>
        ) : (
          <img className={styles.galleryImage} src={image.src} />
        )}
      </Col>
    );
  });

  return (
    <>
      {props.title && <Heading>{props.title}</Heading>}
      <Container fluid="md">
        <Row xs="1" sm="2">
          {imageElements}
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
