import styled, { css } from 'styled-components';

export const ModalHolder = styled.div`
  position: fixed;
  right: ${({ open }) => (open ? '0' : '-100%')};
  top: 0;
  bottom: 0;
  z-index: 9999999;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  width: 100%;
  max-width: ${({ minWidth }) => (minWidth ? minWidth : '750px')};
  transition: 0.3s all ease-in-out;
  overflow-x: hidden;
  background: ${({ bg }) => (bg ? bg : '#fff')};

  ${({ $leftSide }) =>
    $leftSide &&
    css`
      top: 80px;
      right: auto;
      left: ${({ open }) => (open ? '0' : '-100%')};

      @media (max-width: 575px) {
        top: 66px;
      }
    `}

  @media screen and (min-width: 1400px) {
    max-width: ${({ width }) => (width ? width : '1000px')};
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
`;
export const ModalHead = styled.div`
  padding: 5px 25px;
  border-bottom: 1px solid var(--border-color);

  .close-icon {
    width: max-content;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999; /* Lower than modal but above everything else */
  ${({ $noOverly }) =>
    $noOverly &&
    css`
      display: none;
    `}
`;

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(50, 59, 75, 0.1);
  backdrop-filter: blur(4px);
  z-index: 999999;
  padding: 20px;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: 0.3s all ease-in-out;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentHolder = styled.div`
  max-width: ${({ width }) => (width ? width : '')};
  width: ${({ width }) => (width ? '100%' : '')};
  max-height: 90%;
  padding: ${({ padding }) => (padding ? padding : ' 25px 40px')}; //must prop
  background: ${({ bg }) => (bg ? bg : 'var(--white)')}; //must props
  border-radius: ${({ radius }) => (radius ? radius : '15px')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: myAnim 0.3s ease;
  border: 1px solid #c1c1c1;

  @media (max-width: 1400px) {
    max-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
  }

  @media screen and (max-width: 576px) {
    padding: ${({ padding }) => (padding ? padding : ' 20px')}; //must prop
  }
  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
