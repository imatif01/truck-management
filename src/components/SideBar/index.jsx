import React, { useState, useEffect, useRef } from 'react';
import { StyledSideBar } from './SideBar.styles';
import logo from '../../assets/images/l';
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
import { useRouter } from 'next/router';

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
  const navRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  function handleMenu() {
    if (typeof window !== 'undefined') {
      document.body.classList.toggle('nav-active');
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        document.body.classList.remove('nav-active');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleRouteChangeStart = () => {
      document.body.classList.remove('nav-active');
    };

    const handleRouteChangeComplete = () => {
      document.body.classList.remove('nav-active');
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      window.onload = null;
    };
  }, [router]);
  return (
    <StyledSideBar ref={navRef}>
      <div className="close-icon" onClick={handleMenu}>
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
