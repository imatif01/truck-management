import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledAuth } from './_app';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useState } from 'react';
import OtpInput from '@/components/Otp';
import LoginTemplate from '@/components/LoginTemplate';
import { useRouter } from 'next/router';

const Dummy = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('new_password');

  function formSubmit(e) {
    console.log(e);
    if (step === 1) {
      setStep(2);
    }
  }

  return (
    <LoginTemplate>
      <form onSubmit={handleSubmit(formSubmit)}>
        {step === 1 && (
          <>
            <span className="h1">Forgot Password!</span>
            <span className="text head-text">
              Please enter your registered email address <br /> below to initiate password reset
              request.
            </span>
            <Input
              type="email"
              label="Email Address"
              placeholder="Enter email Address"
              {...register('email', {
                required: 'Please enter your email address',
              })}
              error={errors.email?.message}
            />

            <div className="btn-holder">
              <Button width="200px">Send OTP</Button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <span className="h1">Email Verification</span>
            <span className="text head-text">
              Please enter the 4 digit code sent to your email.
            </span>
            <OtpInput />
            <div className="btn-holder">
              <Button width="200px" onClick={() => setStep(3)}>
                Verify
              </Button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <span className="h1">Reset Password!</span>
            <span className="text head-text">
              Please enter your new password to secure your account.
            </span>
            <Input
              type="password"
              label="New Password"
              placeholder="Enter new password"
              {...register('new_password', {
                required: 'Please enter new password',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long.',
                },
              })}
              error={errors.new_password?.message}
            />
            <Input
              type="password"
              label="Confirm Password"
              placeholder="Enter confirm password"
              {...register('confirm_password', {
                required: 'Please enter confirm password',
                validate: (value) => value === password || 'Password do not match',
              })}
              error={errors.confirm_password?.message}
            />
            <div className="btn-holder">
              <Button width="200px" onClick={() => router.push('/login')}>
                Reset my password
              </Button>
            </div>
          </>
        )}
      </form>
    </LoginTemplate>
  );
};

export default Dummy;
