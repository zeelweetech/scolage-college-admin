import { styled } from "styled-components";
import { MdModeEdit } from "react-icons/md";

const Wrapper = styled.div`
  border: 1px solid #707070;
  padding: 26px 44px;
  border-radius: 20px;
  width: 100%;
  max-width: 504px;

  .header-main {
    padding-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      color: #000;
      font-size: 14px;
      font-weight: 700;
      line-height: normal;
    }
    button {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
  }

  .table-main {
    .tableHeader {
      border-bottom: 1px solid #60269e;
      padding-bottom: 8px;
      display: flex;
      align-items: center;

      .tableData {
        width: 26%;
        text-align: left;

        &:first-child {
          width: 20%;
          p {
            text-align: left;
          }
        }

        p {
          color: #7a86a1;
          font-size: 14px;
          text-align: center;
          font-weight: 400;
          line-height: normal;
        }
      }
    }

    .tableRow {
      padding: 12px 0;
      display: flex;
      align-items: center;
      .tableData {
        width: 26%;

        &:first-child {
          width: 20%;

          p {
            text-align: left;
          }
        }

        p {
          color: #7a86a1;
          font-family: Segoe UI;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          line-height: normal;
        }

        &:last-child {
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            background: #60269e;
            padding: 3px 12px;
            color: #fff;
            border-radius: 10px;
            border: 1px solid #707070;
          }
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 100%;
  }

  @media (min-width: 1025px) and (max-width: 1880px) {
    max-width: calc(50% - 5px);
    padding: 16px 24px;
  }
`;

const OccupancyBlock = ({ countData }) => {
  return (
    <Wrapper>
      <div className="header-main">
        <h4>Subject occupancy data</h4>
        {/* <button>
               <MdModeEdit />
            </button> */}
      </div>

      <div className="table-main">
        <div className="tableHeader">
          <div className="tableData">
            <p>Courses</p>
          </div>
          <div className="tableData">
            <p>Total Seats</p>
          </div>
          <div className="tableData">
            <p>Occupied Seats</p>
          </div>
          <div className="tableData">
            <p>Available Seats %</p>
          </div>
        </div>
        {countData?.subjectOccupancies?.map((item) => {
          return (
            <>
              <div className="tableRow">
                <div className="tableData">
                  <p>{item?.subjectName}</p>
                </div>
                <div className="tableData">
                  <p>{item?.totalSeats}</p>
                </div>
                <div className="tableData">
                  <p>{item?.occupiedSeats}</p>
                </div>
                <div className="tableData">
                  <p>{item?.unoccupiedSeatsPercentage}%</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default OccupancyBlock;
