import React from "react";
import { styled } from "styled-components";
import ProfileAvatar from "../assets/profile.png";
import { BiSolidStar } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";

const Wrapper = styled.div`
   display: flex;
   padding: 25px 20px;
   border-radius: 22px;
   border: 1px solid transparent;

   &:hover {
      background: #fff4f2;
      border: 1px solid #707070;
   }

   .profile {
      width: 55px;
      height: 55px;
      border-radius: 20px;
      overflow: hidden;

      img {
         height: 100%;
         width: 100%;
         object-fit: cover;
      }
   }

   .item-details {
      width: calc(100% - 55px);
      padding-left: 50px;
      padding-right: 15px;
      position: relative;

      .task-cta {
         position: absolute;
         top: 0;
         display: flex;
         align-items: center;
         flex-direction: column;
         gap: 30px;
         right: 0;

         button {
            width: 18px;
            height: 18px;
         }

         .status {
            height: 14px;
            width: 14px;
            border: 1px solid #707070;
            border-radius: 100%;

            &.pending {
               background: #f3770b;
            }
            &.completed {
               background: #2dc127;
            }
         }
      }

      .date-name {
         padding-bottom: 6px;
         p {
            color: #7a86a1;
            font-size: 14px;
            font-weight: 400;
            line-height: normal;
         }
      }

      .task-title {
         padding-bottom: 13px;
         h3 {
            color: #000;
            font-size: 16px;
            font-weight: 400;
            line-height: normal;
         }
      }

      .task-desc {
         p {
            max-width: 280px;
            color: #7a86a1;
            font-size: 14px;
            font-weight: 400;
            line-height: normal;
         }
      }
   }
`;

const TaskItem = () => {
   return (
      <Wrapper>
         <div className="profile">
            <img src={ProfileAvatar} alt="" />
         </div>
         <div className="item-details">
            <div className="date-name">
               <p>Jane Cooper 9:35 AM</p>
            </div>
            <div className="task-title">
               <h3>Ready to start your first wireframe?</h3>
            </div>
            <div className="task-desc">
               <p>Vestibulum imperdiet nibh vel magna lacinia ultrices duis lacus. </p>
            </div>

            <div className="attachment-items"></div>

            <div className="task-cta">
               <button>
                  <BiSolidStar color="#F9B035" />
               </button>

               <div className="status pending"></div>

               <button>
                  <MdMoreHoriz />
               </button>
            </div>
         </div>
      </Wrapper>
   );
};

export default TaskItem;
