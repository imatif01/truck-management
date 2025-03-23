import React, { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  SelectWrapper,
  StyledSelect,
  OptionsList,
  Option,
  Label,
  SelectContainer,
  Arrow,
} from './Select.styles';

let activeDropdown = null;
let subscribers = new Set();

const Select = ({
  options = [],
  onChange,
  placeholder = 'Select',
  label,
  value,
  defaultValue,
  required = false,
  error,
  id,
  noMargin,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);

  useEffect(() => {
    if (value) {
      setSelectedOption(value);
    }
  }, [value]);

  useEffect(() => {
    if (defaultValue && !selectedOption) {
      setSelectedOption(defaultValue);
      onChange?.(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    const updateDropdown = (openId) => {
      if (openId !== id) {
        setIsOpen(false);
      }
    };

    subscribers.add(updateDropdown);

    // Handle click outside
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add click outside listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      subscribers.delete(updateDropdown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [id]);

  const handleClick = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (newIsOpen) {
      activeDropdown = id;
      subscribers.forEach((subscriber) => subscriber(id));
    }
  };

  const getDisplayText = (option) => {
    if (!option) return '';
    return option.label || option.name || option.value || '';
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <SelectContainer ref={selectRef} $noMargin={noMargin}>
      {label && (
        <Label>
          {label}
          {required && <span className="required">*</span>}
        </Label>
      )}
      <SelectWrapper>
        <StyledSelect onClick={handleClick} hasError={!!error}>
          <span className={!selectedOption ? 'placeholder' : ''}>
            {getDisplayText(selectedOption) || placeholder}
          </span>
          <Arrow isOpen={isOpen}>
            <MdKeyboardArrowDown size={24} />
          </Arrow>
        </StyledSelect>

        {isOpen && (
          <OptionsList>
            {options.map((option) => (
              <Option
                key={option.value}
                onClick={() => handleSelect(option)}
                isSelected={selectedOption?.value === option.value}
              >
                {getDisplayText(option)}
              </Option>
            ))}
          </OptionsList>
        )}
      </SelectWrapper>
      {error && <span className="error">{error}</span>}
    </SelectContainer>
  );
};

export default Select;
