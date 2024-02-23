import React, { useEffect, useRef, useState } from "react";
import { AlertBox, CottonFive, CottonSentense } from "./styles";
import cotton from "../../../assets/cotton.png";

const CottonAlarm = ({ isOpen, setAlarmOpen }) => {
  const [isVisible, setIsVisible] = useState(true);

  const alarmRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setAlarmOpen(false);
        setIsVisible(true);
      }, 300);
    }, 2000);
  });

  useEffect(() => {
    const handleClick = (e) => {
      setIsVisible(false);
      if (alarmRef.current && !alarmRef.current.contains(e.target)) {
        setTimeout(() => {
          setAlarmOpen(false);
          setIsVisible(true);
        }, 300);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [alarmRef]);

  if (!isOpen) {
    return <></>;
  }

  return (
    <AlertBox ref={alarmRef} visible={isVisible ? "visible" : "non-visible"}>
      <CottonFive>
        <img src={cotton} alt="cotton" />
        <p>&nbsp;X 5</p>
      </CottonFive>
      <CottonSentense>오늘의 출석! 솜뭉치 5개 적립!</CottonSentense>
    </AlertBox>
  );
};

export default CottonAlarm;
