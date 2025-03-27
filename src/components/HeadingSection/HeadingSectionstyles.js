import styled from 'styled-components';

export const StyledHeadingSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin: 0 0 20px;

  @media (min-width: 768px) {
    margin: 0 0 30px;
  }

  .work-head,
  .drivers-head {
    width: 100%;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    button {
      @media (max-width: 767px) {
        width: auto;
        min-width: max-content;
      }
    }
  }

  .btn-holder {
    display: flex;
    justify-content: center;
    gap: 12px;

    @media (min-width: 576px) {
      justify-content: flex-end;
    }
  }

  h1 {
    margin: 0 0 10px;
    @media (min-width: 768px) {
      margin: 0;
    }
  }

  .add-order-btn {
    display: flex;
    justify-content: flex-end;
  }

  .hamburger {
    display: block;

    @media (min-width: 1200px) {
      display: none;
    }
  }
`;
