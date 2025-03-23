import React from 'react';
import Input from '../Input';
import { useForm } from 'react-hook-form';
import Select from '../Select';
import Button from '../Button';
import UploadImg from '../UploadFile';
import UploadFile from '../UploadFile';
import { StyledNewOrder } from './NewOrder.styles';

const NewOrder = ({ setCreateOrder }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      status: 'Pending',
    },
  });

  function formSubmit(data) {
    console.log(data);
  }

  const statusOptions = [
    { value: 'Pending', label: 'Pending' },
    { value: 'In Transit', label: 'In Transit' },
    { value: 'Delivered', label: 'Delivered' },
    { value: 'Canceled', label: 'Canceled' },
  ];

  return (
    <StyledNewOrder onSubmit={handleSubmit(formSubmit)}>
      <span className="heading">New project</span>
      <span className="text">Create new Order</span>

      <Input
        type="text"
        label="Work Order ID"
        value={'#293892123'}
        {...register('work_id')}
        disabled
        bgGray
        noRounded
      />

      <Input
        type="text"
        label="Customer Name"
        placeholder="Enter customer name"
        {...register('customer_name', {
          required: 'Please enter customer name',
        })}
        error={errors.customer_name?.message}
        bgGray
        noRounded
      />

      <Input
        type="text"
        label="Container Number"
        placeholder="Enter container number"
        {...register('container_number', {
          required: 'Please enter container number',
        })}
        error={errors.container_number?.message}
        bgGray
        noRounded
      />

      <Input
        type="text"
        label="Pickup Location"
        placeholder="Please select Pickup Location"
        {...register('pickup_location', {
          required: 'Please enter pickup location',
        })}
        error={errors.pickup_location?.message}
        bgGray
        noRounded
      />

      <Input
        type="text"
        label="Delivery Location"
        placeholder="Please select Delivery Location"
        {...register('delivery_location', {
          required: 'Please enter delivery location',
        })}
        error={errors.delivery_location?.message}
        bgGray
        noRounded
      />

      <Input
        type="datetime-local"
        label="Pickup Date & Time"
        {...register('pickup_time', {
          required: 'Please select pickup time',
        })}
        error={errors.pickup_time?.message}
        bgGray
        noRounded
      />

      <Input
        type="datetime-local"
        label="Delivery Date & Time"
        {...register('delivery_time', {
          required: 'Please select delivery time',
        })}
        error={errors.delivery_time?.message}
        bgGray
        noRounded
      />

      <Select
        label="Status"
        options={statusOptions}
        onChange={(option) => setValue('status', option.value)}
        defaultValue={statusOptions[0]}
        value={statusOptions[0]}
        error={errors.status?.message}
      />

      <Input
        type="number"
        label="Rate / Cost"
        placeholder="$ 2,50,000 - 3,00,000"
        {...register('rate', {
          required: 'Please select rate/cost time',
        })}
        error={errors.rate?.message}
        bgGray
        noRounded
      />

      <UploadFile title="Starting File" onChange={(e) => console.log(e.target)} />

      <div className="btn-holder">
        <Button variant="white" type="button" onClick={() => setCreateOrder(false)}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </StyledNewOrder>
  );
};

export default NewOrder;
