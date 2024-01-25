import { styled } from "styled-components";
import Layout from "./components/Layout";
import TaskItem from "./components/TaskItem";

const Wrapper = styled.div`
   .query-lists-block-main {
      display: flex;

      .pending-block-main {
         width: 50%;
         border-right: 1px solid #707070;
         padding-right: 70px;

         .pending-block-in {
            width: 100%;
            height: 100%;
            border: 1px solid #707070;
            border-radius: 20px;
            padding: 40px;

            .title {
               margin-bottom: 24px;
               background: #f3770b;
               padding: 10px 34px;
               width: fit-content;
               border-radius: 16px;
               color: #fff;
               font-size: 14px;
               font-weight: 400;
               line-height: normal;
            }
         }
      }
      .completed-block-main {
         width: 50%;
         padding-left: 60px;

         .completed-block-in {
            border: 1px solid #707070;
            border-radius: 20px;
            height: 100%;
            width: 100%;
            padding: 40px;

            .title {
               margin-bottom: 24px;
               background: #2dc127;
               padding: 10px 34px;
               width: fit-content;
               border-radius: 16px;
               color: #fff;
               font-size: 14px;
               font-weight: 400;
               line-height: normal;
            }
         }
      }
   }
`;

const QueryBlock = () => {
   const PendingList = [
      {
         id: "p1",
         name: "Jane Cooper",
      },
   ];

   return (
      <Layout headerTitle={"Query"}>
         <Wrapper>
            <div className="query-lists-block-main">
               <div className="pending-block-main">
                  <div className="pending-block-in">
                     <div className="title">Pending</div>

                     <div>
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                     </div>
                  </div>
               </div>
               <div className="completed-block-main">
                  <div className="completed-block-in">
                     <div className="title">Completed</div>
                  </div>
               </div>
            </div>
         </Wrapper>
      </Layout>
   );
};

export default QueryBlock;
