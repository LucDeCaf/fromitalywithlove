import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../styles/CardPanel.module.scss";
import Image from "next/image";
import { nanoid } from "nanoid";

interface CardType {
  src: string;
  title: string;
  url?: string;
}

interface Props {
  images: CardType[];
}

const CardPanel = ({ images }: Props): JSX.Element => {
  const cards = images.map((image) => (
    <Col key={nanoid()} className="mb-4">
      <Card border="secondary">
        <a className={styles.cardImage} href={image.url}>
          <Image
            src={image.src}
            alt={`image of ${image.title}`}
            layout="responsive"
            width={0}
            height={0}
          />
        </a>
        <Card.Body>
          <Card.Title>{image.title}</Card.Title>
        </Card.Body>
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
}

export default CardPanel;
