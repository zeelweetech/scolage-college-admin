import { styled } from "styled-components";
import { TfiMoreAlt } from "react-icons/tfi";

const Wrapper = styled.div`
  border: 1px solid #707070;
  border-radius: 30px;
  padding: 27px 20px;
  max-width: 475px;
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
  .Radmission-list {
    ul {
      height: auto;
      overflow: auto;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 100%;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    max-width: 50%;
    width: 50%;
  }
  @media (min-width: 1025px) and (max-width: 1880px) {
    max-width: calc(50% - 5px);
  }
`;

const ListItemStyles = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 22px;

  &:last-child {
    padding-bottom: 0px;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 15px;
    .image {
      height: 54px;
      width: 54px;
      overflow: hidden;
      border-radius: 100px;
      background-color: #60269e;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .admission-name-ingo {
      h5 {
        color: #000;
        font-size: 10px;
        font-weight: 400;
        line-height: normal;
        padding-bottom: 8px;
      }
      p {
        color: #7a86a1;
        font-size: 8px;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 20px;

    .location {
      width: 105px;
      background: #f6efff;
      border-radius: 100px;
      padding: 0 0 0 22px;
      position: relative;

      p {
        color: #7a86a1;
        font-size: 8px;
        font-weight: 400;
        line-height: normal;

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 8px;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          background: #60269e;
          border-radius: 10px;
        }
      }

      p {
        color: #60269e;
        font-size: 10px;
        font-weight: 400;
        line-height: 23px;
      }
    }

    .status {
      p {
        color: #7a86a1;
        font-size: 10px;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`;

const ListItem = ({ item, index }) => {
  return (
    <ListItemStyles>
      <div className="left" key={index}>
        <div className="image">{/* <img src="/vite.svg" alt="" /> */}</div>
        <div className="admission-name-ingo">
          <h5>{item?.student_detail?.[0]?.name}</h5>
          <p>{item?.college?.[0]?.collegename}</p>
        </div>
      </div>
      <div className="right">
        <div className="location">
          <p>{item?.college?.[0]?.location}</p>
        </div>
        <div className="status">
          <p>Onboard</p>
        </div>
      </div>
    </ListItemStyles>
  );
};

const RecentAdmissionBlock = ({ countData }) => {
  return (
    <Wrapper>
      <div className="header-main">
        <h3>Recent Admission</h3>
        {/* <button>
          <TfiMoreAlt />
        </button> */}
      </div>

      <div className="Radmission-list">
        <ul>
          {countData?.recentAdmissions?.map((item, index) => {
            return (
              <>
                <ListItem item={item} index={index} />
              </>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default RecentAdmissionBlock;
