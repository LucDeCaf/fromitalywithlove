import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { nanoid } from "nanoid";
import styles from "../styles/ImageSlider.module.scss";
import { ImageType } from "../models/image";

interface Props {
  images: ImageType[];
}

const ImageSlider: FC<Props> = (props) => {
  const carouselItems = props.images.map((image) => (
    <Carousel.Item key={nanoid()}>
      <Image
        className={styles.carouselItem}
        src={image.src}
        alt="Image"
        layout="responsive"
        width={3}
        height={1}
      />
    </Carousel.Item>
  ));

  return (
    <Carousel className="mb-4 border-top border-bottom border-secondary">
      {carouselItems}
    </Carousel>
  );
};

export default ImageSlider;
