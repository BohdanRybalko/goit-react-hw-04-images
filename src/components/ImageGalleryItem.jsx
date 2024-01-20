import React from 'react';
import { Item, Image } from './ImageGalleryStyles';

const ImageGalleryItem = ({ imageUrl, onImageClick }) => {
  return (
    <Item className="gallery-item" onClick={onImageClick}>
      <Image src={imageUrl} alt="" />
    </Item>
  );
};

export default ImageGalleryItem;
