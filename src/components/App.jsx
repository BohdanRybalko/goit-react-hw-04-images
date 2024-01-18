import React, { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import { fetchData } from 'components/Api';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    fetchData();
  }, [query, page]);

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setShowModal(true);
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { hits: newImages, totalHits } = await fetchData(query, page);

      setImages((prevImages) => [...prevImages, ...newImages]);
      setShowBtn(page < Math.ceil(totalHits / 12));
    } catch (error) {
      console.error('Error in fetchData:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContainer>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && !isLoading && showBtn && <Button onLoadMore={handleLoadMore} />}
      {isLoading && <Loader />}
      {showModal && <Modal imageURL={selectedImage.largeImageURL} onClose={handleCloseModal} />}
    </AppContainer>
  );
};

export default App;