import React from "react";
import { styled } from "styled-components";
import { Rating } from "primereact/rating";
import { ImStarFull } from "react-icons/im";

const RatingBlockStyles = styled.div`
   display: flex;
   align-items: center;
   justify-content: var(--align);
   gap: 10px;
   .p-rating {
      gap: 10px;
   }
   .p-rating-item {
      svg {
         width: var(--size) !important;
         height: var(--size) !important;
         color: #fdd400 !important;
         fill: #fdd400 !important;
      }
   }

   .not-selected {
      opacity: 0.5;
   }
`;

const CustomRatingBlock = ({value, size, align = 'center'}) => {
   return (
      <RatingBlockStyles style={{'--size': `${size}px`, '--align': align}}>
         <Rating value={value} stars={value} size={36}  readOnly cancel={false} onIcon={<ImStarFull />} />
         <Rating className="not-selected" value={5 - value} stars={5 - value} size={36} readOnly cancel={false} onIcon={<ImStarFull />} />
      </RatingBlockStyles>
   );
};

export default CustomRatingBlock;
