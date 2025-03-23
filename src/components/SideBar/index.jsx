import React, { useState } from 'react';
import { StyledSideBar } from './SideBar.styles';
import logo from '@/assets/images/logo.svg';
import dashboardIcon from '@/assets/images/dashboard-icon.svg';
import orderIcon from '@/assets/images/order-icon.svg';
import driverIcon from '@/assets/images/driver-icon.svg';
import financeIcon from '@/assets/images/finance-icon.svg';
import reportIcon from '@/assets/images/report-icon.svg';
import settingIcon from '@/assets/images/setting-icon.svg';
import logoutIcon from '@/assets/images/logout-icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoCloseOutline } from 'react-icons/io5';

const sideBarData = [
  {
    icon: dashboardIcon,
    label: 'Dashboard',
    link: '/',
  },
  {
    icon: orderIcon,
    label: 'Work Orders',
    link: '/work-orders',
  },
  {
    icon: driverIcon,
    label: 'Drivers',
    link: '/drivers',
  },
  {
    icon: financeIcon,
    label: 'Payout & Finance',
    link: '/payout',
  },
  {
    icon: reportIcon,
    label: 'Reports & Analysis',
    link: '/reports',
  },
  {
    icon: settingIcon,
    label: 'Settings',
    link: '/setting',
  },
  {
    icon: logoutIcon,
    label: 'Logout',
    link: '/login',
  },
];

const SideBar = () => {
  const [activePage, setActivePage] = useState(0);
  const pathname = usePathname();

  function handleClick() {
    document.body.classList.remove('nav-active');
  }

  return (
    <StyledSideBar>
      <div className="close-icon" onClick={handleClick}>
        <IoCloseOutline size={25} />
      </div>
      <figure className="logo-holder">
        <Image src={logo} alt="logo" />
      </figure>
      <ul>
        {sideBarData?.map((item, index) => (
          <li key={index}>
            <Link href={item?.link} className={pathname == item?.link && 'active'}>
              <Image src={item?.icon} alt={item?.label} />
              {item?.label}
            </Link>
          </li>
        ))}
      </ul>
    </StyledSideBar>
  );
};

export default SideBar;
