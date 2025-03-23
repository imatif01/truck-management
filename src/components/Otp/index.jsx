import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
// import { useTranslation } from "react-i18next";

// import { useDispatch } from "react-redux";
import { OtpInputWrapper } from "./Otp.styles";
// import { sendOTP } from "../../store/reducers/authSlice";

const OtpInput = ({
  numInputs = 4,
  inputWidth,
  width,
  inputBg,
  noTimer = true,
  email,
  setOtpValue = () => {},
}) => {
  // const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(30);
  const [otp, setOtp] = useState(new Array(numInputs).fill(""));
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  // const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleChange = (index, value) => {
    if (otp[index] !== "" && index + 1 === numInputs) {
      return;
    }

    if (otp[index] !== "") {
      if (refs[index + 1]?.current) {
        refs[index + 1].current.focus();
      }

      const newOtp = [...otp];
      const [, second] = value.split("");
      newOtp[index + 1] = second;

      setOtp(newOtp);
      setOtpValue(newOtp);
      return;
    }

    if (parseInt(value, 10) <= 9) {
      const newOtp = [...otp];
      newOtp[index] = value;

      setOtp(newOtp);
      setOtpValue(newOtp);
    }

    if (refs[index + 1]?.current) {
      refs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // Prevent the default behavior to avoid unintended navigation

      // Clear the current input
      setOtp((prev) => {
        const newOtp = [...prev];
        newOtp[index] = ""; // Clear the current index

        return newOtp;
      });

      // Move focus to the previous input if available
      if (refs[index - 1]?.current) {
        refs[index - 1].current.focus();
      }
    }
  };
  const handleSubmit = async () => {
    // const res = await dispatch(sendOTP(email));
    // if (res?.payload?.success) {
    setTimeLeft(30);
    // }
  };
  return (
    <OtpInputWrapper
      $width={width}
      $inputWidth={inputWidth}
      $inputBg={inputBg}
      $disable={timeLeft > 0}>
      <div className="otp-fields">
        {otp.map((value, index) => (
          <input
            placeholder="-"
            key={index}
            type="number"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={refs[index]}
          />
        ))}
      </div>
      {noTimer ? (
        ""
      ) : (
        <div className="timer">
          <span className="resend-code" onClick={handleSubmit}>
            Resend OTP
          </span>
          <span> {formatTime(timeLeft)} </span>
        </div>
      )}
    </OtpInputWrapper>
  );
};

export default OtpInput;
