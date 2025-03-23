import styled from 'styled-components';

export const StyledTable = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  table {
    margin: 0;
    padding: 0;
    width: 100%;
    background: var(--white);
    table-layout: fixed;
    border-collapse: collapse;

    @media (min-width: 768px) {
      min-width: ${({ $minWidth }) => ($minWidth ? $minWidth : '1400px')};
    }
  }

  th,
  tr {
    padding: 0.35em;
    border-bottom: 1px solid var(--border-color);
  }

  tr {
    &:last-child {
      border: none;
    }
  }

  th,
  td {
    padding: 0.625em;
    text-align: start;
    padding: 15px 10px;
    @media (min-width: 576px) {
      padding: 25px;
    }
  }

  th {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-transform: capitalize;
  }

  @media screen and (max-width: 767px) {
     {
      border: 0;
    }

    caption {
      font-size: 1.3em;
    }

    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }

    td {
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    td:last-child {
      border-bottom: 0;
    }
  }

  .pagination,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pagination {
    padding: 20px;
    gap: 5px;
    button {
      color: var(--white);
      background: var(--primary);
      padding: 5px;
      border-radius: 5px;
    }
  }
`;
