import React, { useEffect, useRef } from "react";
import { AlertBox, CottonFive, CottonSentense } from "./styles";
import cotton from "../../../assets/cotton.png";

/*
문의 사항

fade-in, fade-out 속도조절
*/

const CottonAlarm = ({ isOpen, setAlarmOpen }) => {
  const alarmRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (alarmRef.current && !alarmRef.current.contains(e.target)) {
        setAlarmOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [alarmRef]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlarmOpen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   if (!isOpen) {
  //     const delayTimer = setTimeout(() => {
  //       setAlarmOpen(false);
  //     }, 500);
  //     return () => clearTimeout(delayTimer);
  //   }
  // }, [isOpen]);

  if (!isOpen) {
    return <></>;
  }

  return (
    <AlertBox ref={alarmRef} isopen={isOpen ? "open" : "close"}>
      <CottonFive>
        <img src={cotton} alt="cotton" />
        <p>&nbsp;X 5</p>
      </CottonFive>
      <CottonSentense>오늘의 출석! 솜뭉치 5개 적립!</CottonSentense>
    </AlertBox>
  );
};

export default CottonAlarm;
