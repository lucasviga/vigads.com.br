import styled from 'styled-components';

export const Header = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 0 0;

  @media(max-width: 900px) {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--green-500);

    > span {
      font-size: 1.25rem;
    }

    ul {
      display: flex;
      gap: 3.75rem;
      
      li a {
        transition: all .5s ease;    
      }

      a:hover {
        color: var(--purple-300);        
      }
    }    
  }
`;