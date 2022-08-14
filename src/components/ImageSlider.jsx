import Carousel from "react-bootstrap/Carousel";
import { nanoid } from "nanoid";
import styles from "../styles/ImageSlider.module.scss";

function ImageSlider(props) {
  const carouselItems = props.images.map((image) => (
    <Carousel.Item key={nanoid()}>
      <img className={styles.carouselItem} src={image} alt="Image" />
    </Carousel.Item>
  ));

  return <Carousel className="mb-4">{carouselItems}</Carousel>;
}

export default ImageSlider;
