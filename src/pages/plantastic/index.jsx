import Heading from "../../components/Heading";
import { Container, Row, Col } from "react-bootstrap";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Image from "next/image";
import styles from "../../styles/PlantasticPage.module.scss";

function Photo(props) {
  return (
    <div>
      <Col>
        <h1 className={styles.imgTitle}>{props.title}</h1>
        <Image
          src={props.src}
          alt={props.title + " image"}
          layout="responsive"
          width={1}
          height={1}
          objectFit="cover"
        />
      </Col>
    </div>
  );
}

export default function Page() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA4SI12aB8XY7TR0L2WCJW-sOyQyCwgMYA",
  });
  const bagCoordinates = { lat: -22.593586, lng: 14.533088 };

  return (
    <main className={styles.page}>
      <Heading>Plantastic</Heading>
      <Container>
        <h1 className={styles.bagTitle}>
          SwakopmundBlack2
        </h1>
        <Row md={3} xs={1} className="mb-4">
          <Photo src="/plantastic/swakopmundblack2-before.jpg" title="Before" />
          <Photo src="/plantastic/swakopmundblack2-after.jpg" title="After" />
          {isLoaded ? (
            <Col>
              <h1 className={styles.imgTitle}>Location</h1>
              <GoogleMap
                zoom={10}
                center={bagCoordinates}
                mapContainerStyle={{ width: "100%", height: "26rem" }}
              >
                <Marker position={bagCoordinates} />
              </GoogleMap>
            </Col>
          ) : (
            <Col>
              <h1>Loading...</h1>
            </Col>
          )}
        </Row>
        <Row>
          <p className={styles.bottomText}>
            <strong>
              Date: 2022-07-17
              <br />
              Marika: MI-1232
              <br />
              Black bag
              <br />
            </strong>
            Location:
            <br />
            Latitude: -22.593586
            <br />
            Longitude: 14.533088
            <br />
            <strong>
              <em>This one is for desert Landrover Man</em>
            </strong>
          </p>
        </Row>
      </Container>
    </main>
  );
}
