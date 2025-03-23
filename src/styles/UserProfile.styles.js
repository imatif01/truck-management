import styled from 'styled-components';

export const StyledUserProfile = styled.div`
  .content-holder {
    @media (min-width: 992px) {
      display: flex;
      align-items: flex-start;
      gap: 20px;
    }

    .user-info {
      background: var(--white);
      border-radius: 10px;
      padding: 20px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      margin: 0 0 20px;
      @media (min-width: 992px) {
        width: 30%;
        margin: 0;
      }

      .img-holder {
        width: 130px;
        height: 130px;
        background: var(--yellow);
        border-radius: 50%;
        margin: 0 auto 12px;
        overflow: hidden;

        @media (min-width: 576px) {
          width: 160px;
          height: 160px;
        }

        @media (min-width: 768px) {
          width: 200px;
          height: 200px;
        }

        img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }

      .user-name {
        display: block;
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        text-align: center;
      }

      .role {
        display: block;
        font-size: 14px;
        line-height: 18px;
        color: #89868d;
        text-align: center;
        margin: 0 0 13px;
        @media (min-width: 576px) {
          margin: 0 0 23px;
        }
      }

      .btn-holder {
        display: flex;
        justify-content: center;
        button {
          border: 1px solid var(--black);
          padding: 7px 10px;
          &:hover {
            border-color: var(--primary);
          }
        }
      }
    }

    .col-holder {
      @media (min-width: 992px) {
        width: 70%;
      }
    }

    .col {
      width: 100%;
      background: var(--white);
      border-radius: 10px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      &:not(:last-child) {
        margin: 0 0 20px;
      }

      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
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

        button {
          border: 1px solid var(--black);
          padding: 7px 10px;
          &:hover {
            border-color: var(--primary);
          }
        }
      }

      form {
        padding: 20px 25px;
        @media (min-width: 1400px) {
          padding: 30px 35px;
        }

        .input-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 35px;
          column-gap: 50px;
          margin: 0 0 35px;

          @media (min-width: 576px) {
            grid-template-columns: repeat(2, 1fr);
          }

          @media (min-width: 1600px) {
            column-gap: 150px;
          }
        }

        label {
          margin: 0 0 2px;
        }

        input {
          height: 30px;
          border-top: 0;
          border-left: 0;
          border-right: 0;
          border-bottom: 1px solid #89868d;
          border-radius: 0;
          padding: 4px 0;

          &:focus {
            border-color: var(--secondary);
          }
        }
      }

      .password-form {
        @media (min-width: 768px) {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        @media (min-width: 1400px) {
          gap: 50px;
        }

        .desktop-button {
          display: none;
          @media (min-width: 768px) {
            display: block;
          }
        }

        .mobile-button {
          display: block;
          @media (min-width: 768px) {
            display: none;
          }
        }

        .password-inputs {
          margin: 0 0 20px;
          @media (min-width: 768px) {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 0;
          }
          @media (min-width: 1600px) {
            width: 40%;
          }
        }

        .devices {
          padding: 30px 15px;
          border-radius: 10px;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          margin: 0 0 20px;

          @media (min-width: 768px) {
            width: 50%;
            margin: 0;
          }
          @media (min-width: 1600px) {
            width: 40%;
          }

          .devices-head {
            padding: 0 0 20px;
            border-bottom: 1px solid var(--border-color);

            .heading {
              display: block;
              font-size: 22px;
              line-height: 26px;
              font-weight: 700;
              color: var(--black);
              margin: 0 0 10px;
            }

            .text {
              display: block;
              font-size: 14px;
              line-height: 18px;
              color: #89868d;
              margin: 0 0 20px;
            }
          }

          .about-device {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            padding: 10px 0;

            .device-name {
              display: block;
              margin: 0 0 2px;
            }
            .text {
              display: block;
              font-size: 14px;
              line-height: 18px;
              color: var(--gray-150);
            }
          }
        }
      }
    }
  }
`;
