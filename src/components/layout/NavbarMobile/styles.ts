import styled from 'styled-components';

export const Nav = styled.nav`
  display: none;

  @media(max-width: 900px) {
    display: block;
    position: fixed;
    z-index: 12;
    width: 100%;   
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    background: var(--purple-900);        
    border-bottom: 1px var(--purple-700) solid;

    .navbar-mobile-wrapper {
      height: 48px;
      
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        padding: 0 1.625rem;

        a {
          color: var(--green-500);
        }

        > button {
          background-color: var(--purple-700);
          padding: 0.4rem;
          border-radius: 50%;
          display: flex;

          img {
            color: var(--green-500);
          }
        }
      }
    }    
  }
`;

export const ListMenu = styled.ul`
  display: none;

  @media(max-width: 900px) {
    z-index: 10;
    position: fixed;
    display: block;  
    height: 100vh;
    width: 100%;
    background-color: var(--purple-900);

    padding: 4rem 1.625rem;

    li {
      display: flex;
      justify-content: space-between;

      a {
        color: var(--purple-300);
      }

      a:active {
        color: var(--green-500);
      }
    }

    li:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;