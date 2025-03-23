import React, { useMemo, useState } from 'react';
import DashboardCard from '@/components/DashboardCard';
import truckIcon from '@/assets/images/truck-icon.svg';
import driverIcon from '@/assets/images/driver-icon-2.svg';
import pendingOrderIcon from '@/assets/images/pending-order-icon.svg';
import completeOrderIcon from '@/assets/images/complete-order-icon.svg';
import RevenueGraph from '@/components/RevenueGraph';
import { StyledDashboard } from './_app';
import Table from '@/components/Table';
import Button from '@/components/Button';
import { IoAdd } from 'react-icons/io5';
import { IoIosAdd } from 'react-icons/io';
import dynamic from 'next/dynamic';
import PieChart from '@/components/PieChart';
import HeadingSection from '@/components/HeadingSection';
import Modal from '@/components/Modal';
import NewOrder from '@/components/NewOrder';

const Index = () => {
  const [createOrder, setCreateOrder] = useState(false);

  const cardsData = [
    {
      icon: truckIcon,
      text: 'Total Trucks',
      total: '120',
      iconBg: '#E5E4FF',
    },
    {
      icon: driverIcon,
      text: 'Active Drivers',
      total: '95',
      iconBg: '#FFF3D6',
    },
    {
      icon: pendingOrderIcon,
      text: 'Pending Work Orders',
      total: '35',
      iconBg: '#D9F7E8',
    },
    {
      icon: completeOrderIcon,
      text: 'Completed Orders',
      total: '80',
      iconBg: '#FFDED1',
    },
  ];

  const columns = [
    'Work Order ID',
    'Pickup Location',
    'Delivery Location',
    'Status',
    'Assigned Driver',
  ];

  function handleStatusTag(status) {
    return <span className={`status ${status}`}>{status}</span>;
  }

  const driverData = [
    {
      id: '#293892123',
      pickup: '089 Kutch Green Apt. 448',
      delivery: '089 Kutch Green Apt. 448',
      status: 'Delivered',
      driver: 'Christine Brooks',
    },
    {
      id: '#293892123',
      pickup: '089 Kutch Green Apt. 448',
      delivery: '089 Kutch Green Apt. 448',
      status: 'Pending',
      driver: 'Christine Brooks',
    },
  ];

  const { rowsData } = useMemo(() => {
    return {
      rowsData: driverData?.map((item, index) => [
        item?.id,
        item?.pickup,
        item?.delivery,
        handleStatusTag(item?.status),
        item?.driver,
      ]),
      totalCount: driverData?.length,
    };
  }, []);

  return (
    <>
      <Modal
        open={createOrder}
        setOpen={setCreateOrder}
        width="250px"
        leftSide
        noOverly
        noHeader
        child={<NewOrder />}
      />
      <StyledDashboard>
        <HeadingSection>
          <h1>Dashboard</h1>
        </HeadingSection>
        <div className="cards-holder">
          <DashboardCard arr={cardsData} />
        </div>
        <div className="charts-holder">
          <div className="revenue-chart">
            <RevenueGraph />
          </div>
          <div className="payout-chart">
            <PieChart />
          </div>
        </div>
        <div className="table-holder">
          <div className="table-head">
            <span className="h1">Recent Activity</span>
            <Button className="create-order-btn" onClick={() => setCreateOrder(true)}>
              <IoIosAdd size={25} />
              Create new Order
            </Button>
          </div>
          <Table columns={columns} rowsData={rowsData} />
        </div>
      </StyledDashboard>
    </>
  );
};

export default Index;
