import { TfiMoreAlt } from "react-icons/tfi";
import { styled } from "styled-components";
import ProfileAvatar from "../assets/profile.png";
import CustomRatingBlock from "./CustomRatingBlock";

const Wrapper = styled.div`
  border: 1px solid #707070;
  border-radius: 30px;
  padding: 27px 20px;
  max-width: 526px;
  width: 100%;
  .header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;
    h3 {
      color: #000;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 100%;
  }

  @media (min-width: 1025px) and (max-width: 1880px) {
    max-width: calc(50% - 5px);
  }
`;

const RecentRatingItemStyles = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 14px;

  &:last-child {
    padding: 0;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 212px;
    .reviewer-profile {
      height: 54px;
      width: 54px;
      border-radius: 100px;
      background-color: #60269e;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .reviewer-info {
      h4 {
        color: #000;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        padding-bottom: 8px;
      }

      p {
        color: #7a86a1;
        font-size: 10px;
        font-weight: 400;
        line-height: normal;
      }
    }
  }

  .right {
    width: calc(100% - 212px);

    .star-rating {
      padding-bottom: 6px;
    }

    .review-desc {
      p {
        color: #707070;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    .left {
      width: 150px;
    }

    .right {
      width: calc(100% - 150px);
    }
  }
`;

const RecentRatingItem = ({ item, index }) => {
  console.log("item", item);
  return (
    <RecentRatingItemStyles>
      <div className="left">
        <div className="reviewer-profile">
          <img src={ProfileAvatar} alt="" />
        </div>
        <div className="reviewer-info">
          <h4>{item?.studentName}</h4>
          {/* <p>Narayanguda</p> */}
        </div>
      </div>
      <div className="right">
        <div className="star-rating">
          <CustomRatingBlock value={item?.reviewStar} size={18} align="left" />
        </div>
        <div className="review-desc">
          <p>{item?.text}</p>
        </div>
      </div>
    </RecentRatingItemStyles>
  );
};

const RatingReviewBlock = ({ countData }) => {
  return (
    <Wrapper>
      <div className="header-main">
        <h3>Recent rating and reviews</h3>
        {/* <button>
          <TfiMoreAlt />
        </button> */}
      </div>

      <div className="recent-rating-items">
        {countData?.recentReviews?.map((item, index) => {
          return (
            <>
              <RecentRatingItem item={item} index={index} />
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default RatingReviewBlock;
