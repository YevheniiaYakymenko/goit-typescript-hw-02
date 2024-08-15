import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image, ModalImage } from "../../apiService/img-gallery";

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
