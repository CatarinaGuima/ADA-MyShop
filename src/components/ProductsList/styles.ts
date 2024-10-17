import styled from "styled-components";

export const Container = styled.main`
  max-width: 1200px; 
  margin: 4rem auto; 
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: stretch; 
  flex-wrap: wrap;
  gap: 2.5rem; 

  transition: all 0.3s ease-in-out;

  & > * {
    flex: 1 1 280px; 
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px); 
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); 
    }
  }

  @media (max-width: 768px) {
    justify-content: center; 
    gap: 1.5rem; 
  }
`;
