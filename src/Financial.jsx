import { styled } from "styled-components";
import Layout from "./components/Layout";
import PaymentHistoryTable from "./components/PaymentHistoryTable";
import { MdMoreHoriz } from "react-icons/md";
import TabCalendar from "./components/TabCalendar";

const Wrapper = styled.div`
   display: flex;

   .financial-block-left-main {
      width: calc(100% - 438px);
      padding-right: 26px;

      .financial-left-in {
         border-radius: 20px;
         border: 1px solid #707070;
         height: 100%;
         padding: 34px 50px 40px;

         .header {
            h3 {
               color: #60269e;
               font-size: 30px;
               font-weight: 700;
               line-height: normal;
               text-transform: uppercase;
            }
         }
      }
   }

   .financial-block-right-main {
      width: 438px;
      border: 1px solid #707070;
      border-radius: 20px;
      padding: 26px;

      .header {
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding-bottom: 56px;

         .title {
            p {
               color: #000;
               font-size: 16px;
               font-weight: 400;
               line-height: normal;
            }
         }

         button {
            font-size: 20px;
         }
      }

      .total-amount-block {
         text-align: center;
         padding-bottom: 70px;
         h5 {
            color: #60269e;
            font-size: 40px;
            font-weight: 400;
            line-height: normal;
            padding-bottom: 3px;
         }
         p {
            color: #7a86a1;
            font-size: 18px;
            font-weight: 400;
            line-height: normal;
         }
      }
   }


   @media (min-width: 768px) and (max-width: 1280px){
      flex-direction: column-reverse;
      gap: 40px;

      .financial-block-left-main{
         padding: 0;
         width: 100%;

         .financial-left-in{
            padding: 24px 30px 30px;
         }
      }
      .financial-block-right-main{
         max-width: 100%;
         width: 100%;
      }
   }
   
`;

const Financial = () => {
   return (
      <Layout headerTitle={"Financial"}>
         <Wrapper>
            <div className="financial-block-left-main">
               <div className="financial-left-in">
                  <div className="header">
                     <h3>Payment History</h3>
                  </div>
                  <PaymentHistoryTable />
               </div>
            </div>
            <div className="financial-block-right-main">
               <div className="header">
                  <div className="title">
                     <p>History</p>
                  </div>
                  <button>
                     <MdMoreHoriz />
                  </button>
               </div>

               <div className="total-amount-block">
                  <h5>21,456</h5>
                  <p>Total Admissions Amountd</p>
               </div>

               <div>
                  <TabCalendar />
               </div>
            </div>
         </Wrapper>
      </Layout>
   );
};

export default Financial;
