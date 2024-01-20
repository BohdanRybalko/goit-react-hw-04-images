import React, { useEffect } from 'react';
import { Overlay, ModalContainer, ModalImage } from './ModalStyles';

const Modal = ({ imageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalImage src={imageURL} alt="Large version" />
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
