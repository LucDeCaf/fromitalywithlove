import Heading from "../../../components/Heading";
import Gallery from "../../../components/Gallery";
import placeImages from "../../../data/places-images.json";

export default function PlacesGallery() {
  return (
    <main>
      <Heading>Places</Heading>
      <Gallery title="Places" images={placeImages} />
    </main>
  )
}
