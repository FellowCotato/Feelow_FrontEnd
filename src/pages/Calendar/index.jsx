import React from "react";
import { ArrowFront, CalendarInnerWrapper, CalendarWrapper, StyleCalendar } from "./styles";
import Header from "../../layouts/Header";
import ButtonBox from "../../layouts/ButtonBox";
import { ReactComponent as ArrowBack } from "../../assets/arrow_back.svg";
import TileContent from "./TileContent";

const Calendar = () => {
  return (
    <CalendarWrapper>
      <Header />
      <ButtonBox cottonCount={3} page="calendar" />
      <CalendarInnerWrapper>
        <StyleCalendar
          calendarType="gregory"
          locale="ko"
          minDetail="month"
          maxDetail="month"
          prev2Label={null}
          prevLabel={<ArrowBack />}
          nextLabel={<ArrowFront />}
          next2Label={null}
          navigationLabel={({ date }) => (
            <>
              {date.getMonth() + 1}월 {date.getFullYear()}
            </>
          )}
          tileContent={({ activeStartDate, date }) => (
            <TileContent activeStartDate={activeStartDate} date={date} />
          )}
        />
      </CalendarInnerWrapper>
    </CalendarWrapper>
  );
};

export default Calendar;
