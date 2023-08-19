import styled from 'styled-components';

export const Container = styled.ul`
  background: var(--purple-800, #15121E);
  border-radius: 0.75rem;

  width: 20rem;
  padding: 1.4rem 2rem;
  color: var(--white);
  font-weight: 400;

  h1 {
    font-size: 1rem;
  }

  li {
    margin-top: 1rem;   
    display: flex;
    align-items: center;
    gap: 1rem;
    
    span {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: var(--purple-700);      
      width: 2.1875rem;
      height: 2.1875rem;
      border-radius: 100%;    
    }
  }
`;