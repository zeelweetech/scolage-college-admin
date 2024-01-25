import styled from "styled-components";
import Layout from "./Layout";
import ProfileAvatar from "../assets/profile.png";

const Wrapper = styled.div`
   display: flex;

   .left-main {
      width: calc(100% - 500px);
      padding-right: 20px;
      .left-in {
         border: 1px solid #707070;
         border-radius: 20px;
         padding: 86px 0 172px;

         .details-bar {
            background: #60269e;
            padding: 30px 76px 36px 54px;
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
                     color: #7a86a1;
                     font-size: 18px;
                     font-weight: 400;
                     line-height: normal;
                     padding: 8px;
                     border-radius: 16px;
                     background: #fff;
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
               gap: 14px 78px;
            }
         }
      }
   }

   .right-main {
      width: 500px;
      border: 1px solid #707070;
      border-radius: 20px;
      padding: 86px 0 172px;

      .application-status {
         height: 230px;
         background: #12bff5;
         display: flex;
         align-items: center;
         justify-content: center;
         margin-bottom: 44px;
         p {
            color: #fff;
            font-size: 32px;
            font-weight: 400;
            line-height: normal;
         }
      }

      .application-feedback-block {
         padding: 0 54px;
         .title {
            padding-bottom: 54px;
            h4 {
               text-align: center;
               color: #000;
               font-size: 18px;
               font-weight: 400;
               line-height: normal;
            }
         }
         .textarea {
            padding-bottom: 54px;
            textarea {
               height: 135px;
               border-radius: 14px;
               border: 1px solid #707070;
               width: 100%;
               outline: none;
               resize: none;
               padding: 10px;
            }
         }
         .save-cta {
            display: flex;
            align-items: center;
            justify-content: center;
            button {
               width: 190px;
               padding: 16px;
               text-align: center;
               background: #60269e;
               color: #fff;
               font-size: 17px;
               font-weight: 400;
               line-height: normal;
               border-radius: 14px;
            }
         }
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
      max-width: 156px;
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
      max-width: calc(100% - 156px);
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
const ReactedApplication = () => {
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
   return (
      <Layout headerTitle={"Application Form"}>
         <Wrapper>
            <div className="left-main">
               <div className="left-in">
                  <div className="details-bar">
                     <div className="student-profile-pic">
                        <img src={ProfileAvatar} alt="" />
                     </div>

                     <div className="student-info">
                        <div className="student-name">
                           <h4>Raja Ramachandra</h4>
                           <p>Begumpet, Vijaya colony, Opp Vijay Parlor, Secunderabad</p>
                        </div>

                        <div className="student-info-ctas">
                           <button>Download</button>
                        </div>
                     </div>
                  </div>

                  <div className="student-details">
                     <div className="header">
                        <h3>Student Details</h3>
                     </div>
                     <div className="info">
                        {data.map((item, index) => (
                           <DetailItem key={index} title={item.title} details={item.details} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
            <div className="right-main">
               <div className="application-status">
                  <p>Accepted </p>
               </div>

               <div className="application-feedback-block">
                  <div className="title">
                     <h4>Feedback</h4>
                  </div>
                  <div className="textarea">
                     <textarea></textarea>
                  </div>

                  <div className="save-cta">
                     <button>Save Changes</button>
                  </div>
               </div>
            </div>
         </Wrapper>
      </Layout>
   );
};

export default ReactedApplication;
