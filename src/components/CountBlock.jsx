import { styled } from "styled-components";

const Wrapper = styled.div`
 
   .visitCount-main {
      background: linear-gradient(222deg, #974de0 -12.23%, #00e5ff 106.51%);
      border-radius: 20px;
      padding: 30px;

      h5 {
         color: #fff;
         font-size: 24px;
         font-weight: 400;
         line-height: normal;
         text-align: center;
         padding-bottom: 32px;
      }

      .counter {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
         p {
            color: #fff;
            font-size: 32px;
            font-weight: 400;
            line-height: normal;
         }

         .divider{
            height: 30px;
            width: 2px ;
            background: #fff;
         }
      }
   }

   @media (min-width: 768px) and (max-width: 991px) {
      width: 50%;

      .visitCount-main{
         h5{
            font-size: 20px;
         }

         .counter{
            p{
               font-size: 24px;
            }
         }
      }
   }

   @media (min-width: 992px) and (max-width: 1024px) {
      
   }
`;

const CountBlock = () => {
   return (
      <Wrapper>
         <div className="visitCount-main">
            <h5>Profile Visits</h5>
            <div className="counter">
               <p>Online</p>
               <div className="divider" />
               <p>30</p>
            </div>
         </div>
      </Wrapper>
   );
};

export default CountBlock;
