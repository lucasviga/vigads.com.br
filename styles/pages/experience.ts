import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  max-width: 1120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 900px) {
    padding: 0 1.625rem;
  }
  
  h1 {
    color: var(--white);
    padding: 5.625rem 0 3.75rem 0;
    font-size: 1.75rem;
    font-weight: 400;
  }
`;

export const ListExperiences = styled.section`
  margin: 0 0 4.75rem; 

  .experience-item {
    display: flex;
    flex-direction: column;

    &:not(:last-child):after {
      content: "";
      height: 1px;
      width: 100%;
      background: var(--purple-300);
      margin: 4.75rem 0;  
    }
  }
  
  .experience-content {
    display: flex;
    justify-content: flex-start;
    gap: 8rem;        

    @media(max-width: 900px) {
      display: flex;
      flex-direction: column;
      gap: 4rem; 
    }
  }

  .experience-details {
    width: 25%;

    @media(max-width: 900px) {
      width: 100%;
    }

    h2 {
      color: var(--green-500);
      font-size: 1.375rem;
      font-weight: 500;
    }

    .experience-details-contract {
      color: var(--purple-300);
      font-size: 1rem;
      margin-bottom: 0.6rem;
    }    

    time {
      color: var(--white);
      margin-top: 0.65rem;
      display: flex;    
      align-items: center;      
      
      > span:before {
        content: '';
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;             
        border-radius: 50%;
        margin: 0 0.4rem;
        background-color: var(--green-500);
      }
    }

    p {
      color: var(--white);
      margin-top: 0.2rem;
    }
  }

  .experience-activity {
    h2 {
      color: var(--purple-300);
      font-size: 1.375rem;
      font-weight: 500;
      margin-bottom: 0.6rem;
    }

    p {
      font-weight: 300;
      max-width: 700px;
      line-height: 1.75rem;
      color: var(--white);
    }

    p:not(:last-child) {
      margin-bottom: 0.6rem;
    }
  }
`;