import styled from 'styled-components'

export const Aboutme = styled.section`
  display: grid;
  max-width: 1120px;
  margin: 4.875rem auto;

  position: relative;
  z-index: 1;

  grid-template-areas:
    '. avatar'
    'aboutme avatar'
    'bio avatar'
    '. avatar';
  justify-content: space-between;

  @media (max-width: 900px) {
    grid-template-areas:
      'avatar .'
      'avatar aboutme'
      'avatar .'
      'bio bio';

    margin: 4.875rem 1.625rem;
    grid-template-columns: 1fr 1fr;
  }

  .about-me {
    grid-area: aboutme;

    h1 {
      color: var(--white);
      font-size: 2.625rem;
      font-weight: 600;

      @media (max-width: 900px) {
        font-size: 1.125rem;
      }
    }

    span {
      display: block;
      color: var(--green-500);
      font-size: 1rem;
      margin-top: 0.25rem;
    }
  }

  .bio {
    grid-area: bio;

    p {
      margin-top: 1.875rem;
      color: var(--white);
      max-width: 600px;
      font-weight: 300;
      line-height: 1.8rem;

      @media (max-width: 900px) {
        font-size: 1rem;
        max-width: none;
      }

      @media (max-width: 600px) {
        line-height: 1.5rem;
      }
    }
  }

  .avatar {
    grid-area: avatar;

    position: relative;
    z-index: 1;
    margin-right: 2rem;

    @media (max-width: 900px) {
      margin-right: 0;
    }

    @media (max-width: 900px) {
      img {
        width: 7.438rem;
        height: 10.5rem;
      }
    }
  }

  .avatar::after {
    content: '';
    width: 212px;
    height: 298px;
    background: linear-gradient(180deg, var(--purple-500) 0%, #120f1a 97.32%);

    position: absolute;
    top: 2rem;
    left: 2rem;
    z-index: -1;
    border-radius: 0.375rem;

    @media (max-width: 900px) {
      width: 7.438rem;
      height: 10.5rem;
      top: 1rem;
      left: 1rem;
    }
  }
`

export const Slogan = styled.section`
  height: 100vh;
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.65rem;

  h1,
  h2,
  h3 {
    font-size: 5.625rem;
    font-weight: 400;
  }

  h1 {
    color: #c69aff;
  }

  h2 {
    color: #9f53ff;
  }

  h3 {
    color: #6104d6;
  }

  h2:after {
    content: '';
    top: 0rem;
    left: 35%;
    position: absolute;
    filter: blur(200px);
    transform: translateZ(0);
    background: var(--purple-dark-glow);
    width: 800px;
    height: -webkit-fill-available;
    z-index: -1;
  }

  @media (max-width: 900px) {
    h2:after {
      content: '';
      top: 0rem;
      left: 0;
      position: absolute;
      filter: blur(150px);
      transform: translateZ(0);
      background: var(--purple-dark-glow);
      width: 100%;
      height: -webkit-fill-available;
      z-index: -1;
    }

    h1,
    h2,
    h3 {
      font-size: 2.625rem;
      font-weight: 400;
    }
  }
`
