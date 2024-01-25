import React, { useCallback, useState } from "react";
import {
  ArrowFront,
  CalendarInnerWrapper,
  CalendarWrapper,
  CalendarBox,
  StyledCalendar,
} from "./styles";
import Header from "../../layouts/Header";
import ButtonBox from "../../layouts/ButtonBox";
import { ReactComponent as ArrowBack } from "../../assets/arrow_back.svg";
import TileContent from "./TileContent";
import CalendarModal from "./CalendarModal";

/*
오늘 날짜 숫자 의도적으로 내린거임?
호버 효과 줄지
*/

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState(null);

  const onClickTile = useCallback((date) => {
    setModalOpen(true);
    setModalDate(date);
  }, []);

  return (
    <CalendarWrapper>
      <Header />
      <ButtonBox cottonCount={3} page="calendar" />
      <CalendarInnerWrapper>
        <CalendarBox>
          <StyledCalendar
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
              <TileContent
                activeStartDate={activeStartDate}
                date={date}
                onClickTile={onClickTile}
              />
            )}
          />
          <CalendarModal modalOpen={modalOpen} setModalOpen={setModalOpen} date={modalDate} />
        </CalendarBox>
      </CalendarInnerWrapper>
    </CalendarWrapper>
  );
};

export default Calendar;
