import styled from 'styled-components';

export const StyledDriverProfile = styled.div`
  padding: 20px;

  .head,
  .table-head {
    margin: 0 0 10px;
    @media (min-width: 576px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
    }
  }

  .head {
    margin: 0 0 10px;

    .driver-info {
      display: flex;
      align-items: center;
      gap: 15px;
      margin: 10px;
      @media (min-width: 576px) {
        margin: 0;
      }

      .img-holder {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;

        @media (min-width: 576px) {
          width: 80px;
          height: 80px;
        }

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .name {
        display: block;
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
        margin: 0 0 5px;

        @media (min-width: 576px) {
          font-size: 24px;
          line-height: 28px;
        }
      }
    }
  }

  .info {
    padding: 0 20px 20px;
    border-bottom: 1px solid var(--border-color);
    margin: 0 -20px;
    @media (min-width: 575px) {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  .email,
  .phone {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 10px;

    @media (min-width: 576px) {
      margin: 0;
    }
  }

  .email,
  .phone {
    font-size: 14px;
    line-height: 18px;
    color: #4c405d;
    background: #ededf4;
    padding: 8px 10px;
    border: 1px solid #a5a5c8;
    border-radius: 8px;
  }

  .table-head {
    padding: 20px 0;

    .btn-holder {
      @media (min-width: 576px) {
        display: flex;
        justify-content: flex-end;
      }
    }

    .heading {
      display: block;
      font-size: 20px;
      line-height: 24px;
      font-weight: 600;
    }
  }
`;
