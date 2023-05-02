import styled from 'styled-components'

export const Header = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 0 0;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    top: -6rem;
    left: 0;
    position: absolute;
    filter: blur(80px);
    transform: translateZ(0);
    background: var(--purple-light-glow);
    width: 700px;
    height: 700px;
    z-index: -1;
  }

  @media (max-width: 900px) {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--green-500);

    .nav-active {
      color: var(--purple-300);
    }

    > span {
      font-size: 1.25rem;
    }

    ul {
      display: flex;
      gap: 3.75rem;

      li a {
        transition: all 0.5s ease;
      }

      a:hover {
        color: var(--purple-300);
      }
    }
  }
`
