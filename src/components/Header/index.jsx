import React, { useState, useEffect } from 'react';
import { StyledHeader } from './Header.styles';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import userImg from '@/assets/images/user-img.png';
import Image from 'next/image';
import DropDown from '../DropDown/DropDown';
import profileIcon from '@/assets/images/profile-icon.svg';
import { FaKey } from 'react-icons/fa';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [dropDown, setDropDown] = useState(false);

  return (
    <StyledHeader>
      <div>
        <span className="name">Hi, Tynisha!</span>
      </div>

      <div className="info-holder">
        <IoNotificationsOutline />
        <DropDown
          isOpen={dropDown}
          toggleDropdown={() => setDropDown(!dropDown)}
          top="50px"
          button={
            <div className={dropDown ? 'user-info active' : 'user-info'}>
              <figure className="user-img">
                <Image src={userImg} alt="userImg" />
              </figure>
              <div className="info">
                <span className="name">Tynisha Obey</span>
                <span className="designation">KATRING</span>
              </div>
              <div className="icon-holder">
                <IoIosArrowDown className="icon" />
              </div>
            </div>
          }
        >
          <ul className="user-dropDown" onClick={() => setDropDown(false)}>
            <li onClick={() => router.push('/user-profile')}>
              <Image src={profileIcon} alt="profileIcon" />
              Profile
            </li>
            <li>
              <FaKey />
              Setting
            </li>
            <li>
              <RiLogoutBoxRLine />
              Logout
            </li>
          </ul>
        </DropDown>
      </div>
    </StyledHeader>
  );
};

export default Header;
