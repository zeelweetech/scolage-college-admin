import axios from "axios";
import { styled } from "styled-components";
import Layout from "./Layout";
import ProfileAvatar from "../assets/profile.png";
import RejectionModal from "./RejectionModal";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  border: 1px solid #707070;
  border-radius: 20px;
  padding: 86px 0 172px;

  .details-bar {
    background: #60269e;
    padding: 30px 94px 36px 54px;
    display: flex;
    align-items: center;

    .student-profile-pic {
      width: 164px;
      height: 164px;
      border-radius: 100%;
      background: #60269e;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .student-info {
      width: calc(100% - 164px);
      padding-left: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .student-name {
        h4 {
          color: #fff;
          font-size: 40px;
          font-weight: 700;
          line-height: normal;
          padding-bottom: 4px;
        }
        p {
          color: #fff;
          font-size: 20px;
          font-weight: 400;
          line-height: normal;
          max-width: 280px;
        }
      }

      .student-info-ctas {
        display: flex;
        flex-direction: column;
        gap: 38px;
        button {
          width: 148px;
          text-align: center;
          color: #fff;
          font-size: 23px;
          font-weight: 400;
          line-height: normal;
          text-transform: uppercase;
          padding: 8px;
          border-radius: 16px;

          &.accept {
            background: #12bff5;
          }

          &.reject {
            background: #ff6c3e;
          }
        }
      }
    }
  }

  .student-details {
    padding: 0 94px 0 54px;
    .header {
      padding: 36px 0;
      h3 {
        color: #60269e;
        font-size: 30px;
        font-weight: 700;
        line-height: normal;
      }
    }

    .info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px 120px;
    }
  }
`;

const DetailItemStyles = styled.div`
  display: flex;
  align-items: center;
  .title {
    color: #000;
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    max-width: 223px;
    padding-right: 10px;
  }

  .details {
    color: #7a86a1;
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    border-radius: 16px;
    border: 1px solid #707070;
    padding: 20px 30px 15px;
    width: 100%;
    max-width: calc(100% - 223px);
  }
