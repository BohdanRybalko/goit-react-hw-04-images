import React from 'react';
import { Gallery } from './ImageGalleryStyles';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <Gallery>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          onImageClick={() => onImageClick(image)}
        />
      ))}
    </Gallery>
  );
};

export default ImageGallery;
