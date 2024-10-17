import styled from "styled-components";

export const Card = styled.article`
  background-color: #ffff;
  width: 100%;
  max-width: 320px; 
  padding: 1.5rem;
  margin: 0 auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); 
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15); 
  }
`;

export const ProductImage = styled.img`
  width: 220px;
  height: 320px;
  object-fit: contain; 
  border-radius: 8px; 
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductTitle = styled.h2`
  font-weight: 600;
  font-size: 1.4rem;
  text-align: center;
  min-height: 3rem;
  margin-top: 1rem;
  color: #333; 
  letter-spacing: 0.5px;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0 0.5rem;
`;

export const Review = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #febd69; 
  svg {
    font-size: 1rem;
  }
`;

export const Rating = styled.span`
  margin-left: 0.3rem;
  color: #555;
`;

export const Price = styled.strong`
  font-size: 1.1rem;
  color: #27ae60; 
`;

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  width: 100%;
    
`;

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 8px;
  height: 45px;
  width: 100%;
  background-color: #007bff; 
  color: #fff;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3; 
    transform: translateY(-2px); 
  }

  svg {
    font-size: 1.2rem;
  }
`;
