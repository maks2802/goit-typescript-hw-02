import Modal from "react-modal";
import { Image } from "../../types";
import { FC } from "react";
import s from "./ImageModal.module.css";

interface ImageModalProps {
  image: Image;
  onClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <Modal
      className={s.modal_content}
      overlayClassName={s.overlay}
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      <div>
        <button className={s.btn} onClick={onClose}>
          X
        </button>
        <img
          className={s.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
        <div className={s.text_box}>
          <p className={s.text}>Author: {image.user.name}</p>
          <p className={s.text}>Likes: {image.likes}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
