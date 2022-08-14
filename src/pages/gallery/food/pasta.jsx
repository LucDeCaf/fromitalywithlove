import Gallery from "../../../components/Gallery";
import images from "../../../data/food-images.json"

function PastaGallery() {
  return (
    <main>
      <Gallery title="Pasta" images={images.pasta} />
    </main>
  )
}

export default PastaGallery;
