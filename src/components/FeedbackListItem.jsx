import styled from "styled-components";
import ProfilePicture from "../assets/profile.png";
import { AiFillStar } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

const Wrapper = styled.div`
   display: flex;
   padding: 25px 20px;
   border-radius: 22px;

   &:hover {
      background: #fff4f2;
   }

   .profile-block {
      width: 55px;

      .profile {
         height: 55px;
         width: 55px;
         border-radius: 20px;
         overflow: hidden;

         img {
            height: 100%;
            width: 100%;
            object-fit: cover;
         }
      }
   }

   .feedback-info-main {
      width: 100%;
      padding: 0 20px;
      position: relative;

      .feedback-name {
         padding-bottom: 6px;
         p {
            color: #7a86a1;
            font-family: Segoe UI;
            font-size: 14px;
            font-weight: 400;
            line-height: normal;
         }
      }

      .feedback-title {
         padding-bottom: 12px;
         p {
            color: #000;
            font-family: Segoe UI;
            font-size: 16px;
            font-weight: 400;
            line-height: normal;
         }
      }

      .feedback-desc {
         max-width: 306px;
         padding-bottom: 15px;
         p {
            color: #7a86a1;
            font-family: Segoe UI;
            font-size: 14px;
            font-weight: 400;
            line-height: normal;
         }
      }

      .item-ctas {
         position: absolute;
         top: 0;
         right: 0;
         display: flex;
         flex-direction: column;
         gap: 30px;

         button {
            height: 18px;
            width: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
         }
      }
   }
`;

const FeedbackListItem = () => {
   return (
      <Wrapper>
         <div className="profile-block">
            <div className="profile">
               <img src={ProfilePicture} alt="" />
            </div>
         </div>
         <div className="feedback-info-main">
            <div className="feedback-name">
               <p>Jane Cooper 9:35 AM</p>
            </div>
            <div className="feedback-title">
               <p>Ready to start your first wireframe?</p>
            </div>
            <div className="feedback-desc">
               <p>Vestibulum imperdiet nibh vel magna lacinia ultrices duis lacus. </p>
            </div>
            <div className="item-ctas">
               <div className="item-star">
                  <button>
                     <AiFillStar color="#F9B035" />
                  </button>
               </div>
               <div className="item-options">
                  <button>
                     <FiMoreHorizontal />
                  </button>
               </div>
            </div>
         </div>
      </Wrapper>
   );
};

export default FeedbackListItem;
