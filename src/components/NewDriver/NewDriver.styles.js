import styled, { css } from 'styled-components';

export const StyledNewDriver = styled.form`
  padding: 20px 18px;

  .heading {
    display: block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    margin: 0 0 5px;

    &.border {
      padding: 0 0 5px;
      border-bottom: 1px solid var(--border-color);
      margin: 0 0 20px;
    }
  }

  .text {
    display: block;
    font-size: 14px;
    line-height: 18px;
    color: #89868d;
    margin: 0 0 30px;
  }

  input {
    font-size: 14px;
    line-height: 18px;
  }

  .btn-holder {
    display: flex;
    gap: 15px;
  }
`;
