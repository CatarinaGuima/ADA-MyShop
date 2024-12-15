import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #001f3f; 
  padding: 0.5rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`;

export const HeaderTitle = styled.h1`
  color: #f8f9fa; 
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase; 
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;

interface AuthButtonProps {
  isLogged: boolean;
}

export const AuthButton = styled.button<AuthButtonProps>`
  border: none;
  border-radius: 5px;
  height: 35px;
  padding: 0 1.5rem;
  background-color: ${(props) => (props.isLogged ? "#cc0c39" : "#28a745")}; 
  color: #fff;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  svg {
    font-size: 1rem;
  }
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 35px;
  padding: 0 1.5rem;
  background-color: #8a2be2; 
  color: #fff;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6a1bb1; 
  }

  svg {
    font-size: 1rem;
  }
`;
