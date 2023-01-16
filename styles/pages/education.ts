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

  @media (max-width: 600px) {
    padding: 0 1.625rem;
  }

  > h1 {
    color: var(--white);
    padding-bottom: 3.75rem;
    font-size: 1.75rem;
    font-weight: 400;
  }
`;

export const ListEducations = styled.div`
  margin: 0 0 4.75rem;

  .education-item {
    &:not(:last-child):after {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background: var(--purple-300);
      margin: 4.75rem 0;

      @media (max-width: 900px) {
        margin: 2.75rem 0;
      }
    }

    h1 {
      color: var(--purple-300);
    }

    p {
      color: var(--white);
      margin-top: 0.6rem;
    }

    time {
      margin-top: 0.6rem;
      color: var(--white);
      display: flex;
      align-items: center;

      span:before {
        content: '';
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        margin: 0 0.4rem;
        background-color: var(--green-500);
      }
    }

    a {
      margin-top: 2rem;
      display: block;
      color: var(--green-500);
    }
  }
`;
