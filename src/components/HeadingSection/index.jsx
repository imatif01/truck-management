import React from 'react';
import { StyledHeadingSection } from './HeadingSectionstyles';
import { RxHamburgerMenu } from 'react-icons/rx';

const HeadingSection = ({ children }) => {
  const handleClick = () => {
    document.body.classList.add('nav-active');
  };

  return (
    <StyledHeadingSection>
      <div className="hamburger" onClick={handleClick}>
        <RxHamburgerMenu size={25} />
      </div>
      {children}
    </StyledHeadingSection>
  );
};

export default HeadingSection;
