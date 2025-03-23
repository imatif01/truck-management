import { ToastContainer } from 'react-toastify';
import { createGlobalStyle, styled } from 'styled-components';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';

export const GlobalStyle = createGlobalStyle`
:root {
  /* variables */
  --primary: #8686AC;
  --secondary:#A5A5C8;
  --gray:#F1F2F6;
  --gray-50:#718096;
  --gray-100:#FCFDFD;
  --gray-150:#89868D;
  --border-color:#E0E0E0;
  --white: #fff;
  --text-color: #202224;
  --black: #000;
  --dark: #303030;
  --dark-50: #111827;
  --yellow:#FFD023;
  --danger:#F76C6C;
  --success:#66BB6A;
  --heading-color:#333333;
  --danger-100: #ff532c;
}
  * {
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
    scroll-padding-top: 200px;
  }
  *:before,
  *:after,
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", serif;
    background: var(--gray);
    color: var(--text-color);
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    position: relative;
    min-width: 375px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


    &.nav-active {
      overflow: hidden !important;

      .overlay {
        visibility: visible;
        opacity: 1;
      }
    }

    
  }
  
  .overlay {
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out 0.3s;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}

 
  
  #wrapper {
    width: 100%;
    position: relative;
    padding: 100px 15px 20px;
    overflow: hidden;
    
    @media(min-width: 576px){
      padding: 110px 15px 20px;
    }

    @media(min-width: 1200px){
      padding: 110px 20px 20px 260px;
    }
    @media(min-width: 1400px){
      padding: 110px 20px 20px 280px;
    }

  }


  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {

    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="file"],
  input[type="submit"] {
    cursor: pointer;
    font-family: inherit;
  }

  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }
  a {
    text-decoration: none;
    color: var(--blue);
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  button {
    transition: opacity var(--animation-speed) ease-in-out,
      background var(--animation-speed) ease-in-out,
      visibility var(--animation-speed) ease-in-out,
      border var(--animation-speed) ease-in-out,
      color var(--animation-speed) ease-in-out;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    outline: none;
    font-family: var(--font-size-base);
  }


  table {
    width: 100%;
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    color: var(--heading-color);
    font-weight: 500;
    margin: 0 0 10px;
    @media (min-width: 576px) {
      margin: 0 0 15px;
      
    }
  }
  
  h1,
  .h1 {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    margin: 0 0 18px;
    
    @media (min-width: 576px) {
      font-size: 32px;
      line-height: 46px;
      
    }
  }

  h2,
  .h2 {
    font-size: 27px;
    line-height: 31px;
    font-weight: 700;
    
    @media (min-width: 576px) {
      font-size: 35px;
      line-height: 40px;

    }
    @media (min-width: 992px) {
      font-size: 48px;
      line-height: 49px;
    }
  }
  h3,
  .h3 {
    font-size: 28px;
    line-height: 32px;
  }
  h4,
  .h4 {
    font-size: 24px;
    line-height: 28px;
  }


  p {
    margin: 0 0 15px;
    &:last-child {
      margin: 0;
    }
  }

  br {

    @media(max-width: 991px){
      display: none;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 20px;
  }


  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 15px;
    background: var(--border-color);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 10px;
  }

  /* Handle on hover */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
   input:-webkit-autofill,
  textarea:-webkit-autofill {
    background-color: transparent !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  input:-webkit-autofill:focus,
  textarea:-webkit-autofill:focus {
    background-color: transparent !important;
  }
  figure {
    margin: 0;
  }
  /* Firefox */
  input[type="number"] {
    appearance: textfield;
  }

  .status{
    font-weight: 700;
    padding: 7px 20px;
    border-radius: 14px;
    
    &.Delivered{
      color:var(--success);
      background: #CCFFCF;
      
    }

    &.Pending{
      color:var(--danger);
      background: #FFD3D3;
      
    }
  }

  .table-holder {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: var(--white);
    border-radius: 14px;
    overflow: hidden;

    .table-head {
      display: block;
      padding: 20px 10px 0;
      
      @media (min-width: 576px){
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 30px 30px 0;
        
      }

      .h1{
        display: block;
        margin: 0 0 10px;
        @media (min-width: 576px){
          margin: 0;

        }

      }

      .create-order-btn{
            float: right;
      }

      .dropDown-holder{
         display: flex;
         justify-content: flex-end;
      }

      .filter-btn{
        display: flex;
        align-items: center;
        gap:30px;
        color: var(--gray-50);
        background: var(--gray);
        border: 1px solid var(--border-color);
        padding: 10px;
        border-radius: 8px;
      }
    }


  }

  .profile-table{
    border: 1px solid var(--border-color);
    border-radius: 25px;
    th{
      font-size: 18px;
    }
    td{
      font-size: 14px;
    }
  }

  .input-holder{
    flex-grow: 1;
    position: relative;
    margin: 0 0 10px;

    @media (min-width: 576px){
      margin: 0;
    }
    
    
    input{
      width: 100%;
      height: 45px;
      border: none;
      outline: none;
      color: var(--gray-50);
      background: var(--gray);
      border: 1px solid var(--border-color);
      padding: 15px 50px 12px 12px;
      border-radius: 8px;
    }
    
    .search-icon{
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      color: var(--gray-50);
    }
  }

  .assigned-driver{  
    display: flex;
    align-items:center;
    justify-content:flex-end;
    gap: 10px;

    @media (min-width: 768px){
      justify-content:space-between;

    }

  }

  .driver-name{
    display: flex;
    align-items: center;
    gap: 15px;

    @media (max-width: 767px){

      justify-content: flex-end;
    }

    .driver-img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      @media (min-width: 768px){
        width: 50px;
        height: 50px;

      }

      img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .assign-modal {
    text-align: center;

    .heading {
      display: block;
      font-size: 18px;
      line-height: 22px;
      font-weight: 700;
      color: var(--primary);
      margin: 0 0 5px;
      
      @media (min-width: 576px){
        font-size: 24px;
        line-height: 28px;
      }
    }

    p{
      margin: 0 0 20px;

      @media (max-width: 575px){
        font-size: 14px;
        line-height: 18px;
        margin: 0 0 15px;
      }
    }

  .cancel-button{
    display: block;
    font-weight: 700;
    color: var(--primary);
    margin:0 auto;
    padding: 10px 0 0;
    
    @media (min-width: 576px){
      font-size: 18px;
      line-height: 22px;

    }
  }
  }
  `;

