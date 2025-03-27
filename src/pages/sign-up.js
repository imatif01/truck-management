import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import Button from '@/components/Button';
import OtpInput from '../components/Otp';
import { useState } from 'react';
import Link from 'next/link';
import LoginTemplate from '@/components/LoginTemplate';
import CheckBox from '@/components/Checkbox';
import { useRouter } from 'next/router';

const SignUp = () => {
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
      <div className="content-holder">
        <div className="content sign-up">
          <form onSubmit={handleSubmit(formSubmit)}>
            {step === 1 && (
              <>
                <span className="h1">Create Account!</span>
                <span className="text head-text">
                  Kindly provide the following details to proceed <br /> with your account creation
                  request.
                </span>
                <Input
                  type="text"
                  label="Full Name"
                  placeholder="Enter full name"
                  {...register('full_name', {
                    required: 'Please enter your full name',
                  })}
                  error={errors.full_name?.message}
                />
                <div className="input-wrap">
                  <Input
                    type="email"
                    label="Email Address"
                    placeholder="Enter email Address"
                    {...register('email', {
                      required: 'Please enter your email address',
                    })}
                    error={errors.email?.message}
                  />
                  <Input
                    type="phone"
                    label="Phone Number"
                    placeholder="Enter phone number"
                    {...register('phone', {
                      required: 'Please enter your phone number',
                    })}
                    error={errors.phone?.message}
                  />
                </div>

                <div className="input-wrap">
                  <Input
                    type="text"
                    label="Address"
                    placeholder="Enter Address"
                    {...register('address', {
                      required: 'Please enter your address',
                    })}
                    error={errors.address?.message}
                  />
                  <Input
                    type="text"
                    label="Occupation"
                    placeholder="Enter Occupation"
                    {...register('occupation', {
                      required: 'Please enter your occupation',
                    })}
                    error={errors.occupation?.message}
                  />
                </div>

                <div className="btn-holder">
                  <Button width="200px">Continue</Button>
                </div>
                <span className="text">
                  Already have an account? <Link href="/login">Sign in</Link>
                </span>
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
                <span className="h1">Create account password</span>
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
                    Submit
                  </Button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </LoginTemplate>
  );
};

export default SignUp;
