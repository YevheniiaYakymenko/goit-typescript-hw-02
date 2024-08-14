import { FC } from "react";
import { Image, ModalImage } from "../App/App";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  openModal: (image: ModalImage) => void;
}
const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
