import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--purple-800);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;  

  .footer-content {
    max-width: 1120px;
    display: flex;
    width: 100%;

    @media(max-width: 900px) {
      padding: 1rem 1.625rem;    
    }

    justify-content: space-between;
    color: var(--white);

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      a {
        display: block;
      }
    }
  }
`;