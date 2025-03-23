import styled from 'styled-components';

export const StyledInput = styled.div`
  width: 100%;
  margin: 0 auto ${({ $noMargin }) => ($noMargin ? '0' : '20px')};

  label {
    display: block;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    margin: 0 0 8px;
  }

  .error {
    display: block;
    font-size: 12px;
    line-height: 16px;
    color: var(--danger);
  }
`;
export const InputHolder = styled.input`
  width: 100%;
  height: 45px;
  font-size: 16px;
  line-height: 20px;
  padding: 7px 15px;
  outline: none;
  border: none;
  border-radius: ${({ $noRounded }) => ($noRounded ? '8px' : '60px')};
  background: ${({ $bgGray }) => ($bgGray ? 'var(--gray)' : '#fff')};
  border: 1px solid var(--border-color);

  &:focus {
    border-color: var(--primary);
  }
`;
