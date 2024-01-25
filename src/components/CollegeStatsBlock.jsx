import { styled } from "styled-components";
import CollegesBlock from "./CollegesBlock";

const Wrapper = styled.div`
  border: 1px solid #707070;
  max-width: 462px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  .stats-header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;
    border-bottom: 1px solid #60269e;

    .stats-head-item {
      padding: 1px 16px;
      border-right: 1px solid #60269e;
      h4 {
        color: #000;
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
        padding-bottom: 13px;
      }
      p {
        color: #7a86a1;
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
      }

      &:last-child {
        border-right: none;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 100%;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    max-width: 100%;
  }
  @media (min-width: 1025px) and (max-width: 1880px) {
    max-width: calc(50% - 5px);
  }
`;

const CollegeStatsBlock = ({ countData }) => {
  return (
    <Wrapper>
      <div className="stats-header-main">
        <div className="stats-head-item">
          <h4>Total Admissions</h4>
          <p>{countData?.admissionCounts?.totalAdmissions}</p>
        </div>
        <div className="stats-head-item">
          <h4>applied</h4>
          <p>{countData?.admissionCounts?.acceptedAdmissions}</p>
        </div>
        <div className="stats-head-item">
          <h4>Rejected</h4>
          <p>{countData?.admissionCounts?.rejectedAdmissions}</p>
        </div>
        <div className="stats-head-item">
          <h4>Pending</h4>
          <p>{countData?.admissionCounts?.pendingAdmissions}</p>
        </div>
      </div>
      <div className="stats-graph-main">
        <CollegesBlock countData={countData}/>
      </div>
    </Wrapper>
  );
};

export default CollegeStatsBlock;
