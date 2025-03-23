import styled from 'styled-components';

export const StyledSettings = styled.div`
  .col {
    width: 70%;
    background: var(--white);
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 0 auto;

    &:not(:last-child) {
      margin: 0 auto 20px;
    }

    .head {
      padding: 10px 25px;
      border-bottom: 1px solid var(--border-color);
      @media (min-width: 1400px) {
        padding: 10px 35px;
      }

      .heading {
        display: block;
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        color: var(--black);
      }
    }

    .content-holder {
      padding: 25px 35px;

      .content {
        display: flex;
        align-items: center;
        gap: 90px;
        margin: 0 0 35px;

        .text-holder {
          width: 100%;
          max-width: 250px;

          .title {
            display: block;
            font-weight: 600;
            margin: 0 0 2px;
          }

          .text {
            display: block;
            font-size: 14px;
            line-height: 18px;
            color: var(--gray-150);
          }
        }

        .switch {
          width: max-content;
          background: var(--gray);
          border-radius: 40px;
          overflow: hidden;

          button {
            padding: 9px 16px;
            border-radius: 40px;
            transition: 0.3s;

            &.active {
              background: var(--primary);
              color: var(--white);
            }
          }
        }
      }

      .btn-holder {
        display: flex;
        justify-content: flex-end;
      }
    }
  }

  .security-col {
    .content {
      .text-holder {
        max-width: 280px !important;
      }
      .search-holder {
        display: flex;
        align-items: center;
        flex-grow: 1;
        gap: 10px;

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 30px;
          color: var(--gray-50);
          background: var(--gray);
          border: 1px solid var(--border-color);
          padding: 10px;
          border-radius: 8px;
        }

        .roles-dropDown {
          width: 200px;

          li {
            padding: 10px 20px;
            border-bottom: 1px solid var(--border-color);
            margin: 0 -20px;

            &:first-child {
              padding-top: 0;
            }
            &:last-child {
              border: none;
              padding-bottom: 0;
            }
          }
        }
      }

      .btn-holder {
        gap: 10px;
      }
    }
  }
`;
