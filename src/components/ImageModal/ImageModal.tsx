import { FC } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
}

const ImageModal: FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  src,
  alt,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={src} alt={alt} />
    </Modal>
  );
};

export default ImageModal;
