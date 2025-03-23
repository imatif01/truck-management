import React from 'react';
import PropTypes from 'prop-types';
import { StyledCheckBox } from './Checkbox.styles';

const CheckBox = ({
  type = 'checkbox',
  label,
  fieldName,
  className,
  onChange = () => {},
  color,
  value = '',
  name,
}) => {
  const handelChange = (e) => {
    const isChecked = e.target.checked;
    onChange({ fieldName, isChecked });
  };
  return (
    <StyledCheckBox $type={type} className={className} $color={color}>
      <input
        type={type}
        id={fieldName}
        onChange={handelChange}
        checked={value}
        name={name ?? fieldName}
      />
      <label htmlFor={fieldName}>{label}</label>
    </StyledCheckBox>
  );
};

export default CheckBox;
