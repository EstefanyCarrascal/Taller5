import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;


const ProductName = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 10px 0;
`;


const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 10px 0;
`;


const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ProductCard = ({ productName, productDescription, productImage }) => {
  return (
    <CardContainer>
      <ProductImage src={productImage} alt={productName} />
      <ProductName>{productName}</ProductName>
      <ProductDescription>{productDescription}</ProductDescription>
    </CardContainer>
  );
};

export default ProductCard;
