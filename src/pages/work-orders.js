import React, { useState, useMemo } from 'react';
import HeadingSection from '@/components/HeadingSection';
import importIcon from '@/assets/images/import-icon.svg';
import Button from '@/components/Button';
import { IoIosAdd } from 'react-icons/io';
import Image from 'next/image';
import Table from '@/components/Table';
import { IoSearch } from 'react-icons/io5';
import { FaSlidersH } from 'react-icons/fa';
import DropDown from '@/components/DropDown/DropDown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import NoData from '@/components/NoData';
import Modal from '@/components/Modal';
import NewOrder from '@/components/NewOrder';

const WorkOrder = () => {
  const [dropDown, setDropDown] = useState(false);
  const [action, setAction] = useState(null);
  const [createOrder, setCreateOrder] = useState(false);

  function handleStatusTag(status) {
    return <span className={`status ${status}`}>{status}</span>;
  }

  function handleDriver(text, index) {
    return (
      <div className="assigned-driver">
        <span>{text}</span>
        <DropDown
          isOpen={action === index}
          toggleDropdown={() => setAction(action === index ? null : index)}
          top="20px"
          button={<BsThreeDotsVertical className="icon" />}
        >
          <div className="order-action">
            <div className="edit">
              <FiEdit />
              <span>Edit</span>
            </div>
            <div className="delete">
              <RiDeleteBin6Line />
              <span>Delete</span>
            </div>
          </div>
        </DropDown>
      </div>
    );
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

  const columns = [
    'Work Order ID',
    'Pickup Location',
    'Delivery Location',
    'Status',
    'Assigned Driver',
  ];

  const { rowsData } = useMemo(() => {
    return {
      rowsData: orderData?.map((item, index) => [
        item?.id,
        item?.pickup,
        item?.delivery,
        handleStatusTag(item?.status),
        handleDriver(item?.driver, index),
      ]),
      totalCount: orderData?.length,
    };
  }, [orderData]);

  return (
    <>
      {orderData?.length ? (
        <>
          <Modal
            open={createOrder}
            setOpen={setCreateOrder}
            width="250px"
            minWidth="250px"
            leftSide
            noOverly
            noHeader
            child={<NewOrder setCreateOrder={setCreateOrder} />}
          />
          <HeadingSection>
            <div className="work-head">
              <h1>Work Order Management</h1>
              <div className="btn-holder">
                <Button variant="white" width="120px">
                  <Image src={importIcon} alt="importIcon" />
                  Import
                </Button>
                <Button onClick={() => setCreateOrder(true)}>
                  <IoIosAdd size={25} />
                  Create new Order
                </Button>
              </div>
            </div>
          </HeadingSection>
          <div className="table-holder">
            <div className="table-head">
              <div className="input-holder">
                <input type="text" placeholder="Search by ID, Location, or Driver" />
                <IoSearch size={25} className="search-icon" />
              </div>
              <div className="dropDown-holder">
                <DropDown
                  isOpen={dropDown}
                  toggleDropdown={() => setDropDown(!dropDown)}
                  top="50px"
                  button={
                    <button className="filter-btn">
                      Filters
                      <FaSlidersH />
                    </button>
                  }
                >
                  <div className="filters-dropDown">
                    <span className="heading">Search by Status</span>
                    <div className="btn-holder">
                      <button className="success">Delivered</button>
                      <button className="pending">Pending</button>
                    </div>
                    <span className="heading">Search by Date</span>
                    <div className="input-holder">
                      <input type="date" />
                    </div>
                    <span className="text">*You can choose multiple Order type</span>
                    <div className="btn-wrap">
                      <Button width="130px" onClick={() => setDropDown(false)}>
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </DropDown>
              </div>
            </div>
            <Table columns={columns} rowsData={rowsData} rowsPerPage={8} />
          </div>
        </>
      ) : (
        <NoData
          heading="No Work Order History Found"
          text={
            <>
              Sorry their has no past work orders. New assignments will <br /> appear here once
              added.
            </>
          }
          btnText="Create new Order"
        />
      )}
    </>
  );
};

export default WorkOrder;
