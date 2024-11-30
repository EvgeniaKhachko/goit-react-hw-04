import React from "react";
import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.gallery}>
      <li>
        <div className={s.imageGallery}>
          {images.map((image) => {
            return (
              <ImageCard
                className={s.imageCard}
                key={image.id}
                onClick={() => openModal(image)}
                description={image.description}
                likes={image.likes}
                urls={image.urls}
                imageSrc={image.urls.small}
              />
            );
          })}
        </div>
      </li>
    </ul>
  );
};

export default ImageGallery;
