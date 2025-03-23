import styled from 'styled-components';

export const StyledNoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 130px);
  background: var(--white);

  .heading {
    display: block;
    font-size: 55px;
    line-height: 60px;
    font-weight: 700;
    margin: 0 0 20px;
  }

  .text {
    display: block;
    font-size: 20px;
    line-height: 24px;
    color: var(--gray-50);
    text-align: center;
    margin: 0 0 45px;
  }
`;
