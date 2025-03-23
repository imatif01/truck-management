import React, { useState, useMemo } from 'react';
import { StyledDriverProfile } from './DriverProfile.styles';
import driverImg from '@/assets/images/driver-img.png';
import { GoMail } from 'react-icons/go';
import Image from 'next/image';
import Button from '../Button';
import { FiPhone } from 'react-icons/fi';
import Table from '../Table';
import CenterModal from '../Modal/CenterModal';

const DriverProfile = () => {
  const [dropDown, setDropDown] = useState(false);
  const [action, setAction] = useState(null);
  const [assignModal, setAssignModal] = useState(false);

  function handleStatusTag(status) {
    return <span className={`status ${status}`}>{status}</span>;
  }

  const orderData = [
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

  const columns = ['Work Order ID', 'Pickup Location', 'Delivery Location', 'Status'];

  const { rowsData } = useMemo(() => {
    return {
      rowsData: orderData?.map((item, index) => [
        item?.id,
        item?.pickup,
        item?.delivery,
        handleStatusTag(item?.status),
      ]),
      totalCount: orderData?.length,
    };
  }, [orderData]);
  return (
    <>
      <CenterModal open={assignModal} setOpen={setAssignModal} width="650px">
        <div className="assign-modal">
          <span className="heading">Do you want to notify the driver?</span>
          <p>
            Are you sure you want to assign this work order to <b>Christine Brooks?</b> You can
            notify the driver immediately about this assignment.
          </p>
          <Button>Confirm</Button>
          <button className="cancel-button" onClick={() => setAssignModal(false)}>
            Cancel
          </button>
        </div>
      </CenterModal>
      <StyledDriverProfile>
        <div className="head">
          <div className="driver-info">
            <figure className="img-holder">
              <Image src={driverImg} alt="driverImg" width={100} height={100} />
            </figure>
            <div>
              <span className="name">Christine Brooks</span>
              <span className="address">089 Kutch Green Apt. 448</span>
            </div>
          </div>
          <Button variant="success">Available</Button>
        </div>
        <div className="info">
          <div className="email">
            <GoMail />
            <span>abbrooks252@gmail.com</span>
          </div>
          <div className="phone">
            <FiPhone />
            <span>abbrooks252@gmail.com</span>
          </div>
        </div>
        <div className="table-head">
          <span className="heading">Past Work</span>
          <div className="btn-holder">
            <Button width="160px" onClick={() => setAssignModal(true)}>
              Assign Work Order
            </Button>
          </div>
        </div>
        <div className="table-holder profile-table">
          <Table columns={columns} rowsData={rowsData} rowsPerPage={6} minWidth="auto" />
        </div>
      </StyledDriverProfile>
    </>
  );
};

export default DriverProfile;
