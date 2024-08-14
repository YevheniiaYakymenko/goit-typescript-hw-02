import { FC } from "react";
import { Image } from "../App/App";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  openModal: (modalImage: { src: string; alt: string | null }) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, openModal }) => {
  return (
    <div>
      <img
        className={css.item}
        src={image.urls.small}
        alt={image.descr ?? "Image"}
        onClick={() =>
          openModal({ src: image.urls.regular, alt: image.alt_descr })
        }
      />
    </div>
  );
};

export default ImageCard;
