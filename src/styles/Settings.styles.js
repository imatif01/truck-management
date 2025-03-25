import styled from 'styled-components';

export const StyledSettings = styled.div`
  .col {
    background: var(--white);
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 0 auto;

    @media (min-width: 1400px) {
      width: 70%;
    }

    &:not(:last-child) {
      margin: 0 auto 20px;
    }

    .head {
      padding: 12px 20px;
      border-bottom: 1px solid var(--border-color);

      @media (min-width: 1400px) {
        padding: 15px 35px;
      }

      .heading {
        display: block;
        font-size: 18px;
        line-height: 22px;
        font-weight: 500;
        color: var(--black);

        @media (min-width: 768px) {
          font-size: 20px;
          line-height: 24px;
        }
      }

      .text {
        @media (max-width: 767px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }

    .content-holder {
      padding: 20px;
      @media (min-width: 1400px) {
        padding: 25px 35px;
      }

      .content {
        margin: 0 0 25px;

        @media (min-width: 768px) {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 0 0 35px;
        }
        @media (min-width: 992px) {
          gap: 90px;
        }

        .text-holder {
          width: 100%;
          max-width: 250px;
          margin: 0 0 10px;
          @media (min-width: 768px) {
            margin: 0;
          }

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
      &:first-child {
        align-items: flex-start;
      }

      .text-holder {
        max-width: 280px !important;
      }

      .table-and-filter {
        width: 100%;

        table {
          min-width: 100%;

          th,
          td {
            font-size: 16px;
            line-height: 20px;
            background: var(--gray);
            padding: 10px 12px;
            border: 1px solid var(--border-color);
            @media (max-width: 575px) {
              font-size: 14px;
              line-height: 18px;
            }
          }

          td {
            background: var(--white);
            &:not(:last-child) {
              @media (max-width: 767px) {
                border-bottom: 0;
              }
            }
          }

          tr {
            border-bottom: 0;
            padding: 0;
          }
        }
        .pagination {
          padding: 10px 0;
        }

        .status-holder {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;

          @media (min-width: 768px) {
            justify-content: space-between;
          }

          .status {
            padding: 0;
            &.Active {
              color: var(--success);
            }

            &.InActive {
              color: var(--danger);
            }
          }
        }
      }
      .search-holder {
        display: flex;
        align-items: center;
        flex-grow: 1;
        gap: 10px;
        margin: 0 0 20px;

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
        justify-content: flex-start;
        @media (max-width: 575px) {
          display: block;
        }

        button {
          @media (max-width: 575px) {
            width: 100%;
            &:not(:last-child) {
              margin: 0 0 10px;
            }
          }
        }
      }
    }
  }
`;
