import styled from 'styled-components';

export const Aboutme = styled.section`
  display: grid;
  max-width: 1120px;
  margin: 4.875rem auto;

  grid-template-areas: 
    ". avatar"
    "aboutme avatar"
    "bio avatar"
    ". avatar"
  ;  
  justify-content: space-between;

  @media(max-width: 900px) {
    grid-template-areas: 
      "avatar ."
      "avatar aboutme"
      "avatar ."
      "bio bio"
    ;

    margin: 4.875rem 1.625rem;
    grid-template-columns: 1fr 1fr;
  }

  .about-me {
    grid-area: aboutme;

    h1 {
      color: var(--green-500);
      font-size: 2.625rem;
      font-weight: 400;

      @media(max-width: 900px) {
        font-size: 1.125rem;
      }
    }

    span {
      display: block;
      color: var(--purple-300);
      font-size: 1rem;
      margin-top: 0.25rem;
    }
  }

  .bio {
    grid-area: bio;

    p {
      margin-top: 1.875rem;
      color: var(--white);
      max-width: 500px;
      font-weight: 300;
      line-height: 1.8rem;

      @media(max-width: 900px) {
        font-size: 1rem;     
        max-width: none;
      }

      @media(max-width: 600px) {
        line-height: 1.5rem;      
      }
    }
  }

  .avatar {
    grid-area: avatar;

    position: relative;    
    z-index: 1;
    margin-right: 2rem;

    @media(max-width: 900px) {
      margin-right: 0;
    }

    @media(max-width: 900px) {
      img {
        width: 7.438rem;
        height: 10.5rem;
      }
    }
  }

  .avatar::after {
    content: "";
    width: 212px;
    height: 298px;
    background: linear-gradient(180deg, var(--purple-500) 0%, #120F1A 97.32%);

    position: absolute;
    top: 2rem;
    left: 2rem;
    z-index: -1;
    border-radius: 0.375rem;

    @media(max-width: 900px) {
      width: 7.438rem;
      height: 10.5rem;
      top: 1rem;
      left: 1rem;
    }
  }
`;

export const SummaryExperience = styled.section`
  background: var(--purple-800);    
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;

  @media(max-width: 900px) {
    padding: 3rem 1.625rem;
  }

  .content {
    max-width: 1120px;   
    display: flex;    
    width: 100%;

    header {
      width: 100%;
      margin-bottom: 3rem;

      > span {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.25rem;

        @media(max-width: 900px) {
          margin-bottom: 0.45rem;
        }

        h1 {
          font-size: 1rem;
          color: var(--green-500);
          font-weight: 400;          
        }
      }

      h2 {
        font-size: 1.25rem;
        color: var(--purple-300);
        font-weight: 400;

        @media(max-width: 900px) {
          font-size: 0.9rem;
        }
      }
    }

    a {
      color: var(--white);
    }
  }

  .techs {
    max-width: 1120px;   
    width: 100%;
    display: flex;
    align-items: flex-start;

    flex-wrap: wrap;
    gap: 3rem 4.75rem;

    @media(max-width: 900px) {
      gap: 3rem;
    }

    @media(max-width: 320px) {
      gap: 2rem;
    }

    div {
      p {
        color: var(--white);
        margin-bottom: 0.6rem;        
      }

      ul {
        display: flex;
        gap: 0.4rem;
      }

      ul li {
        background-color: var(--purple-700);
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;        

        @media(max-width: 900px) {
          width: 2rem;
          height: 2rem;          

          img {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }
`;