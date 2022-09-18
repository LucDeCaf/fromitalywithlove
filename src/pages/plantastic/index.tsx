import Heading from "../../components/Heading";
import { Container, Row, Col } from "react-bootstrap";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Image from "next/image";
import { nanoid } from "nanoid";
import { NextPage } from "next";

const Photo = ({ title, src }: { title: string; src: string }): JSX.Element => {
  return (
    <div>
      <Col>
        <h1 className="text-secondary">{title}</h1>
        <Image
          src={src}
          alt={title + " image"}
          layout="responsive"
          width={1}
          height={1}
          objectFit="cover"
        />
      </Col>
    </div>
  );
};

const Page: NextPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.MAPS_API_KEY!,
  });
  const bagCoordinates = { lat: -22.593586, lng: 14.533088 };

  return (
    <main>
      <Heading>Plantastic</Heading>
      <Container className="pb-4">
        <h1 className="text-primary">SwakopmundBlack2</h1>
        <Row md={3} xs={1} className="mb-4">
          <Photo src="/plantastic/swakopmundblack2-before.jpg" title="Before" />
          <Photo src="/plantastic/swakopmundblack2-after.JPG" title="After" />
          {isLoaded ? (
            <Col>
              <h1 className="text-secondary">Location</h1>
              <GoogleMap
                zoom={10}
                center={bagCoordinates}
                mapContainerStyle={{ width: "100%", height: "26rem" }}
              >
                <MarkerF position={bagCoordinates} />
              </GoogleMap>
            </Col>
          ) : (
            <Col>
              <h1>Loading...</h1>
            </Col>
          )}
        </Row>
        <Row>
          <p className="text-info">
            Date picked up: 2022-07-17
            <br />
            Latitude: -22.593586
            <br />
            Longitude: 14.533088
            <br />
            Picked up by: Marika (MI-1232), Black bag
            <br />
            <em>This one is for desert Landrover Man</em>
          </p>
        </Row>
        <h1 className="text-secondary">Additional Photos</h1>
        <Row xs={1}>
          <Col key={nanoid()}>
            <Image
              src="/plantastic/additional-photo-1.JPG"
              alt="Additional Photo 1"
              layout="responsive"
              objectFit="cover"
              width={1}
              height={1}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Page;
