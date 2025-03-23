import styled from 'styled-components';

export const StyledHeadingSection = styled.div`
  position: relative;
  margin: 0 0 20px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 30px;
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
    position: absolute;
    top: -25px;
    left: 0;

    @media (min-width: 1200px) {
      display: none;
    }
  }
`;
