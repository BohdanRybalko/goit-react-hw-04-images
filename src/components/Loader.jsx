import React from 'react';
import styled from 'styled-components';
import { Oval } from 'react-loader-spinner';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const Loader = () => {
  return (
    <SpinnerContainer>
      <Oval type="ThreeDots" color="#3f51b5" height={50} width={50} />
    </SpinnerContainer>
  );
};

export default Loader;