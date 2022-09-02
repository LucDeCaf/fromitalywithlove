import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from "../styles/CardPanel.module.scss";
import Image from "next/image";
import { nanoid } from "nanoid";
import { FC } from "react";
import { ImageType } from "../models/image";

interface Props {
  images: ImageType[];
  img: boolean;
}

const CardPanel: FC<Props> = (props) => {
  const cards = props.images.map((image) => (
    <Col key={nanoid()} className="mb-4">
      <Card border="secondary">
        <a className={styles.cardImage} href={image.url}>
          <Image
            src={image.src}
            alt={`image of ${image.title}`}
            layout="responsive"
            width={1}
            height={1}
          />
        </a>
        {!props.img && (
          <Card.Body>
            {image.title && <Card.Title>{image.title}</Card.Title>}
            {image.desc && <Card.Text>{image.desc}</Card.Text>}
            {image.links !== [] &&
              image.links.map((imgLink) => (
                <Link href={imgLink.url} key={nanoid()}>
                  <Card.Link>{imgLink.text}</Card.Link>
                </Link>
              ))}
          </Card.Body>
        )}
      </Card>
    </Col>
  ));

  return (
    <Container>
      <Row xs="1" md="2" lg="3">
        {cards}
      </Row>
    </Container>
  );
};

export default CardPanel;
