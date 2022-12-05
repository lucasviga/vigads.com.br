import styled from 'styled-components';

export const GoBackBtn = styled.button`
  display: flex;
  gap: 0.25rem;
  color: white;
  align-items: flex-start;
  font-size: 1rem;
  margin: 4rem 0 0.4rem 0;
  transition: all 0.4s ease;

  @media(max-width: 900px) {
    margin: 6rem 0 0.4rem 0;
  }
`;