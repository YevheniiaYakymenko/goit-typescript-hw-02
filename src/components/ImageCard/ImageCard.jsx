import css from "./ImageCard.module.css";
export default function ImageCard({ image, openModal }) {
  return (
    <div>
      <img
        className={css.item}
        src={image.urls.small}
        alt={image.descr}
        onClick={() =>
          openModal({ src: image.urls.regular, alt: image.alt_descr })
        }
      />
    </div>
  );
}
