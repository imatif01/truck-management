import React from 'react';
import { StyledCard } from './DashboardCard.styles';
import Image from 'next/image';

const DashboardCard = ({ arr }) => {
  return (
    <>
      {arr?.map((item, index) => (
        <StyledCard $iconBg={item?.iconBg}>
          <figure className="icon-holder">
            <Image src={item?.icon} alt="Icon" width={30} height={30} />
          </figure>
          <span className="text">{item?.text}</span>
          <span className="digits">{item?.total}</span>
        </StyledCard>
      ))}
    </>
  );
};

export default DashboardCard;
