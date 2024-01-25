import { styled } from "styled-components";
import CustomRatingBlock from "./CustomRatingBlock";

const Wrapper = styled.div`
  background: linear-gradient(216deg, #894de0 -14.49%, #d11cc5 103.1%);
  border-radius: 20px;
  padding: 27px;
  h4 {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    padding-bottom: 32px;
  }

  .p-rating {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    .p-icon {
      color: #fdd400;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 50%;

    h4 {
      font-size: 20px;
      padding-bottom: 14px;
    }
  }
`;

const RatingBlock = ({ countData }) => {
  return (
    <Wrapper>
      <h4>Overall rating on scolage</h4>
      <CustomRatingBlock value={countData?.overAllStar} size={36} />
    </Wrapper>
  );
};

export default RatingBlock;
