import React from 'react';
import { StyledNoData } from './NoData.styles';
import noDataImg from '@/assets/images/no-data-img.png';
import Image from 'next/image';
import { IoIosAdd } from 'react-icons/io';
import Button from '../Button';

const NoData = ({ heading, text, btnText }) => {
  return (
    <StyledNoData>
      <figure className="img-holder">
        <Image src={noDataImg} alt="noDataImg" />
      </figure>
      <span className="heading">{heading}</span>
      <span className="text">{text}</span>
      <Button>
        <IoIosAdd size={25} />
        {btnText}
      </Button>
    </StyledNoData>
  );
};

export default NoData;
