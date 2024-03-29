import { ImageCard } from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'
export const ImageGallery = ({ items }) => (
  <ul className={css.gallery}>
    {items.map((item) => (
      <li className={css.galleryItem} key={item.id}>
        <ImageCard item={item} />
      </li>
    ))}
  </ul>
);
