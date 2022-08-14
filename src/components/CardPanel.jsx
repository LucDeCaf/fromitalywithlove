import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from "../styles/CardPanel.module.scss";
import { nanoid } from "nanoid";

function CardPanel(props) {
  const cards = props.images.map((image) => (
    <Col key={nanoid()} className="mb-4">
      <Card className={styles.cardImage}>
        <a href={image.url}>
          <Card.Img src={image.src} alt={"Image of " + image.title} />
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
