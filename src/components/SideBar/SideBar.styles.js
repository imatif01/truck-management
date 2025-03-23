import styled from 'styled-components';

export const StyledSideBar = styled.div`
  width: 240px;
  position: fixed;
  top: 0;
  left: -100%;
  bottom: 0;
  background: var(--white);
  padding: 30px 15px;
  transition: 0.4s ease-in-out;
  z-index: 99;

  @media (min-width: 1200px) {
    left: 0;
  }
  @media (min-width: 1400px) {
    width: 250px;
    padding: 30px 20px;
  }

  .nav-active & {
    left: 0;
  }

  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    display: block;

    @media (min-width: 1200px) {
      display: none;
    }
  }

  .logo-holder {
    width: 100%;
    max-width: 90px;
    margin: 0 20px 30px;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  ul {
    Li {
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 13px 15px;
        border-radius: 6px;
        position: relative;
        transition: 0.4s;
        margin: 0 0 5px;

        @media (min-width: 992px) {
          gap: 20px;
        }

        &::before {
          visibility: hidden;
          opacity: hidden;
          transition: all ease-in-out 0.3s;
          position: absolute;
          content: '';
          top: 50%;
          bottom: 0;
          left: -15px;
          transform: translateY(-50%);
          width: 4px;
          height: 0;
          border-radius: 0 4px 4px 0;
          background: var(--primary);
          @media (min-width: 1400px) {
            left: -20px;
          }
        }

        &:hover,
        &.active {
          background: var(--primary);
          color: var(--white);

          &::before {
            visibility: visible;
            opacity: 1;
            height: 100%;
          }
          img {
            filter: invert(99%) sepia(0%) saturate(7500%) hue-rotate(273deg) brightness(163%)
              contrast(104%);
          }
        }
      }
      &:nth-child(5) {
        border-bottom: 1px solid var(--border-color);
        padding: 0 0 10px;
        margin: 0 0 10px;
      }
    }
  }
`;
