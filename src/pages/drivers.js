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
import driverImg from '@/assets/images/driver-img.png';
import profileIcon from '@/assets/images/profile-icon.svg';
import Modal from '@/components/Modal';
import DriverProfile from '@/components/DriverProfile';
import NoData from '@/components/NoData';
import NewDriver from '@/components/NewDriver';

const columns = ['Driver Name', 'Phone Number', 'Assigned Truck', 'Status'];

const Drivers = () => {
  const [dropDown, setDropDown] = useState(false);
  const [action, setAction] = useState(null);
  const [driverProfile, setDriverProfile] = useState(false);
  const [createDriver, setCreateDriver] = useState(false);

  function handleDriverName(driverImage, name) {
    return (
      <div className="driver-name">
        <figure className="driver-img">
          <Image src={driverImage} alt="driverImg" width={60} height={60} />
        </figure>
        <span>{name}</span>
      </div>
    );
  }

  function handleStatus(status, index) {
    return (
      <div className="assigned-driver">
        <span className={`status ${status}`}>{status}</span>
        <DropDown
          isOpen={action === index}
          toggleDropdown={() => setAction(action === index ? null : index)}
          top="20px"
          button={<BsThreeDotsVertical className="icon" />}
        >
          <div className="view-profile">
            <Image src={profileIcon} alt="profileIcon" />
            <span onClick={() => setDriverProfile(true)}>View Profile</span>
          </div>
        </DropDown>
      </div>
    );
  }

  const driverData = [
    {
      image: driverImg,
      name: 'Christine Brooks',
      phone: '1-212-456-7890',
      truck: '089 Kutch Green Apt. 448',
      status: 'Delivered',
    },
    {
      image: driverImg,
      name: 'Christine Brooks',
      phone: '1-212-456-7890',
      truck: '089 Kutch Green Apt. 448',
      status: 'Pending',
    },
    {
      image: driverImg,
      name: 'Christine Brooks',
      phone: '1-212-456-7890',
      truck: '089 Kutch Green Apt. 448',
      status: 'Delivered',
    },
    {
      image: driverImg,
      name: 'Christine Brooks',
      phone: '1-212-456-7890',
      truck: '089 Kutch Green Apt. 448',
      status: 'Pending',
    },
    {
      image: driverImg,
      name: 'Christine Brooks',
      phone: '1-212-456-7890',
      truck: '089 Kutch Green Apt. 448',
      status: 'Delivered',
    },
    {
      image: driverImg,
      name: 'Christine Brooks',
      phone: '1-212-456-7890',
      truck: '089 Kutch Green Apt. 448',
      status: 'Pending',
    },
    {
      image: driverImg,
      name: 'Christine Brooks',
      phone: '1-212-456-7890',
      truck: '089 Kutch Green Apt. 448',
      status: 'Delivered',
    },
    {
      image: driverImg,
      name: 'Christine Brooks',
      phone: '1-212-456-7890',
      truck: '089 Kutch Green Apt. 448',
      status: 'Pending',
    },
    {
      image: driverImg,
      name: 'Christine Brooks',
      phone: '1-212-456-7890',
      truck: '089 Kutch Green Apt. 448',
      status: 'Delivered',
    },
    {
      image: driverImg,
      name: 'Christine Brooks',
      phone: '1-212-456-7890',
      truck: '089 Kutch Green Apt. 448',
      status: 'Pending',
    },
  ];

  const { rowsData } = useMemo(() => {
    return {
      rowsData: driverData?.map((item, index) => [
        handleDriverName(item?.image, item?.name),
        item?.phone,
        item?.truck,
        handleStatus(item?.status, index),
      ]),
      totalCount: driverData?.length,
    };
  }, [driverData]);

  return (
    <>
      <Modal open={driverProfile} setOpen={setDriverProfile} child={<DriverProfile />} />
      <Modal
        open={createDriver}
        setOpen={setCreateDriver}
        width="250px"
        leftSide
        noOverly
        noHeader
        child={<NewDriver setCreateDriver={setCreateDriver} />}
      />
      {driverData?.length ? (
        <>
          <HeadingSection>
            <h1>Driver Management</h1>
            <div className="add-order-btn">
              <Button onClick={() => setCreateDriver(true)}>
                <IoIosAdd size={25} />
                Add New Driver
              </Button>
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
                    <div className="btn-holder driver-filter-btn">
                      <button className="success">Delivered</button>
                      <button className="pending">Pending</button>
                      <button className="busy">Busy</button>
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
            <Table columns={columns} rowsData={rowsData} rowsPerPage={4} />
          </div>
        </>
      ) : (
        <NoData
          heading="No Driver Activity Found"
          text={
            <>
              There are no driver records available. Assign a driver to start <br /> tracking their
              activity.
            </>
          }
          btnText="Add New Driver"
        />
      )}
    </>
  );
};

export default Drivers;