export const StyledDashboard = styled.div`
  .cards-holder {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 0 0 15px;

    @media (min-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1400px) {
      gap: 22px;
      margin: 0 0 22px;
    }
  }

  .charts-holder {
    margin: 0 0 22px;

    @media (min-width: 992px) {
      display: flex;
      gap: 22px;
    }

    .revenue-chart {
      background: var(--white);
      border-radius: 14px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      margin: 0 0 15px;

      @media (min-width: 992px) {
        width: 60%;
        margin: 0;
      }

      @media (min-width: 1500px) {
        width: 70%;
      }

      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 25px 25px;

        .h1 {
          margin: 0;
        }

        .list-holder {
          font-size: 14px;
          line-height: 18px;
          position: relative;
          cursor: pointer;

          &.active {
            .list {
              bottom: -60px;
              opacity: 1;
            }
            .icon {
              transform: scale(-1);
            }
          }

          .icon {
            transition: 0.3s;
          }

          .label-holder {
            display: flex;
            align-items: center;
            gap: 5px;
            background: var(--gray-100);
            border: 1px solid var(--border-color);
            border-radius: 5px;
            padding: 5px;
          }

          .list {
            position: absolute;
            bottom: -50px;
            left: 0;
            opacity: 0;
            background: var(--gray-100);
            border: 1px solid var(--border-color);
            border-radius: 5px;
            padding: 5px;
            transition: 0.3s;
            z-index: 9;
          }
        }
      }
    }

    .highcharts-credits {
      display: none;
    }
    .payout-chart {
      background: var(--white);
      padding: 20px;
      border-radius: 14px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      @media (min-width: 992px) {
        width: 40%;
      }

      @media (min-width: 1500px) {
        width: 30%;
      }

      .large-chart {
        width: 250px;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        margin: 0 auto 30px;

        @media (min-width: 576px) {
          width: 300px;
          height: 300px;
        }
      }

      .small-charts {
        display: flex;
        justify-content: center;

        .highcharts-container {
          width: 100px !important;
          height: 100px !important;

          @media (min-width: 576px) {
            width: 130px !important;
            height: 130px !important;
          }
        }
        .chart {
          width: 100%;
          height: 100%;
          text-align: center;
        }
      }

      .highcharts-container {
        .highcharts-subtitle {
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          width: 100px;
          height: 100px;
          font-size: 18px !important;
          line-height: 22px !important;
          color: var(--heading-color) !important;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--white);
          border-radius: 50%;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        }
      }
    }
  }
`;

const StyledToastContainer = styled(ToastContainer)`
  z-index: 99999;

  .Toastify__toast {
    padding: 0;
    min-height: 0;
    border-radius: 8px;
    font-family: inherit;
  }
  .Toastify__toast--default {
    background: none;
  }
  .Toastify__toast-body {
    padding: 0;
  }
  .Toastify__close-button {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
