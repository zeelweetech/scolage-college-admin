import { styled } from "styled-components";
import Layout from "./components/Layout";
import ApplicantsTable from "./components/ApplicantsTable";
import { MdMoreHoriz } from "react-icons/md";
import AdmissionDonut from "./components/AdmissionDonut";
import TabCalendar from "./components/TabCalendar";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Wrapper = styled.div`
  display: flex;
  gap: 24px;

  .applicants-left-main {
    border: 1px solid #707070;
    border-radius: 20px;
    padding: 34px 34px 34px 40px;
    width: calc(100% - 462px);

    .title {
      padding-bottom: 14px;
      h2 {
        color: #60269e;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        line-height: normal;
      }
    }
  }
  .applicants-right-main {
    border: 1px solid #707070;
    border-radius: 20px;
    padding: 26px;
    width: 100%;
    max-width: 438px;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 50px;
    }

    .chart-main {
      height: 130px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .total-admissions {
      padding-top: 20px;
      h3 {
        color: #000;
        font-size: 24px;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        padding-bottom: 4px;
      }
      p {
        color: #7a86a1;
        font-size: 15px;
        font-weight: 400;
        line-height: normal;
        text-align: center;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column-reverse;

    .applicants-left-main {
      width: 100%;
    }
    .applicants-right-main {
      max-width: 100%;
      width: 100%;
    }
  }
`;

const Applicants = () => {
  const [count, setCount] = useState();
  const [data, setData] = useState();
  const CollegeId = localStorage.getItem("collegeProfileId");
  const CountData = async () => {
    try {
      const { data } = await axios.get(`/v2/get/admission/status/${CollegeId}`);
      setCount(data);
      setData([
        { name: "Accepted", y: count?.acceptedCount, color: "#60269e" },
        { name: "Panding", y: count?.pendingCount, color: "#F89B44" },
        { name: "Rejected", y: count?.rejectedCount, color: "#cf92d1" },
        //  { name: "Withdraw", y: 20, color: "#707070" },
      ]);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    CountData();
  }, [count === undefined ? count : ""]);

  return (
    <Layout headerTitle={"Admissions"}>
      <Wrapper>
        <div className="applicants-left-main">
          <div className="title">
            <h2>student list</h2>
          </div>
          <ApplicantsTable />
        </div>
        <div className="applicants-right-main">
          <div className="header">
            <div className="title">History</div>
            <button>
              <MdMoreHoriz />
            </button>
          </div>

          <div className="chart-main">
            <AdmissionDonut data={data} />
          </div>
          <div className="total-admissions">
            <h3>{count?.totalApplied}</h3>
            <p>Total Applied</p>
          </div>

          <div className="calendar-main">
            <TabCalendar count={count} />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Applicants;
