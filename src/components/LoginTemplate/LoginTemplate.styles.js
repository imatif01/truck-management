import styled from 'styled-components';

export const StyledLoginTemplate = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px;
  min-height: 100vh;

  .form-section {
    width: 100%;
    display: flex;
    align-items: center;
    @media (min-width: 992px) {
      width: 50%;
    }

    .form-holder {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;

      .h1 {
        span {
          color: var(--primary);
        }
      }
      .h1,
      .text {
        display: block;
        text-align: center;
      }

      .head-text {
        margin: 0 0 15px;
      }

      .btn-holder {
        display: flex;
        justify-content: center;
        margin: 0 0 20px;
        button {
          border-radius: 50px;
          padding: 12px;
        }
      }

      a {
        font-size: 18px;
        line-height: 22px;
        font-weight: 700;
        color: var(--primary);
      }

      .remember-holder {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 20px;

        a {
          font-size: 16px;
          line-height: 20px;
          font-weight: 400;
        }
      }
    }
  }

  .img-holder {
    width: 50%;
    border-radius: 30px;
    overflow: hidden;
    user-select: none;
    display: none;
    position: relative;

    @media (min-width: 992px) {
      display: block;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(165, 165, 200, 0.5);
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

  .sign-up {
    .input-wrap {
      display: flex;
      gap: 20px;
    }
  }
`;
