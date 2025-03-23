import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Link from 'next/link';
import LoginTemplate from '@/components/LoginTemplate';
import CheckBox from '@/components/Checkbox';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function formSubmit(e) {
    console.log(e);
  }

  return (
    <LoginTemplate>
      <form onSubmit={handleSubmit(formSubmit)}>
        <span className="h1">
          Welcome Back, <span>Sign In</span>
        </span>
        <Input
          type="text"
          label="Email Address"
          placeholder="Enter email address"
          {...register('email', {
            required: 'Please enter your first name',
          })}
          error={errors.email?.message}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter password"
          {...register('password', {
            required: 'Please enter password',
          })}
          error={errors.password?.message}
        />
        <div className="remember-holder">
          <CheckBox
            label="Remember Me"
            fieldName="agree"
            value={isChecked}
            onChange={(e) => setIsChecked(e.isChecked)}
          />
          <Link href="/forgot-password">Forgot Password</Link>
        </div>
        <div className="btn-holder">
          <Button width="200px" onClick={() => router.push('/')}>
            Login
          </Button>
        </div>
      </form>
      <span className="text">
        Don’t have an account? <Link href="/sign-up">Sign up</Link>
      </span>
    </LoginTemplate>
  );
};

export default Login;
