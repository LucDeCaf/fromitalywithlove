import Heading from "../../../components/Heading";
import Gallery from "../../../components/Gallery";
import placeImages from "../../../data/places-images.json";

function PlacesGallery() {
  return (
    <main>
      <Heading>Places</Heading>
      <Gallery title="Places" images={placeImages} />
    </main>
  )
}

export default PlacesGallery;
