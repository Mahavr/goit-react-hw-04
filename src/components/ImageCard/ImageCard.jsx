import { useState } from "react";
import { ImageModal } from "../ImageModal/ImageModal";
import css from './imageCard.module.css'
export const ImageCard = ({ item }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={css.imgItem}>
      <img className={css.img} src={item.urls.small} alt={item.description} onClick={openModal} />
      <ImageModal item={item} isOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};
