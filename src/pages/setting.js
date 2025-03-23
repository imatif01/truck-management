import React, { useState } from 'react';
import Button from '@/components/Button';
import HeadingSection from '@/components/HeadingSection';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { StyledSettings } from '@/styles/Settings.styles';
import { useForm } from 'react-hook-form';
import DropDown from '@/components/DropDown/DropDown';
import importIcon from '@/assets/images/import-icon.svg';
import { FaSlidersH } from 'react-icons/fa';
import Image from 'next/image';

const Setting = () => {
  const [switchTab, setSwitchTab] = useState(2);
  const [dropDown, setDropDown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const statusOptions = [
    { value: 'Pending', label: 'Pending' },
    { value: 'In Transit', label: 'In Transit' },
    { value: 'Delivered', label: 'Delivered' },
  ];

  const timeZoneOptions = [
    { value: 'DMT', label: 'DMT' },
    { value: 'PST', label: 'PST' },
    { value: 'EST', label: 'EST' },
    { value: 'IST', label: 'IST' },
  ];

  return (
    <StyledSettings>
      <HeadingSection>
        <h1>Settings</h1>
      </HeadingSection>
      <div className="col">
        <div className="head">
          <span className="heading">General Settings</span>
          <span className="text">here you can change your general information</span>
        </div>
        <div className="content-holder">
          <div className="content">
            <div className="text-holder">
              <span className="title">Company Name</span>
              <span className="text">here you can change your general information</span>
            </div>
            <Input
              type="text"
              placeholder="Byteblitz international"
              {...register('company_name')}
              bgGray
              noRounded
              noMargin
            />
          </div>
          <div className="content">
            <div className="text-holder">
              <span className="title">Default Work Order Statuses</span>
              <span className="text">Select available statuses for tracking work orders.</span>
            </div>
            <Select
              label="Status"
              options={statusOptions}
              onChange={(option) => setValue('status', option.value)}
              noMargin
            />
          </div>
          <div className="content">
            <div className="text-holder">
              <span className="title">Time Zone Selection</span>
              <span className="text">Choose your time zone for accurate scheduling.</span>
            </div>
            <Select
              label="Status"
              options={timeZoneOptions}
              onChange={(option) => setValue('status', option.value)}
              noMargin
            />
          </div>
          <div className="content">
            <div className="text-holder">
              <span className="title">Notification Preferences</span>
              <span className="text">Enable or disable system notifications for users.</span>
            </div>
            <div className="switch">
              <button className={switchTab === 1 && 'active'} onClick={() => setSwitchTab(1)}>
                Off
              </button>
              <button className={switchTab === 2 && 'active'} onClick={() => setSwitchTab(2)}>
                ON
              </button>
            </div>
          </div>
          <div className="content">
            <div className="text-holder">
              <span className="title">API Keys</span>
              <span className="text">Used for secure integration with third-party services.</span>
            </div>
            <Input
              type="password"
              placeholder="*******"
              {...register('api_key')}
              bgGray
              noRounded
              noMargin
            />
          </div>
          <div className="btn-holder">
            <Button width="120px">Save</Button>
          </div>
        </div>
      </div>
      <div className="col security-col">
        <div className="head">
          <span className="heading">Security & Authentication Settings</span>
          <span className="text">here you can change your Security & Authentication</span>
        </div>
        <div className="content-holder">
          <div className="content">
            <div className="text-holder">
              <span className="title">User Role Management</span>
              <span className="text">Control access and permissions for team members.</span>
            </div>
            <div className="search-holder">
              <Input
                type="text"
                placeholder="Search by user role"
                {...register('search')}
                bgGray
                noRounded
                noMargin
              />
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
                  <ul className="roles-dropDown">
                    <li>Driver</li>
                    <li>Dispatcher</li>
                    <li>Admin</li>
                  </ul>
                </DropDown>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="text-holder">
              <span className="title">Data Export</span>
              <span className="text">Allows admins to download system data.</span>
            </div>
            <Button variant="white" width="120px">
              <Image src={importIcon} alt="importIcon" />
              Import
            </Button>
          </div>

          <div className="content">
            <div className="text-holder">
              <span className="title">Automated Work Order Assignments</span>
              <span className="text">
                AI-based system that auto-assigns drivers to work orders based on availability.
              </span>
            </div>
            <div className="switch">
              <button className={switchTab === 1 && 'active'} onClick={() => setSwitchTab(1)}>
                Off
              </button>
              <button className={switchTab === 2 && 'active'} onClick={() => setSwitchTab(2)}>
                ON
              </button>
            </div>
          </div>
          <div className="content">
            <div className="text-holder">
              <span className="title">Backup & Restore Data</span>
              <span className="text">
                Admins can create backups of system data and restore older versions if needed.
              </span>
            </div>
            <div className="btn-holder">
              <Button>back Up Now</Button>
              <Button variant="outline">Restore Last Backup</Button>
            </div>
          </div>
          <div className="btn-holder">
            <Button width="120px">Save</Button>
          </div>
        </div>
      </div>
    </StyledSettings>
  );
};

export default Setting;
