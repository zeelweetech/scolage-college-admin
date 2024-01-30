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
  //   console.log("count", count);
  //   const AcceptedDate = count?.acceptedDates;

  //   const dateTemplate = (date) => {
  //     if (date.day > 10 && date.day < 15) {
  //       return (
  //         <strong style={{ textDecoration: "line-through" }}>{date.day}</strong>
  //       );
  //     }

  //     return date.day;
  //   };

  //   const DataTemplate = async (item) => {
  //    const currDate = new Date(item)
  //    console.log("currDate" , currDate);
  //    const dataStr = currDate.toISOString()
  //     console.log("date", item);
  //    //  const dataStr = item?.toISOString()?.split("T")[0];
  //     const haslndicator = AcceptedDate?.includes(dataStr);

  //     return (
  //       <div>{haslndicator && <IndicatorDot>{item.getDate()}</IndicatorDot>}</div>
  //     );
  //   };
  return (
    <CalendarStyles
      value={date}
      onChange={(e) => setDate(e.value)}
      inline
      // dateTemplate={dateTemplate}
      dateTemplate={(date) => {
        return <DateTemplateStyles>{date.day}</DateTemplateStyles>;
      }}
    />
  );
};

export default CalendarBlock;
