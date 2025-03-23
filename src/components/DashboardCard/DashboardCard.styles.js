import styled from 'styled-components';

export const StyledCard = styled.div`
  background: var(--white);
  padding: 16px;
  border-radius: 14px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .icon-holder {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ $iconBg }) => ($iconBg ? $iconBg : '#E5E4FF')};
    border-radius: 24px;
    margin: 0 0 14px;

    @media (min-width: 576px) {
      width: 60px;
      height: 60px;
    }

    img {
      @media (max-width: 575px) {
        width: 40px;
        height: 40px;
      }
    }
  }

  .text {
    display: block;
    color: var(--gray-50);
    margin: 0 0 4px;

    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 18px;
    }
  }

  .digits {
    display: block;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    @media (min-width: 576px) {
      font-size: 28px;
      line-height: 32px;
    }
  }
`;
