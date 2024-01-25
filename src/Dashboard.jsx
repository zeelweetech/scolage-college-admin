import { styled } from "styled-components";
import Layout from "./components/Layout";
import CollegeStatsBlock from "./components/CollegeStatsBlock";
import RecentAdmissionBlock from "./components/RecentAdmissionBlock";
import CountBlock from "./components/CountBlock";
import RatingBlock from "./components/RatingBlock";
import OccupancyBlock from "./components/OccupancyBlock";
import RatingReviewBlock from "./components/RatingReviewBlock";
import { useEffect, useState } from "react";
import axios from "axios";

const Wrapper = styled.div`
  .dash-row-main {
    display: flex;
    gap: 45px;
    padding-bottom: 24px;

    .counter-main {
      max-width: 330px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .payment-upgrade-ctas {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 55px;

      button {
        background: #60269e;
        height: 60px;
        width: 214px;
        border-radius: 10px;
        color: #fff;
        font-size: 23px;
        font-weight: 400;
        line-height: normal;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .dash-row-main {
      flex-direction: column;

      .counter-main {
        flex-direction: row;
        gap: 10px;
        max-width: 100%;

        .visitCount-main {
          height: 100%;
        }
      }

      .payment-upgrade-ctas {
        flex-direction: row;
      }
    }
  }

  @media (min-width: 992px) and (max-width: 1024px) {
    .dash-row-main {
      flex-direction: row;
      flex-wrap: wrap;

      .payment-upgrade-ctas {
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1880px) {
    .dash-row-main {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;

      .counter-main {
        flex-direction: row;
        justify-content: start;
        gap: 30px;
        max-width: 100%;

        .visitCount-main {
          height: 100%;
        }
      }
      .payment-upgrade-ctas {
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

const Dashboard = () => {
  const [countData, setCountData] = useState();
  const CollageId = localStorage.getItem("collegeProfileId");

  const ChartData = async () => {
    try {
      const { data } = await axios.get(
        `/clgadmin/dashboard/v2/get/counts/${CollageId}`
      );
      setCountData(data);
      console.log("data", data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    ChartData();
  }, [countData === undefined ? countData : ""]);

  return (
    <Layout>
      <Wrapper>
        <div className="dash-row-main">
          <CollegeStatsBlock countData={countData} />
          <RecentAdmissionBlock countData={countData} />
          <div className="counter-main">
            <CountBlock />
            <RatingBlock countData={countData} />
          </div>
        </div>
        <div className="dash-row-main">
          <OccupancyBlock countData={countData} />
          <RatingReviewBlock countData={countData} />

          <div className="payment-upgrade-ctas">
            <button>Payment</button>
            <button>Upgrade</button>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Dashboard;
