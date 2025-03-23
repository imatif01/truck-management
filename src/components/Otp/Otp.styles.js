import { css, styled } from 'styled-components';

export const OtpInputWrapper = styled.div`
  max-width: ${({ $width }) => $width || '440px'};
  margin: 0 auto 20px;

  .otp-fields {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    max-width: ${({ $inputWidth }) => $inputWidth || '80px'};
    height: 80px;
    border: 1px solid var(--white);
    background: var(--secondary);
    color: var(--dark);
    border-radius: 10px;
    padding: 10px;
    font-size: 28px;
    line-height: 32px;
    box-sizing: border-box;
    outline: none;
    text-align: center;

    @media (max-width: 576px) {
      height: 50px;
      padding: 10px 10px 5px;
      font-size: 20px;
      line-height: 24px;
    }

    &::placeholder {
      font-size: 35px;
      line-height: 20px;
      color: var(--white);
    }
  }

  input:focus::placeholder {
    color: transparent;
  }

  .timer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .resend-code {
      color: var(--golden);
      cursor: pointer;

      ${({ $disable }) =>
        $disable &&
        css`
          pointer-events: none;
        `}
    }
  }
`;
