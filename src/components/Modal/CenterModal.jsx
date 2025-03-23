import React, { useEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { ContentHolder, StyledModal } from './Modal.styles';

const CenterModal = ({
  children,
  open,
  setOpen,
  bg,
  padding,
  width,
  radius,
  svgColor,
  desktopRight,
  desktopTop,
  MobileRight,
  MobileTop,
  border,
  mobileColor,
  minWidth,
}) => {
  useEffect(() => {
    // Function to disable scrolling when the modal is open
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    // Function to enable scrolling when the modal is closed
    const enableScroll = () => {
      document.body.style.overflow = 'auto';
    };

    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }

    // Clean up the event listener when the component unmounts
    return () => {
      enableScroll();
    };
  }, [open]);
  return (
    open && (
      <StyledModal open={open} onClick={() => setOpen(false)}>
        <ContentHolder
          bg={bg}
          padding={padding}
          width={width}
          minWidth={minWidth}
          radius={radius}
          desktopRight={desktopRight}
          desktopTop={desktopTop}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </ContentHolder>
      </StyledModal>
    )
  );
};

export default CenterModal;
