import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../styles/CardPanel.module.scss";
import Image from "next/image";
import { nanoid } from "nanoid";

interface CardType {
  downloadUrl: string;
  label: string;
  desc: string;
  url?: string;
}

interface Props {
  images: CardType[];
  img?: boolean;
}

const CardPanel = ({ images, img }: Props): JSX.Element => {
  const cards = images.map((image) => (
    <Col key={nanoid()} className="mb-4">
      <Card border="secondary">
        <a className={styles.cardImage} href={image.url}>
          <Image
            src={image.downloadUrl}
            alt={`image of ${image.label}`}
            layout="responsive"
            width={0}
            height={0}
          />
        </a>
        {!img && (
          <Card.Body>
            <Card.Title>{image.label}</Card.Title>
            <Card.Text>{image.desc}</Card.Text>
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