`;

const DetailItem = ({ title, details }) => {
  return (
    <DetailItemStyles>
      <p className="title">{title}</p>
      <p className="details">{details}</p>
    </DetailItemStyles>
  );
};

const StudentApplication = () => {
  const [record, setRecord] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const data = [
    {
      title: "Full Name",
      details: "Raja Ramachandra",
    },
    {
      title: "Father Name",
      details: "Hidden",
    },
    {
      title: "Mother Name",
      details: "Hidden",
    },
    {
      title: "Mother Tongue",
      details: "Hidden",
    },
    {
      title: "Date Of Birth",
      details: "29-06-1990",
    },
    {
      title: "Gender",
      details: "Male",
    },
    {
      title: "School Studied",
      details: "Hidden",
    },
    {
      title: "Place",
      details: "Hidden",
    },
    {
      title: "Community",
      details: "Hidden",
    },
    {
      title: "Religion",
      details: "Hidden",
    },
    {
      title: "District",
      details: "Hyderabad",
    },
    {
      title: "Mandal",
      details: "Marredpally",
    },
    {
      title: "Stream",
      details: "Maths",
    },
    {
      title: "Group/Course",
      details: "MPC",
    },
    {
      title: "2nd Language",
      details: "Telugu",
    },
    {
      title: "Medium",
      details: "English",
    },
    {
      title: "Email",
      details: "Hidden",
    },
    {
      title: "Phone",
      details: "Hidden",
    },
    {
      title: "Reservation",
      details: "Sports",
    },
    {
      title: "Alt Phone",
      details: "Hidden",
    },
  ];

  const { id } = useParams();
  console.log("id", id);

  const getStudentDetails = async () => {
    try {
      const { data } = await axios.get(`/v2/singlestudentlist/get/${id}`);
      setRecord(data[0]);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    getStudentDetails();
  }, []);

  const getCourse = () => {
    const group = record?.student_detail?.[0]?.groupe_applied;
    const courses = [];
    record?.course.map((course) => {
      courses.push(course.subjectname);
    });
    return group + " / " + courses.join(", ");
  };

  return (
    <>
      <Layout headerTitle={"Application Form"}>
        <Wrapper>
          <div className="details-bar">
            <div className="student-profile-pic">
              <img src={ProfileAvatar} alt="" />
            </div>

            <div className="student-info">
              <div className="student-name">
                <h4>
                  {record?.student_detail?.[0]?.name}{" "}
                  {record?.student_detail?.[0]?.surname}
                </h4>
                <p>
                  {record?.student_detail?.[0]?.city} ,{" "}
                  {record?.student_detail?.[0]?.district} ,{" "}
                  {record?.student_detail?.[0]?.state}
                </p>
              </div>
              {record?.status === "pending" ? (
                <div className="student-info-ctas">
                  <button
                    className="accept"
                    onClick={() => {
                      setShowModal(true);
                      setIsAccepted(true);
                    }}
                  >
                    Accept
                  </button>
                  <button
                    className="reject"
                    onClick={() => {
                      setShowModal(true);
                      setIsAccepted(false);
                    }}
                  >
                    Reject
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="student-details">
            <div className="header">
              <h3>Student Details</h3>
            </div>
            <div className="info">
              <DetailItem
                title={"Full name"}
                details={record?.studentname?.[0]?.name}
              />
              <DetailItem
                title={"Father name"}
                details={
                  record?.status == "accepted"
                    ? record?.parent_detail?.[0]?.name_of_father
                    : "Hidden"
                }
              />
              <DetailItem title={"Mother name"} details={"Hidden"} />
              <DetailItem
                title={"Mother Tongue"}
                details={record?.student_detail?.[0]?.mother_tongue}
              />
              <DetailItem
                title={"Date of Birth"}
                details={record?.student_detail?.[0]?.dob}
              />
              <DetailItem
                title={"Gender"}
                details={record?.student_detail?.[0]?.gender}
              />
              <DetailItem
                title={"School Studied"}
                details={
                  record?.status == "accepted"
                    ? record?.student_detail?.[0]?.school_last_studied
                    : "Hidden"
                }
              />
              <DetailItem
                title={"Place"}
                details={
                  record?.status == "accepted"
                    ? record?.parent_detail?.[0]?.address_permanent
                    : "Hidden"
                }
              />
              <DetailItem
                title={"Community"}
                details={
                  record?.status == "accepted"
                    ? record?.parent_detail?.[0]?.address_permanent
                    : "Hidden"
                }
              />
              <DetailItem
                title={"Religion"}
                details={
                  record?.status == "accepted"
                    ? record?.student_detail?.[0]?.religion
                    : "Hidden"
                }
              />
              <DetailItem
                title={"District"}
                details={record?.student_detail?.[0]?.district}
              />
              <DetailItem title={"Mandal"} details={"Not found"} />
              <DetailItem title={"Stream"} details={"Not found"} />
              <DetailItem title={"Group/ Course"} details={getCourse()} />
              <DetailItem
                title={"2nd Language"}
                details={record?.student_detail?.[0]?.second_language}
              />
              <DetailItem title={"Medium"} details={"Not found"} />
              <DetailItem
                title={"Email"}
                details={
                  record?.status == "accepted"
                    ? record?.studentname?.[0]?.email
                    : "Hidden"
                }
              />
              <DetailItem
                title={"Phone"}
                details={
                  record?.status == "accepted"
                    ? record?.parent_detail?.[0]?.phone
                    : "Hidden"
                }
              />
              <DetailItem
                title={"Reservation"}
                details={record?.student_detail?.[0]?.reservation}
              />
              <DetailItem title={"Alt phone"} details={"hidden"} />
            </div>
          </div>
        </Wrapper>
      </Layout>

      {showModal && (
        <RejectionModal
          setShowModal={setShowModal}
          isAccepted={isAccepted}
          id={id}
          record={record}
        />
      )}
    </>
  );
};

export default StudentApplication;
