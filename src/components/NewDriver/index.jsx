import React from 'react';
import Input from '../Input';
import { StyledNewDriver } from './NewDriver.styles';
import { useForm } from 'react-hook-form';
import Select from '../Select';
import Button from '../Button';
import UploadImg from '../UploadFile';
import UploadFile from '../UploadFile';

const NewDriver = ({ setCreateDriver }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      status: 'Available',
    },
  });

  function formSubmit(data) {
    console.log(data);
  }

  const truckOptions = [
    { value: 'Truck A', label: 'Truck A' },
    { value: 'Truck B', label: 'Truck B' },
  ];

  const statusOptions = [
    { value: 'Available', label: 'Available' },
    { value: 'Unavailable', label: 'Unavailable' },
  ];

  return (
    <StyledNewDriver onSubmit={handleSubmit(formSubmit)}>
      <span className="heading">New Driver Information </span>
      <span className="text">Add new driver</span>

      <Input
        type="text"
        label="Full Name"
        placeholder="Enter full name"
        {...register('work_id')}
        bgGray
        noRounded
      />

      <Input
        type="text"
        label="Customer Name"
        placeholder="Enter customer name"
        {...register('full_name', {
          required: 'Please enter customer name',
        })}
        error={errors.full_name?.message}
        bgGray
        noRounded
      />

      <Input
        type="number"
        label="Driver License Number"
        placeholder="Enter license number"
        {...register('license_number', {
          required: 'Please enter license number',
        })}
        error={errors.license_number?.message}
        bgGray
        noRounded
      />

      <Input
        type="email"
        label="Email Address"
        placeholder="Enter email address"
        {...register('email', {
          required: 'Please enter email address',
        })}
        error={errors.email?.message}
        bgGray
        noRounded
      />

      <Input
        type="text"
        label="User Name"
        placeholder="Enter driver name"
        {...register('driver_name', {
          required: 'Please enter driver name',
        })}
        error={errors.driver_name?.message}
        bgGray
        noRounded
      />

      <Input
        type="phone"
        label="Phone Number"
        placeholder="Enter phone number"
        {...register('phone', {
          required: 'Please enter phone number',
        })}
        error={errors.phone?.message}
        bgGray
        noRounded
      />

      <Input
        type="text"
        label="Address"
        placeholder="Enter address"
        {...register('address', {
          required: 'Please enter address',
        })}
        error={errors.address?.message}
        bgGray
        noRounded
      />

      <span className="heading border">Assign Driver to a Job Immediately</span>

      <Select
        label="Assign Truck"
        options={truckOptions}
        onChange={(option) => setValue('assign_truck', option.value)}
        error={errors.status?.message}
      />

      <Select
        label="Work Availability Status"
        options={statusOptions}
        onChange={(option) => setValue('status', option.value)}
        defaultValue={statusOptions[0]}
        value={statusOptions[0]}
        error={errors.status?.message}
      />

      <UploadFile title="Driver profile Picture" onChange={(e) => console.log(e.target)} />

      <div className="btn-holder">
        <Button variant="white" type="button" onClick={() => setCreateDriver(false)}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </StyledNewDriver>
  );
};

export default NewDriver;
