import React, { useCallback, useEffect, useState } from "react";
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
import api from "../../utils/api";

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState(null);
  const [historys, setHistorys] = useState();

  useEffect(() => {
    api
      .get(
        `/api/chat/${localStorage.getItem("memberId")}/${new Date().getFullYear()}/${
          new Date().getMonth() + 1
        }`,
      )
      .then((res) => {
        console.log(res);
        setHistorys(res.data);
      });
  }, []);

  const onClickTile = useCallback((date) => {
    setModalOpen(true);
    setModalDate(date);
  }, []);

  return (
    <CalendarWrapper>
      <Header />
      <ButtonBox cottonCount={localStorage.getItem("cotton")} page="calendar" />
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
                historys={historys}
              />
            )}
          />
          <CalendarModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            date={modalDate}
            historys={historys}
          />
        </CalendarBox>
      </CalendarInnerWrapper>
    </CalendarWrapper>
  );
};

export default Calendar;
