import React, { forwardRef } from 'react';
import { StyledInput } from './Input.styles';
import { InputHolder } from './Input.styles';

const Input = forwardRef(({ label, error, bgGray, noRounded, noMargin, ...rest }, ref) => {
  return (
    <StyledInput $noMargin={noMargin}>
      {label && <label>{label}</label>}
      <InputHolder ref={ref} {...rest} $bgGray={bgGray} $noRounded={noRounded} />
      <span className="error">{error}</span>
    </StyledInput>
  );
});

export default Input;
