import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--white);
  padding: 10px 15px;
  z-index: 9;

  @media (min-width: 576px) {
    padding: 15px;
  }
  @media (min-width: 1200px) {
    left: 240px;
    padding: 20px 35px;
  }
  @media (min-width: 1400px) {
    left: 250px;
  }

  .name,
  .text,
  .designation {
    display: block;
  }

  .name {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    color: var(--dark-50);
    margin: 0 0 4px;

    @media (min-width: 576px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  .text {
    color: var(--gray-50);
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 18px;
    }
  }

  .info-holder,
  .user-info,
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media (min-width: 576px) {
      gap: 60px;
    }
  }

  .user-info {
    gap: 16px;
    cursor: pointer;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 5px;
      bottom: 5px;
      left: -10px;
      width: 1px;
      background: var(--border-color);
      @media (min-width: 576px) {
        left: -25px;
      }
    }

    &.active {
      .icon {
        transform: scale(-1);
      }
    }

    .user-img {
      width: 40px;
      height: 40px;
      background: var(--yellow);
      border-radius: 50px;
      overflow: hidden;

      @media (min-width: 576px) {
        width: 50px;
        height: 50px;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .info {
      display: none;
      @media (min-width: 576px) {
        display: block;
      }
    }

    .name {
      font-size: 16px;
      line-height: 20px;
    }

    .designation {
      font-size: 14px;
      line-height: 20px;
      color: var(--gray-50);
    }

    .icon-holder {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--border-color);
      border-radius: 50px;

      .icon {
        transition: 0.3s;
      }
    }
  }

  .user-dropDown {
    width: 200px;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 1px solid var(--border-color);
      padding: 15px 20px;
      margin: 0 -20px;
      cursor: pointer;

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        border: 0;
        padding-bottom: 0;
      }
    }
  }
`;
