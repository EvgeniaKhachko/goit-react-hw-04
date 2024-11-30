import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ openModal, closeModal, image }) => {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      overlayClassName={s.ReactModal__Overlay}
      className={s.ReactModal__Content}
      contentLabel={(image && image.description) || "Image modal"}
    >
      {image && (
        <div className={s.modal}>
          <img
            src={image.urls.regular}
            alt={image.description}
            className={s.widthAbs}
          />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
