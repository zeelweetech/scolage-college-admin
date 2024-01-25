import GalleryItem from "./GalleryItem";
import styled from "styled-components";

const Wrapper = styled.div`
   .gallery-fields {
      display: flex;
      gap: 50px 60px;
      flex-wrap: wrap;
   }
   .save-button {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-top: 48px;
      button {
         background: #60269e;
         filter: drop-shadow(1.389px 7.878px 29px rgba(105, 95, 151, 0.141));
         border-radius: 16px;
         padding: 12px 34px;
         font-weight: 400;
         font-size: 13px;
         line-height: 17px;
         color: #ffffff;
      }
   }

   @media (min-width: 768px) and (max-width: 1024px) {
      .gallery-fields{
         gap: 30px;
      }
   }
`;

const GalleryBlock = () => {
   return (
      <Wrapper>
         <div className="gallery-fields">
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
         </div>
         <div className="save-button">
            <button>Save</button>
         </div>
      </Wrapper>
   );
};

export default GalleryBlock;
