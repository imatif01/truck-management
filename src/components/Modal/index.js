import React, { useEffect, useRef } from 'react';
import { ModalHead, ModalHolder, Overlay } from './Modal.styles';
import { IoClose } from 'react-icons/io5';

const Modal = ({
  open,
  width,
  padding,
  paddingRight,
  top,
  bg,
  radius,
  child,
  setOpen,
  minWidth,
  leftSide,
  noOverly,
  noHeader,
}) => {
  const modalRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <>
      {' '}
      {open && <Overlay $noOverly={noOverly} onClick={() => setOpen(false)} />}
      <ModalHolder
        ref={modalRef}
        open={open}
        width={width}
        padding={padding}
        $top={top}
        paddingRight={paddingRight}
        bg={bg}
        radius={radius}
        minWidth={minWidth}
        $leftSide={leftSide}
      >
        {!noHeader && (
          <ModalHead>
            <div className="close-icon" onClick={() => setOpen(false)}>
              <IoClose size={24} />
            </div>
          </ModalHead>
        )}
        {child}
      </ModalHolder>
    </>
  );
};

export default Modal;
