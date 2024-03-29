import styled from "styled-components";
import CameraIcon from "../Icons/CameraIcon";

const Wrapper = styled.div`
   width: 304px;
   .topper-item-top {
      display: flex;
      padding-bottom: 18px;
      align-items: stretch;

      .image-block {
         width: 124px;
         height: 112px;
         border-radius: 10px;
         border: 1px solid #707070;
         position: relative;
         overflow: hidden;

         .image-btn {
            position: absolute;
            bottom: 0;
            right: 0;
            label {
               height: 30px;
               width: 30px;
               display: flex;
               align-items: center;
               justify-content: center;
               cursor: pointer;
            }
         }
      }

      .topper-info-block {
         padding-left: 16px;
         width: calc(100% - 124px);
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-between;

         input {
            width: 100%;
            border: 1px solid #707070;
            outline: none;
            background: #f8f8f8;
            border-radius: 6px;
            text-align: center;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            padding: 5px;
            color: #000;
         }
      }
   }

   .more-info-block {
      border: 1px solid #707070;
      border-radius: 6px;
      height: 44px;
      overflow: hidden;

      textarea {
         height: 100%;
         width: 100%;
         padding: 5px 10px;
         resize: none;
         outline: none;
         background: #f8f8f8;
         font-weight: 400;
         font-size: 12px;
         line-height: 16px;
         color: #000;
      }
   }
`;

const ToppersFormItem = () => {
   return (
      <Wrapper>
         <div className="topper-item-top">
            <div className="image-block">
               {/* <img src={""} alt="" /> */}
               <div className="image-btn">
                  <label htmlFor="file-upload">
                     <CameraIcon />
                  </label>
                  <input type="file" id="file-upload" style={{ display: "none" }} />
               </div>
            </div>

            <div className="topper-info-block">
               <input type="text" placeholder="Name" />
               <input type="text" placeholder="Passing out year" />
               <input type="text" placeholder="Marks" />
            </div>
         </div>

         <div className="more-info-block">
            <textarea placeholder="More Info"></textarea>
         </div>
      </Wrapper>
   );
};

export default ToppersFormItem;
