import styled, { css } from 'styled-components';

export const StyledDropDown = styled.div`
  width: max-content;
  position: relative;

  .dropDown {
    position: absolute;
    top: ${({ $top }) => ($top ? $top : '30px')};
    right: 0;
    background: var(--white);
    padding: 20px;
    border-radius: 15px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: 0.3s all ease-in-out;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 2;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      .dropDown {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    `}

  .filters-dropDown {
    width: 300px;

    @media (min-width: 768px) {
      width: 520px;
    }

    .heading {
      display: block;
      font-size: 18px;
      line-height: 22px;
      font-weight: 700;
      margin: 0 0 15px;
    }

    .btn-holder {
      display: flex;
      gap: 16px;
      margin: 0 0 30px;

      button {
        width: 100%;
        max-width: 150px;
        font-size: 14px;
        line-height: 15px;
        padding: 8px 25px;
        border-radius: 6px;
      }

      .success {
        color: var(--success);
        border: 1px solid var(--success);
      }

      .pending {
        color: var(--danger);
        border: 1px solid var(--danger);
      }

      .busy {
        color: var(--yellow);
        border: 1px solid var(--yellow);
      }
    }

    .driver-filter-btn {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .driver-filter-btn,
    .input-holder {
      border-bottom: 1px solid var(--border-color);
      padding: 0 20px 30px;
      margin: 0 -20px 16px;
    }

    .input-holder {
      input {
        max-width: 180px;
        padding: 8px;
        background: transparent;
      }
    }

    .text {
      display: block;
      color: #434343;
      margin: 0 0 30px;
    }

    .btn-wrap {
      display: flex;
      justify-content: center;
    }
  }

  .icon {
    cursor: pointer;
  }

  .order-action {
    width: 120px;

    .edit,
    .delete {
      display: flex;
      gap: 12px;
      cursor: pointer;
    }

    .edit {
      padding: 0 20px 12px;
      border-bottom: 1px solid var(--border-color);
      margin: 0 -20px;
    }

    .delete {
      padding: 12px 0 0;
      color: var(--danger);
    }
  }

  .view-profile {
    width: 120px;
    display: flex;
    gap: 10px;
    cursor: pointer;
  }
`;
