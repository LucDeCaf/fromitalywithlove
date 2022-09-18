import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { nanoid } from "nanoid";
import styles from "../styles/ImageSlider.module.scss";

interface Props {
  images: { downloadUrl: string }[];
}

const ImageSlider = ({ images }: Props): JSX.Element => {
  const windowWidth = useWindowSize().width;
  const smallScreenThreshold = 576;
  const largeScreenThreshold = 992;

  const carouselItems = images.map((image) => (
    <Carousel.Item key={nanoid()}>
      <Image
        className={styles.carouselItem}
        src={image.downloadUrl}
        alt="Image"
        layout="responsive"
        width={
          windowWidth <= smallScreenThreshold
            ? 1.5
            : windowWidth >= largeScreenThreshold
            ? 3.5
            : 2.5
        }
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

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default ImageSlider;
