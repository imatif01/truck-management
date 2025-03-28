import React from 'react';
import { StyledLoginTemplate } from './LoginTemplate.styles';
import loginImg from '@/assets/images/loginImg.png';
import logo from '@/assets/images/logo.png';
import Image from 'next/image';

const LoginTemplate = ({ children }) => {
  return (
    <StyledLoginTemplate>
      <div className="form-section">
        <div className="form-holder">{children}</div>
      </div>
      <figure className="img-holder">
        <Image src={loginImg} alt="loginImg" />
      </figure>
    </StyledLoginTemplate>
  );
};

export default LoginTemplate;
