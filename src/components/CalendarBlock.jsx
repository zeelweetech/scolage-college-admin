import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import styled from "styled-components";

const CalendarStyles = styled(Calendar)`
  /* .p-datepicker-header {
      .p-datepicker-title {
         order: -1;
         margin: 0;
      }
   } */

  min-width: 100%;
  .p-datepicker {
    border: none;
    padding: 0;
  }

  .p-datepicker-calendar {
    tbody {
      tr {
        td {
          height: 45px;
          width: 45px;
          padding: 0;
          span {
            height: 45px;
            width: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          &.p-datepicker-today {
            span {
              background: #60269e;
              border-radius: 20px;
              p {
                color: #fff;
              }
            }
          }

          .p-highlight {
            box-shadow: 1.3890000581741333px 7.877999782562256px 29px
              rgba(105, 95, 151, 0.14);
            background: #fff;
            border-radius: 20px;
          }
        }
      }
    }
  }

  .p-datepicker-today {
  }
`;

const DateTemplateStyles = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const IndicatorDot = styled.p`
  width: 8px;
  height: 8px;
  backgroun-color: red;
  border-radius: 50%;
  margin: 0 auto;
`;

const CalendarBlock = ({ count }) => {
  const [date, setDate] = useState("");

  const AcceptedDate = count?.acceptedDates?.map((item) => {
    return item;
  });
  const PandingDate = count?.pendingDates?.map((item) => {
    return item;
  });
  const RejectedDate = count?.rejectedDates?.map((item) => {
    return item;
  });

  const dateTemplate = (date) => {
    const formattedDate = `${
      date.month < 9 ? "0" + (date.month + 1) : date.month + 1
    }/${date.day}/${date.year}`;
    const isAccepted = AcceptedDate?.includes(formattedDate);
    const isPanging = PandingDate?.includes(formattedDate);
    const isRejected = RejectedDate?.includes(formattedDate);

    const dotStyle = {
      width: "4px",
      height: "4px",
      backgroundColor: isAccepted
        ? "#60269e"
        : isPanging
        ? "#F89B44"
        : isRejected
        ? "#cf92d1"
        : "",
      borderRadius: "50%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "2px",
    };

    if (isAccepted) {
      return (
        <strong>
          {date.day} <span style={dotStyle}></span>
        </strong>
      );
    } else if (isPanging) {
      return (
        <strong>
          {date.day} <span style={dotStyle}></span>
        </strong>
      );
    } else if (isRejected) {
      return (
        <strong>
          {date.day} <span style={dotStyle}></span>
        </strong>
      );
    }

    return date.day;
  };

  return (
    <CalendarStyles
      value={date}
      onChange={(e) => setDate(e.value)}
      inline
      dateTemplate={dateTemplate}
    />
  );
};

export default CalendarBlock;
