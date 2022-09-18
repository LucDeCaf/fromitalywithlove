import { Container, Row, Col } from "react-bootstrap";
import { nanoid } from "nanoid";
import CustomCard, { CardType } from "./CustomCard";

const CardPanel = ({ images }: { images: CardType[] }): JSX.Element => {
  console.log(images);

  const cards = images.map((image) => (
    <Col key={nanoid()} className="mb-4">
      <CustomCard
        downloadUrl={image.downloadUrl}
        label={image.label}
        desc={image.desc}
      />
    </Col>
  ));

  return (
    <>
      {cards.length > 0 ? (
        <Container>
          <Row xs="1" md="2" lg="3">
            {cards}
          </Row>
        </Container>
      ) : (
        <h1 className="text-center text-primary text-decoration-underline">
          No images
        </h1>
      )}
    </>
  );
};

export default CardPanel;
