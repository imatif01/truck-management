import styled, { css } from 'styled-components';

export const SelectContainer = styled.div`
  width: 100%;
  margin-bottom: ${({ $noMargin }) => ($noMargin ? '0' : '20px')};
`;

export const Label = styled.label`
  display: block;
  margin: 0 0 8px;

  .required {
    color: red;
    margin-left: 4px;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const StyledSelect = styled.div`
  background: var(--gray);
  padding: 10px 35px 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
`;

export const Arrow = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.2s ease;
  color: #666;
  display: flex;
  align-items: center;

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateY(-50%) scale(-1);
    `}
`;

export const OptionsList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 9;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--secondary);
  }
`;

export const Option = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary);
    color: var(--white);
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: var(--primary);
      color: var(--white);
    `}
`;
