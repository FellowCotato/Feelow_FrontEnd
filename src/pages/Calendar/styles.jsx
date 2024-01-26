import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ReactComponent as ArrowBackIcon } from "../../assets/arrow_back.svg";

export const CalendarWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fffbf8;
`;

export const CalendarInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 190px);
  background: #f7f0ea;

  @media only screen and (max-width: 768px) {
    min-height: calc(100vh - 115px);
  }
`;

export const CalendarBox = styled.div`
  position: relative;
  width: 60%;
  margin: 36px 0;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: auto;
  border: 0.5px solid #e8e8e8;
  background: #fffbf8;

  @media only screen and (max-width: 768px) {
    border: 1px solid #e8e8e8;
    border-radius: 4px;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: flex-end;
    height: 60px;
    margin: 0;
    border: 0.5px solid #e8e8e8;

    @media only screen and (max-width: 768px) {
      border: none;
      border-bottom: 1px solid #e8e8e8;
    }

    .react-calendar__navigation__label {
      max-width: 140px;
      background: none;
      color: #2c2c2c;
      font-family: Pretendard;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;

      @media only screen and (max-width: 768px) {
        max-width: 80px;
        font-size: 18px;
      }
    }
  }

  .react-calendar__month-view {
    abbr {
      display: none;
    }

    @media only screen and (max-width: 768px) {
      padding: 24px 16px;
    }

    .react-calendar__month-view__weekdays__weekday {
      display: flex;
      align-items: center;
      height: 24px;
      border: 0.5px solid #e8e8e8;

      color: #969696;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;

      @media only screen and (max-width: 768px) {
        border: none;
        justify-content: center;

        font-size: 16px;
        margin: 0 0 12px;
      }
    }

    .react-calendar__month-view__weekdays__weekday:nth-child(1):before {
      color: #ff6b6b;
      content: "SUN";

      @media only screen and (max-width: 768px) {
        content: "S";
      }
    }

    .react-calendar__month-view__weekdays__weekday:nth-child(2):before {
      content: "MON";

      @media only screen and (max-width: 768px) {
        content: "M";
      }
    }

    .react-calendar__month-view__weekdays__weekday:nth-child(3):before {
      content: "TUE";

      @media only screen and (max-width: 768px) {
        content: "T";
      }
    }

    .react-calendar__month-view__weekdays__weekday:nth-child(4):before {
      content: "WED";

      @media only screen and (max-width: 768px) {
        content: "W";
      }
    }

    .react-calendar__month-view__weekdays__weekday:nth-child(5):before {
      content: "THU";

      @media only screen and (max-width: 768px) {
        content: "T";
      }
    }

    .react-calendar__month-view__weekdays__weekday:nth-child(6):before {
      content: "FRI";

      @media only screen and (max-width: 768px) {
        content: "F";
      }
    }

    .react-calendar__month-view__weekdays__weekday:nth-child(7):before {
      content: "SAT";

      @media only screen and (max-width: 768px) {
        content: "S";
      }
    }

    .react-calendar__month-view__weekdays__weekday--weekend {
      @media only screen and (min-width: 768px) {
        background: #fcf8f5;
      }
    }
  }

  .react-calendar__month-view__days {
    padding: 0;

    abbr {
      display: none;
    }

    button {
      padding: 0;
    }

    .react-calendar__tile--now {
      background: none;
    }

    .react-calendar__month-view__days__day {
      color: #969696;
    }

    .react-calendar__month-view__days__day--weekend {
      color: #ff6b6b;

      @media only screen and (min-width: 768px) {
        background: #fcf8f5;
      }
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      color: #b0b0b0;

      @media only screen and (min-width: 768px) {
        background: #faf5f0;
      }
    }

    .react-calendar__month-view__days__day--neighboringMonth.react-calendar__month-view__days__day--weekend {
      color: rgba(255, 107, 107, 0.6);
    }

    .react-calendar__tile--active {
      background: none;
    }
  }
`;

export const ArrowFront = styled(ArrowBackIcon)`
  transform: scaleX(-1);
`;
