import React from "react";
import Layout from "./components/Layout";
import AddClgAccordion from "./components/AddClgAccordion";
import CollegeDetailForm from "./components/CollegeDetailForm";
import InfrastructureForm from "./components/InfrastructureForm";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import HighlightForm from "./components/HighlightForm";
import GalleryBlock from "./components/GalleryBlock";
import ToppersBlock from "./components/ToppersBlock";
import StaffBlock from "./components/StaffBlock";
import SubjectBlock from "./components/SubjectBlock";
import FeesBlock from "./components/FeesBlock";
import CollegeImagesBlock from "./components/CollegeImagesBlock";
import TandCBlock from "./components/TandCBlock";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import SportUploadBlock from "./components/SportsUploadBlock";
import CulturalBlock from "./components/CulturalBlock";
import AcademicBlock from "./components/AcademicBlock";

const CollegeProfile = () => {
   const [collegeInfo, setCollegeInfo] = useState(null);
   async function fetchData() {
      const loading = toast.loading("Loading...");
      try {
         const collegeProfileId = localStorage.getItem("collegeProfileId");
         const { data } = await axios.post(`/v2/singleclglist/get/${collegeProfileId}`);
         setCollegeInfo(data);
         toast.dismiss(loading);
      } catch (err) {
         console.log(err);
         toast.dismiss(loading);
         toast.error("Something went wrong");
      }
   }

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <Layout headerTitle={"College Profile"}>
         <AddClgAccordion accTitle={"College Details"}>{collegeInfo && <CollegeDetailForm info={collegeInfo?.college?.[0]} />}</AddClgAccordion>

         <AddClgAccordion accTitle={"INFRASTRUCTURE"}>{collegeInfo && <InfrastructureForm info={collegeInfo?.infra?.[0]} />}</AddClgAccordion>
         <AddClgAccordion accTitle={"HIGHLIGHTS"}>{collegeInfo && <HighlightForm info={collegeInfo?.highlight?.[0]} />}</AddClgAccordion>
         <AddClgAccordion accTitle={"SPORTS"}>
            {collegeInfo && <SportUploadBlock info={collegeInfo?.sports} />}
            {/* <GalleryBlock /> */}
         </AddClgAccordion>
         <AddClgAccordion accTitle={"CULTURAL"}>
            {collegeInfo && <CulturalBlock info={collegeInfo?.cultural} />}
            {/* <GalleryBlock /> */}
         </AddClgAccordion>
         <AddClgAccordion accTitle={"ACADEMICS"}>
            {collegeInfo && <AcademicBlock info={collegeInfo?.acedemic} />}
            {/* <GalleryBlock /> */}
         </AddClgAccordion>
         <AddClgAccordion accTitle={"ALUMNI AND TOPPERS"}>{collegeInfo && <ToppersBlock info={collegeInfo?.alumini_and_toppers} />}</AddClgAccordion>
         <AddClgAccordion accTitle={"MANAGEMENT & STAFF"}>{collegeInfo && <StaffBlock info={collegeInfo?.management_staff} />}</AddClgAccordion>
         <AddClgAccordion accTitle={"SUBJECTS"}>{collegeInfo && <SubjectBlock info={collegeInfo?.subject} />}</AddClgAccordion>
         <AddClgAccordion accTitle={"FEE STRUCTURE"}>{collegeInfo && <FeesBlock info={collegeInfo?.feeStructure?.[0]} />}</AddClgAccordion>
         <AddClgAccordion accTitle={"COLLEGE IMAGES"}>{collegeInfo && <CollegeImagesBlock info={collegeInfo?.clgimage} />}</AddClgAccordion>
         <AddClgAccordion accTitle={"COLLEGE POLICY & SOCIAL MEDIA"}>{collegeInfo && <TandCBlock info={collegeInfo?.clgpolicySocialMedia?.[0]} />}</AddClgAccordion>
      </Layout>
   );
};

export default CollegeProfile;
