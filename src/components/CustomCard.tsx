import { Card } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/CardPanel.module.scss";

export interface CardType {
  downloadUrl: string;
  label: string;
  desc: string;
  pageLink?: string;
}

const CustomCard = ({ pageLink, downloadUrl, label, desc }: CardType) => {
  return (
    <Card border="secondary">
      <a className={styles.cardImage} href={pageLink}>
        <Image
          src={downloadUrl}
          alt={`image of ${label}`}
          layout="responsive"
          width={0}
          height={0}
        />
      </a>
      {(label || desc) && (
        <Card.Body>
          <Card.Title>{label}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default CustomCard;
