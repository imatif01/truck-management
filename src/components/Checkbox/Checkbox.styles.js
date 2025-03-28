import styled, { css } from 'styled-components';

export const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    gap: 5px;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    color: var(--dark);
    cursor: pointer;

    @media (min-width: 576px) {
      font-size: 16px;
      line-height: 18px;
    }

    img {
      max-width: 25px;
    }
    @media (min-width: 768px) {
      /* gap: 10px; */
      img {
        max-width: 32px;
      }
    }
  }

  ${({ $type }) =>
    $type === 'checkbox' &&
    css`
      input[type='checkbox'] {
        position: relative;
        border-radius: 4px;
        border: 1.5px solid #cfcfcf;
        background: #f5f5f5;
        cursor: pointer;
        line-height: 0;
        margin: 0 0.6em 0 0;
        outline: 0;
        vertical-align: text-top;
        height: 18px;
        width: 18px;
        -webkit-appearance: none;
        flex-shrink: 0;
      }

      input[type='checkbox']:hover {
        opacity: 1;
      }

      input[type='checkbox']:checked {
        background-color: var(--primary);
        border: 1px solid var(--secondary);
        opacity: 1;
      }
      input[type='checkbox']:before {
        content: '';
        position: absolute;
        right: 50%;
        top: 50%;
        width: 4px;
        height: 9px;
        border: solid var(--white);
        border-width: 0;
        margin: -1px -1px 0 -1px;
        transform: rotate(45deg) translate(-50%, -50%);
        z-index: 2;
      }
      input[type='checkbox']:checked:before {
        border-width: 0 1.5px 1.5px 0;
      }
    `}
  ${({ $type }) =>
    $type === 'radio' &&
    css`
      input[type='radio'] {
        position: relative;
        border: 2px solid #fff;
        border-radius: 2px;
        background: none;
        cursor: pointer;
        line-height: 0;
        margin: 0 0.6em 0 0;
        outline: 0;
        vertical-align: text-top;
        height: 14px;
        width: 14px;
        border-radius: 50%;
        flex-shrink: 0;
        -webkit-appearance: none;

        ${({ $color }) =>
          $color === 'seen'
            ? css`
                border: 2px solid #fff;
              `
            : css`
                border: 2px solid var(--dark);
              `}
      }

      input[type='radio']:hover {
        opacity: 1;
      }

      input[type='radio']:checked {
        opacity: 1;
        ${({ $color }) =>
          $color === 'seen'
            ? css`
                border: 2px solid #fff;
              `
            : css`
                border: 2px solid var(--dark);
              `}
      }
      input[type='radio']:checked:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        ${({ $color }) =>
          $color === 'seen'
            ? css`
                border: 2px solid #fff;
              `
            : css`
                border: 2px solid var(--dark);
              `}
      }
    `}
`;
