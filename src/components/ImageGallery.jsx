import React from 'react';
import styled from 'styled-components';
import ImageGalleryItem from './ImageGalleryItem';

const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

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
