import React from 'react';
import HeadingSection from '@/components/HeadingSection';
import { StyledUserProfile } from '@/styles/UserProfile.styles';
import userImg from '@/assets/images/user-img-lg.png';
import Image from 'next/image';
import Button from '@/components/Button';
import { BiEditAlt } from 'react-icons/bi';
import Input from '@/components/Input';
import { useForm } from 'react-hook-form';
import { TbDotsVertical } from 'react-icons/tb';

const devicesData = [
  {
    deviceName: 'iPhone 11',
    text: 'London, UK-Oct12 at 2:30AM',
  },
  {
    deviceName: 'Galaxy 18',
    text: 'Berlain, Nov23 at 2:30pM',
  },
  {
    deviceName: 'Vivo y21',
    text: 'London, UK-Oct12 at 2:30AM',
  },
];

const UserProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  function personalInfoSubmit(data) {
    console.log(data);
  }
  function passwordInfoSubmit(data) {
    console.log(data);
  }
  return (
    <StyledUserProfile>
      <HeadingSection>
        <h1>User Profile</h1>
      </HeadingSection>

      <div className="content-holder">
        <div className="user-info">
          <figure className="img-holder">
            <Image src={userImg} alt="userImg" width={250} height={250} />
          </figure>
          <span className="user-name">Tarnish Obey</span>
          <span className="role">Admin</span>
          <div className="btn-holder">
            <Button variant="white" width="120px">
              Edit
              <BiEditAlt />
            </Button>
          </div>
        </div>

        <div className="col-holder">
          <div className="col">
            <div className="head">
              <span className="heading">Personal information</span>
              <Button variant="white" width="80px">
                Edit
                <BiEditAlt />
              </Button>
            </div>
            <form onSubmit={handleSubmit(personalInfoSubmit)}>
              <div className="input-wrapper">
                <Input
                  type="text"
                  label="First Name"
                  placeholder="Tarnish"
                  {...register('first_name')}
                  noRounded
                  noMargin
                />
                <Input
                  type="text"
                  label="Last Name"
                  placeholder="Obey"
                  {...register('last_name')}
                  noRounded
                  noMargin
                />
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="tarnishobey225@gmail.com"
                  {...register('email')}
                  noRounded
                  noMargin
                />
                <Input
                  type="tel"
                  label="Phone Number"
                  placeholder="+1 (234) 000999"
                  {...register('phone')}
                  noRounded
                  noMargin
                />
                <Input
                  type="text"
                  label="Role"
                  placeholder="Admin"
                  {...register('role')}
                  noRounded
                  noMargin
                />
                <Input
                  type="text"
                  label="City"
                  placeholder="xyz, united states"
                  {...register('city')}
                  noRounded
                  noMargin
                />
              </div>
              <Button width="100px" type="submit">
                Save
              </Button>
            </form>
          </div>

          <div className="col">
            <div className="head">
              <span className="heading">password</span>
              <Button variant="white" width="80px">
                Edit
                <BiEditAlt />
              </Button>
            </div>
            <form onSubmit={handleSubmit(passwordInfoSubmit)} className="password-form">
              <div className="password-inputs">
                <div>
                  <Input
                    type="password"
                    label="Current Password"
                    value="........"
                    {...register('current_password')}
                    noRounded
                  />
                  <Input
                    type="password"
                    label="Change Password"
                    placeholder="Add your new password"
                    {...register('new_password')}
                    noRounded
                  />
                  <Input
                    type="email"
                    label="Confirm Password"
                    placeholder="confirm your new password"
                    {...register('confirm_password')}
                    noRounded
                  />
                </div>
                <Button width="150px" type="submit" className="desktop-button">
                  Save
                </Button>
              </div>
              <div className="devices">
                <div className="devices-head">
                  <span className="heading">Devices</span>
                  <span className="text">
                    The Last Pass password generator creates random passwords based on parameters
                    set by you.
                  </span>
                  <Button width="200px"> Sign out from all devices</Button>
                </div>
                {devicesData?.map((item, index) => (
                  <div className="about-device" key={index}>
                    <div>
                      <span className="device-name">{item?.deviceName}</span>
                      <span className="text">{item?.text}</span>
                    </div>
                    <TbDotsVertical />
                  </div>
                ))}
              </div>
              <Button width="150px" type="submit" className="mobile-button">
                Save
              </Button>
            </form>
          </div>
        </div>
      </div>
    </StyledUserProfile>
  );
};

export default UserProfile;
