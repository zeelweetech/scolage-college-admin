import styled from "styled-components";
import Logo from "../assets/Logo_p.svg";
import CTAbg from "../assets/db-cta-bg.png";
import ProfileImage from "../assets/profile.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SideNavLink from "./SideNavLink";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const SidebarStyles = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   z-index: 99;
   width: 293px;
   height: 100vh;
   border-right: 1px solid #707070;
   background-color: #fff;
   padding: 40px 20px;

   .logo {
      width: 187px;
      padding-bottom: 17px;
   }

   .side-nav-main {
      height: calc(100% - 94px);
      margin-right: -10px;
      padding-right: 10px;
      overflow-y: auto;

      &::-webkit-scrollbar {
         width: 4px;
         height: 4px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
         padding: 3px;
         background: #e7ebee;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
         background: #60269e;
         border-radius: 100px;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
         background: #0f3a5d;
      }

      ul {
         padding: 35px 0 74px;
         border-bottom: 1px solid #707070;

         &:last-child {
            border: none;
         }
      }
   }

   .sidebar-bottom {
      .teamdb-cta {
         border-radius: 30px;
         overflow: hidden;
         padding-bottom: 50px;
         a {
            height: 102px;
            max-width: 212px;
            width: 100%;
            margin: 0 auto;
            display: block;
            background-image: url(${CTAbg});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            display: flex;
            align-items: end;
            justify-content: end;
            padding: 20px;

            .teamdb-cta-inner {
               max-width: 132px;
               font-weight: 400;
               font-size: 14px;
               line-height: 19px;
               color: #f6efff;
               display: flex;
               align-items: flex-end;
            }
         }
      }
   }

   @media (min-width: 768px) and (max-width: 1024px) {
      width: 200px;
      padding: 30px 12px;
      .logo {
         width: 136px;
         padding-bottom: 17px;
      }

      .side-nav-main {
         height: calc(100% - 76px);
         ul {
            padding: 10px 0 44px;
         }
      }

      .sidebar-bottom {
         .teamdb-cta {
            padding-bottom: 20px;
         }
      }
   }

   @media (min-width: 1025px) and (max-width: 1280px) {
      width: 200px;
      padding: 30px 12px;
      .logo {
         width: 136px;
         padding-bottom: 17px;
      }

      .side-nav-main {
         height: calc(100% - 76px);
         ul {
            padding: 10px 0 44px;
         }
      }

      .sidebar-bottom {
         .teamdb-cta {
            padding-bottom: 20px;
         }
      }
   }
`;

const firstNav = [
   {
      link: "/dashboard",
      title: "Dashboard",
      icon: (
         <svg fill="#7A86A1" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 20C13.1896 19.9842 12.4179 19.6503 11.8516 19.0702C11.2854 18.4901 10.9702 17.7106 10.974 16.9V13.88C10.9668 13.0695 11.2813 12.2893 11.8486 11.7104C12.4159 11.1315 13.1896 10.8012 14 10.792H16.96C17.7709 10.8038 18.5445 11.1345 19.1134 11.7124C19.6824 12.2903 20.0009 13.069 20 13.88V16.9C20.0002 17.7109 19.6827 18.4895 19.1155 19.069C18.5483 19.6485 17.7767 19.9827 16.966 20H14ZM12.6 13.879V16.9C12.5964 17.279 12.7431 17.6439 13.008 17.915C13.1352 18.0475 13.2878 18.1531 13.4567 18.2254C13.6256 18.2978 13.8073 18.3354 13.991 18.336H16.972C17.1557 18.3354 17.3374 18.2978 17.5063 18.2254C17.6752 18.1531 17.8278 18.0475 17.955 17.915C18.2199 17.644 18.3663 17.2789 18.362 16.9V13.88C18.3635 13.5019 18.2162 13.1384 17.952 12.868C17.8236 12.7351 17.6698 12.6293 17.4998 12.557C17.3297 12.4847 17.1468 12.4473 16.962 12.447H14C13.6244 12.4518 13.2661 12.6053 13.0036 12.874C12.7412 13.1426 12.596 13.5044 12.6 13.88V13.879ZM3.033 19.984C2.22675 19.9583 1.46147 19.6226 0.896495 19.0469C0.331525 18.4711 0.010408 17.6996 2.96813e-06 16.893V13.88C-0.00112279 13.0628 0.318024 12.2777 0.889003 11.693C1.16831 11.4073 1.50202 11.1805 1.87043 11.0259C2.23883 10.8713 2.63448 10.7922 3.034 10.793H4.25C4.40312 10.7765 4.55777 10.8041 4.69576 10.8725C4.83376 10.9408 4.94936 11.0472 5.029 11.179C5.1104 11.3121 5.15348 11.465 5.15348 11.621C5.15348 11.777 5.1104 11.9299 5.029 12.063C4.94931 12.1948 4.83373 12.3012 4.69578 12.3698C4.55782 12.4383 4.4032 12.4661 4.25 12.45H3.035C2.65881 12.454 2.29944 12.6065 2.0353 12.8744C1.77115 13.1423 1.62366 13.5038 1.625 13.88V16.864C1.63101 17.238 1.78088 17.5952 2.04347 17.8615C2.30606 18.1278 2.66117 18.2827 3.035 18.294H6.014C6.20047 18.2949 6.38519 18.2581 6.55705 18.1857C6.72891 18.1134 6.88434 18.007 7.014 17.873C7.28005 17.6022 7.42878 17.2376 7.428 16.858V12.382C7.39798 12.2192 7.41659 12.0512 7.48151 11.899C7.54642 11.7468 7.65477 11.617 7.793 11.526C7.92986 11.4362 8.09097 11.3906 8.25459 11.3952C8.41821 11.3999 8.57647 11.4546 8.708 11.552C8.8409 11.6508 8.94174 11.7866 8.99794 11.9424C9.05414 12.0982 9.0632 12.2671 9.024 12.428V16.89C9.02849 17.2928 8.95356 17.6925 8.80349 18.0664C8.65342 18.4402 8.43115 18.7808 8.14938 19.0687C7.86762 19.3566 7.53189 19.5861 7.16137 19.7442C6.79085 19.9023 6.39281 19.9858 5.99 19.99L3.033 19.984ZM15.78 9.23801C15.5779 9.21265 15.392 9.11438 15.2572 8.96164C15.1224 8.8089 15.048 8.61219 15.048 8.40849C15.048 8.20479 15.1224 8.0081 15.2572 7.85536C15.392 7.70262 15.5779 7.60435 15.78 7.57899H16.968C17.1552 7.57786 17.3402 7.53902 17.512 7.4648C17.6838 7.39057 17.8389 7.2825 17.968 7.147C18.2307 6.86989 18.3743 6.50081 18.368 6.119V3.10001C18.3668 2.72627 18.2199 2.36775 17.9584 2.10069C17.697 1.83364 17.3416 1.67911 16.968 1.67H14C13.6249 1.67448 13.2669 1.82755 13.0044 2.09561C12.742 2.36368 12.5965 2.72488 12.6 3.10001V7.619C12.5953 7.83714 12.5052 8.04471 12.349 8.19711C12.1929 8.34951 11.9832 8.43458 11.765 8.43401C11.6577 8.43137 11.552 8.40716 11.4543 8.36284C11.3565 8.31851 11.2687 8.25497 11.196 8.17599C11.0492 8.01348 10.972 7.79983 10.981 7.58099V3.10001C10.977 2.28221 11.2941 1.49549 11.864 0.908997C12.1416 0.622916 12.4735 0.395152 12.8403 0.239059C13.2071 0.0829667 13.6014 0.00169125 14 0H16.96C17.7664 0.0277742 18.531 0.365587 19.0945 0.943069C19.658 1.52055 19.977 2.29318 19.985 3.10001V6.11301C19.9964 6.92879 19.6881 7.71662 19.126 8.308C18.8512 8.5972 18.5214 8.82869 18.156 8.98889C17.7906 9.14909 17.3969 9.2348 16.998 9.241L15.78 9.23801ZM6 9.209H3.035C2.22498 9.19535 1.45278 8.86383 0.885001 8.28595C0.31722 7.70807 -0.000636845 6.93013 2.96813e-06 6.12V3.10001C-0.000180825 2.28914 0.317349 1.51049 0.884513 0.930984C1.45168 0.351482 2.22332 0.0172635 3.034 0H6C6.81131 0.0141964 7.58434 0.347571 8.15152 0.927856C8.7187 1.50814 9.03434 2.28858 9.03 3.10001V6.12199C9.03371 6.93971 8.71418 7.72579 8.141 8.30901C7.86268 8.59488 7.52973 8.82186 7.16192 8.97647C6.79412 9.13108 6.39898 9.21016 6 9.209ZM2.026 2.077C1.75685 2.34871 1.60559 2.71555 1.605 3.09801V6.12C1.60118 6.31185 1.63545 6.50256 1.70582 6.68108C1.7762 6.85959 1.88129 7.02237 2.015 7.16C2.1435 7.29224 2.29704 7.39757 2.46667 7.46985C2.63629 7.54213 2.81862 7.57991 3.003 7.58099H6.003C6.1902 7.58014 6.3753 7.54143 6.54715 7.46719C6.71901 7.39295 6.87406 7.28472 7.003 7.149C7.26656 6.87241 7.41031 6.50298 7.403 6.121V3.10001C7.40257 2.72604 7.25587 2.36707 6.99426 2.09985C6.73264 1.83263 6.37687 1.67835 6.003 1.67H3.008C2.82553 1.66949 2.64478 1.70521 2.47621 1.77507C2.30764 1.84493 2.15462 1.94756 2.026 2.077Z" />
         </svg>
      ),
   },
   {
      link: "/applicants",
      title: "Applicants",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
               d="M6.253 20C2.392 20 0 17.608 0 13.756V6.256C0 2.392 2.392 0 6.253 0H13.746C17.59 0 20 2.39201 20 6.25301V8.575C20.0001 8.67533 19.9805 8.7747 19.9422 8.86745C19.904 8.96019 19.8478 9.04449 19.7769 9.11552C19.7061 9.18656 19.6219 9.24295 19.5293 9.28146C19.4367 9.31998 19.3373 9.33986 19.237 9.34H19.226C19.0255 9.34 18.8332 9.26035 18.6914 9.11858C18.5497 8.9768 18.47 8.7845 18.47 8.584C18.47 8.578 18.47 8.57199 18.47 8.56599V6.25301C18.47 3.21001 16.79 1.53 13.747 1.53H6.253C3.2 1.53 1.53 3.21001 1.53 6.25301V13.753C1.53 16.796 3.21 18.467 6.253 18.467H13.746C16.798 18.467 18.469 16.787 18.469 13.753C18.469 13.5501 18.5496 13.3555 18.6931 13.2121C18.8365 13.0686 19.0311 12.988 19.234 12.988C19.4369 12.988 19.6315 13.0686 19.7749 13.2121C19.9184 13.3555 19.999 13.5501 19.999 13.753C19.999 17.608 17.608 20 13.756 20H6.253ZM5.7 15.479C5.49725 15.472 5.30559 15.3847 5.16719 15.2363C5.02879 15.088 4.95498 14.8908 4.962 14.688V8.28799C4.96878 8.08736 5.05498 7.89764 5.20163 7.76056C5.34828 7.62347 5.54337 7.55026 5.744 7.55701H5.753C5.95602 7.56405 6.14793 7.65143 6.28651 7.79996C6.4251 7.94848 6.49902 8.14598 6.492 8.349V14.74C6.48526 14.9384 6.40169 15.1263 6.25895 15.2642C6.11621 15.4021 5.92547 15.4791 5.727 15.479H5.7ZM9.27 14.7V5.321C9.27 5.11811 9.3506 4.92353 9.49406 4.78006C9.63753 4.63659 9.83211 4.556 10.035 4.556C10.2379 4.556 10.4325 4.63659 10.5759 4.78006C10.7194 4.92353 10.8 5.11811 10.8 5.321V14.7C10.8 14.9029 10.7194 15.0975 10.5759 15.2409C10.4325 15.3844 10.2379 15.465 10.035 15.465C9.83211 15.465 9.63753 15.3844 9.49406 15.2409C9.3506 15.0975 9.27 14.9029 9.27 14.7ZM13.509 14.691V11.7C13.509 11.497 13.5897 11.3023 13.7332 11.1587C13.8768 11.0151 14.0715 10.9345 14.2745 10.9345C14.4775 10.9345 14.6722 11.0151 14.8158 11.1587C14.9594 11.3023 15.04 11.497 15.04 11.7V14.691C15.04 14.894 14.9594 15.0887 14.8158 15.2323C14.6722 15.3758 14.4775 15.4565 14.2745 15.4565C14.0715 15.4565 13.8768 15.3758 13.7332 15.2323C13.5897 15.0887 13.509 14.894 13.509 14.691Z"
               fill="#7A86A1"
            />
         </svg>
      ),
   },
   {
      link: "/financial",
      title: "Financial",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
            <path
               d="M14.5069 18.318C14.5048 18.1394 14.5736 17.9673 14.6983 17.8394C14.823 17.7115 14.9934 17.6384 15.1719 17.636C16.3642 17.6199 17.5014 17.1313 18.3337 16.2774C19.166 15.4236 19.6254 14.2743 19.6109 13.082V7.36499H16.3369C15.8054 7.36499 15.2957 7.57614 14.9199 7.95197C14.5441 8.32779 14.3329 8.83749 14.3329 9.36899C14.3329 9.90048 14.5441 10.4102 14.9199 10.786C15.2957 11.1619 15.8054 11.373 16.3369 11.373H17.6969C17.8778 11.373 18.0513 11.4449 18.1792 11.5728C18.3071 11.7007 18.3789 11.8741 18.3789 12.055C18.3789 12.2359 18.3071 12.4094 18.1792 12.5373C18.0513 12.6652 17.8778 12.737 17.6969 12.737H16.3369C15.4579 12.7156 14.6221 12.3513 14.0079 11.722C13.3938 11.0928 13.05 10.2483 13.05 9.36899C13.05 8.48969 13.3938 7.64525 14.0079 7.01596C14.6221 6.38667 15.4579 6.02243 16.3369 6.00101H19.6109V5.91901C19.6256 4.72653 19.1664 3.57698 18.334 2.7229C17.5017 1.86882 16.3644 1.38009 15.1719 1.36401H6.77194C5.82544 1.37483 4.90712 1.68757 4.15076 2.25668C3.3944 2.8258 2.83951 3.62155 2.56694 4.52802H11.3289C11.5098 4.52802 11.6833 4.59985 11.8112 4.72775C11.9391 4.85565 12.0109 5.02911 12.0109 5.20999C12.0109 5.39087 11.9391 5.56436 11.8112 5.69226C11.6833 5.82016 11.5098 5.892 11.3289 5.892H2.33194V13.081C2.31752 14.2733 2.7769 15.4226 3.6092 16.2764C4.4415 17.1303 5.57866 17.6189 6.77094 17.635H10.9989C11.1798 17.635 11.3533 17.7068 11.4812 17.8347C11.6091 17.9626 11.6809 18.1361 11.6809 18.317C11.6809 18.4979 11.6091 18.6714 11.4812 18.7993C11.3533 18.9272 11.1798 18.999 10.9989 18.999H6.76694C5.21809 18.9771 3.74112 18.342 2.65986 17.2328C1.57861 16.1236 0.98131 14.6309 0.998938 13.082V5.91901C0.980777 4.36976 1.57784 2.87656 2.65915 1.76694C3.74046 0.657317 5.21774 0.0218721 6.76694 0H15.1669C16.7162 0.0218727 18.1936 0.657285 19.2751 1.76688C20.3566 2.87647 20.9538 4.36967 20.9359 5.91901V13.081C20.9538 14.629 20.3577 16.121 19.2779 17.2303C18.1982 18.3397 16.7228 18.976 15.1749 19C15.0863 18.9992 14.9986 18.981 14.917 18.9462C14.8354 18.9115 14.7614 18.861 14.6994 18.7976C14.6373 18.7343 14.5884 18.6593 14.5554 18.577C14.5223 18.4947 14.5059 18.4067 14.5069 18.318ZM16.4809 9.98901C16.3001 9.98901 16.1266 9.91715 15.9987 9.78925C15.8708 9.66135 15.7989 9.48788 15.7989 9.30701C15.7989 9.12613 15.8708 8.95267 15.9987 8.82477C16.1266 8.69687 16.3001 8.625 16.4809 8.625H16.7809C16.9618 8.625 17.1353 8.69687 17.2632 8.82477C17.3911 8.95267 17.4629 9.12613 17.4629 9.30701C17.4629 9.48788 17.3911 9.66135 17.2632 9.78925C17.1353 9.91715 16.9618 9.98901 16.7809 9.98901H16.4809Z"
               fill="#7A86A1"
            />
         </svg>
      ),
   },
   {
      link: "/settings",
      title: "Settings",
      icon: (
         <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M13.532 18.318C13.5299 18.1394 13.5987 17.9673 13.7234 17.8394C13.8481 17.7115 14.0184 17.6384 14.197 17.636C15.3893 17.6199 16.5265 17.1313 17.3588 16.2774C18.1911 15.4236 18.6504 14.2743 18.636 13.082V7.36499H15.362C14.8305 7.36499 14.3208 7.57614 13.945 7.95197C13.5692 8.32779 13.358 8.83749 13.358 9.36899C13.358 9.90048 13.5692 10.4102 13.945 10.786C14.3208 11.1619 14.8305 11.373 15.362 11.373H16.722C16.9029 11.373 17.0764 11.4449 17.2043 11.5728C17.3322 11.7007 17.404 11.8741 17.404 12.055C17.404 12.2359 17.3322 12.4094 17.2043 12.5373C17.0764 12.6652 16.9029 12.737 16.722 12.737H15.362C14.483 12.7156 13.6472 12.3513 13.033 11.722C12.4189 11.0928 12.0751 10.2483 12.0751 9.36899C12.0751 8.48969 12.4189 7.64525 13.033 7.01596C13.6472 6.38667 14.483 6.02243 15.362 6.00101H18.636V5.91901C18.6507 4.72653 18.1914 3.57698 17.3591 2.7229C16.5268 1.86882 15.3895 1.38009 14.197 1.36401H5.79703C4.85053 1.37483 3.93221 1.68757 3.17585 2.25668C2.41949 2.8258 1.8646 3.62155 1.59202 4.52802H10.354C10.5349 4.52802 10.7084 4.59985 10.8363 4.72775C10.9642 4.85565 11.036 5.02911 11.036 5.20999C11.036 5.39087 10.9642 5.56436 10.8363 5.69226C10.7084 5.82016 10.5349 5.892 10.354 5.892H1.35702V13.081C1.34261 14.2733 1.80199 15.4226 2.63429 16.2764C3.46658 17.1303 4.60375 17.6189 5.79603 17.635H10.024C10.2049 17.635 10.3784 17.7068 10.5063 17.8347C10.6342 17.9626 10.706 18.1361 10.706 18.317C10.706 18.4979 10.6342 18.6714 10.5063 18.7993C10.3784 18.9272 10.2049 18.999 10.024 18.999H5.79202C4.24318 18.9771 2.76621 18.342 1.68495 17.2328C0.603694 16.1236 0.00639571 14.6309 0.0240231 13.082V5.91901C0.00586221 4.36976 0.602924 2.87656 1.68424 1.76694C2.76555 0.657317 4.24283 0.0218721 5.79202 0H14.192C15.7413 0.0218727 17.2187 0.657285 18.3002 1.76688C19.3816 2.87647 19.9789 4.36967 19.961 5.91901V13.081C19.9789 14.629 19.3827 16.121 18.303 17.2303C17.2232 18.3397 15.7479 18.976 14.2 19C14.1113 18.9992 14.0237 18.981 13.9421 18.9462C13.8605 18.9115 13.7865 18.861 13.7245 18.7976C13.6624 18.7343 13.6135 18.6593 13.5804 18.577C13.5474 18.4947 13.531 18.4067 13.532 18.318ZM15.506 9.98901C15.3251 9.98901 15.1517 9.91715 15.0238 9.78925C14.8959 9.66135 14.824 9.48788 14.824 9.30701C14.824 9.12613 14.8959 8.95267 15.0238 8.82477C15.1517 8.69687 15.3251 8.625 15.506 8.625H15.806C15.9869 8.625 16.1604 8.69687 16.2883 8.82477C16.4162 8.95267 16.488 9.12613 16.488 9.30701C16.488 9.48788 16.4162 9.66135 16.2883 9.78925C16.1604 9.91715 15.9869 9.98901 15.806 9.98901H15.506Z"
               fill="#7A86A1"
            />
         </svg>
      ),
   },
   {
      link: "/college-profile",
      title: "College Profile",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
            <path
               d="M4.56501 21C3.9631 20.9981 3.36745 20.8776 2.81215 20.6454C2.25684 20.4131 1.75277 20.0737 1.32878 19.6465C0.90479 19.2192 0.56919 18.7126 0.341187 18.1555C0.113183 17.5984 -0.00275155 17.0019 1.17336e-05 16.4C1.17336e-05 16.3673 1.17336e-05 16.334 1.17336e-05 16.3V13.777C-0.00366101 13.6766 0.0129293 13.5766 0.0487903 13.4828C0.0846512 13.389 0.139048 13.3034 0.208729 13.2312C0.27841 13.1589 0.361946 13.1014 0.454346 13.0621C0.546746 13.0229 0.646112 13.0027 0.74651 13.0027C0.846908 13.0027 0.946277 13.0229 1.03868 13.0621C1.13108 13.1014 1.21461 13.1589 1.28429 13.2312C1.35398 13.3034 1.40837 13.389 1.44423 13.4828C1.48009 13.5766 1.49668 13.6766 1.49301 13.777V16.3C1.47122 17.1209 1.77604 17.9169 2.34056 18.5133C2.90507 19.1097 3.68315 19.4577 4.50401 19.481H12.51C13.3175 19.4308 14.075 19.0729 14.6264 18.4809C15.1778 17.8889 15.4812 17.108 15.474 16.299V7.37396L11.665 3.35995V4.67596C11.6629 5.15898 11.8519 5.62324 12.1908 5.96741C12.5297 6.31157 12.991 6.50769 13.474 6.51297C13.6742 6.51297 13.8663 6.59251 14.0079 6.7341C14.1495 6.87569 14.229 7.06774 14.229 7.26797C14.229 7.46821 14.1495 7.66026 14.0079 7.80185C13.8663 7.94344 13.6742 8.02298 13.474 8.02298C12.5933 8.01401 11.7518 7.65684 11.1335 7.02954C10.5152 6.40224 10.1703 5.55575 10.174 4.67496V2.51297H4.56501C3.76351 2.51456 2.99431 2.82901 2.42125 3.38937C1.84818 3.94973 1.51656 4.71171 1.49701 5.51297V9.67197C1.50069 9.7723 1.4841 9.87235 1.44823 9.96613C1.41237 10.0599 1.35798 10.1455 1.2883 10.2177C1.21861 10.29 1.13508 10.3475 1.04268 10.3868C0.950279 10.426 0.850909 10.4463 0.750511 10.4463C0.650114 10.4463 0.550748 10.426 0.458348 10.3868C0.365947 10.3475 0.282408 10.29 0.212727 10.2177C0.143046 10.1455 0.088649 10.0599 0.0527881 9.96613C0.0169271 9.87235 0.000340603 9.7723 0.00401335 9.67197V5.51297C0.0274137 4.31519 0.517178 3.17379 1.36914 2.33154C2.2211 1.48929 3.36804 1.01263 4.56601 1.00296H10.866C10.8847 0.99767 10.9038 0.993668 10.923 0.990967C10.9422 0.994005 10.9612 0.998003 10.98 1.00296H11.18C11.281 1.00314 11.3808 1.0239 11.4735 1.06396C11.5662 1.10403 11.6497 1.16254 11.719 1.23596L16.759 6.54797C16.8937 6.68885 16.9693 6.87606 16.97 7.07098V16.299C16.9869 17.5089 16.5304 18.6775 15.698 19.5557C14.8656 20.4338 13.7231 20.9521 12.514 21H4.56501ZM5.36501 15.406C5.16478 15.406 4.97274 15.3264 4.83115 15.1848C4.68956 15.0433 4.61001 14.8512 4.61001 14.651C4.61001 14.4507 4.68956 14.2587 4.83115 14.1171C4.97274 13.9755 5.16478 13.896 5.36501 13.896H10.736C10.9362 13.896 11.1283 13.9755 11.2699 14.1171C11.4115 14.2587 11.491 14.4507 11.491 14.651C11.491 14.8512 11.4115 15.0433 11.2699 15.1848C11.1283 15.3264 10.9362 15.406 10.736 15.406H5.36501ZM5.36501 10.42C5.16478 10.42 4.97274 10.3404 4.83115 10.1988C4.68956 10.0572 4.61001 9.86522 4.61001 9.66498C4.61001 9.46474 4.68956 9.27269 4.83115 9.1311C4.97274 8.98951 5.16478 8.90997 5.36501 8.90997H8.70001C8.90025 8.90997 9.09229 8.98951 9.23388 9.1311C9.37547 9.27269 9.45501 9.46474 9.45501 9.66498C9.45501 9.86522 9.37547 10.0572 9.23388 10.1988C9.09229 10.3404 8.90025 10.42 8.70001 10.42H5.36501Z"
               fill="#7A86A1"
            />
         </svg>
      ),
   },
   {
      link: "/feedback-form",
      title: "Feedback Form",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
            <path
               d="M4.56501 21C3.9631 20.9981 3.36745 20.8776 2.81215 20.6454C2.25684 20.4131 1.75277 20.0737 1.32878 19.6465C0.90479 19.2192 0.56919 18.7126 0.341187 18.1555C0.113183 17.5984 -0.00275155 17.0019 1.17336e-05 16.4C1.17336e-05 16.3673 1.17336e-05 16.334 1.17336e-05 16.3V13.777C-0.00366101 13.6766 0.0129293 13.5766 0.0487903 13.4828C0.0846512 13.389 0.139048 13.3034 0.208729 13.2312C0.27841 13.1589 0.361946 13.1014 0.454346 13.0621C0.546746 13.0229 0.646112 13.0027 0.74651 13.0027C0.846908 13.0027 0.946277 13.0229 1.03868 13.0621C1.13108 13.1014 1.21461 13.1589 1.28429 13.2312C1.35398 13.3034 1.40837 13.389 1.44423 13.4828C1.48009 13.5766 1.49668 13.6766 1.49301 13.777V16.3C1.47122 17.1209 1.77604 17.9169 2.34056 18.5133C2.90507 19.1097 3.68315 19.4577 4.50401 19.481H12.51C13.3175 19.4308 14.075 19.0729 14.6264 18.4809C15.1778 17.8889 15.4812 17.108 15.474 16.299V7.37396L11.665 3.35995V4.67596C11.6629 5.15898 11.8519 5.62324 12.1908 5.96741C12.5297 6.31157 12.991 6.50769 13.474 6.51297C13.6742 6.51297 13.8663 6.59251 14.0079 6.7341C14.1495 6.87569 14.229 7.06774 14.229 7.26797C14.229 7.46821 14.1495 7.66026 14.0079 7.80185C13.8663 7.94344 13.6742 8.02298 13.474 8.02298C12.5933 8.01401 11.7518 7.65684 11.1335 7.02954C10.5152 6.40224 10.1703 5.55575 10.174 4.67496V2.51297H4.56501C3.76351 2.51456 2.99431 2.82901 2.42125 3.38937C1.84818 3.94973 1.51656 4.71171 1.49701 5.51297V9.67197C1.50069 9.7723 1.4841 9.87235 1.44823 9.96613C1.41237 10.0599 1.35798 10.1455 1.2883 10.2177C1.21861 10.29 1.13508 10.3475 1.04268 10.3868C0.950279 10.426 0.850909 10.4463 0.750511 10.4463C0.650114 10.4463 0.550748 10.426 0.458348 10.3868C0.365947 10.3475 0.282408 10.29 0.212727 10.2177C0.143046 10.1455 0.088649 10.0599 0.0527881 9.96613C0.0169271 9.87235 0.000340603 9.7723 0.00401335 9.67197V5.51297C0.0274137 4.31519 0.517178 3.17379 1.36914 2.33154C2.2211 1.48929 3.36804 1.01263 4.56601 1.00296H10.866C10.8847 0.99767 10.9038 0.993668 10.923 0.990967C10.9422 0.994005 10.9612 0.998003 10.98 1.00296H11.18C11.281 1.00314 11.3808 1.0239 11.4735 1.06396C11.5662 1.10403 11.6497 1.16254 11.719 1.23596L16.759 6.54797C16.8937 6.68885 16.9693 6.87606 16.97 7.07098V16.299C16.9869 17.5089 16.5304 18.6775 15.698 19.5557C14.8656 20.4338 13.7231 20.9521 12.514 21H4.56501ZM5.36501 15.406C5.16478 15.406 4.97274 15.3264 4.83115 15.1848C4.68956 15.0433 4.61001 14.8512 4.61001 14.651C4.61001 14.4507 4.68956 14.2587 4.83115 14.1171C4.97274 13.9755 5.16478 13.896 5.36501 13.896H10.736C10.9362 13.896 11.1283 13.9755 11.2699 14.1171C11.4115 14.2587 11.491 14.4507 11.491 14.651C11.491 14.8512 11.4115 15.0433 11.2699 15.1848C11.1283 15.3264 10.9362 15.406 10.736 15.406H5.36501ZM5.36501 10.42C5.16478 10.42 4.97274 10.3404 4.83115 10.1988C4.68956 10.0572 4.61001 9.86522 4.61001 9.66498C4.61001 9.46474 4.68956 9.27269 4.83115 9.1311C4.97274 8.98951 5.16478 8.90997 5.36501 8.90997H8.70001C8.90025 8.90997 9.09229 8.98951 9.23388 9.1311C9.37547 9.27269 9.45501 9.46474 9.45501 9.66498C9.45501 9.86522 9.37547 10.0572 9.23388 10.1988C9.09229 10.3404 8.90025 10.42 8.70001 10.42H5.36501Z"
               fill="#7A86A1"
            />
         </svg>
      ),
   },
];
const secNav = [
   {
      link: "/query",
      title: "Query",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
               d="M7.85094 19.762C7.65773 19.7164 7.49045 19.596 7.38569 19.4274C7.28094 19.2587 7.24723 19.0554 7.29194 18.862C7.31178 18.7667 7.35029 18.6763 7.40525 18.596C7.46021 18.5157 7.53053 18.447 7.61216 18.394C7.69379 18.3411 7.78511 18.3047 7.88085 18.2872C7.97658 18.2697 8.07484 18.2713 8.16994 18.292C9.2479 18.5267 10.3617 18.5453 11.4469 18.3467C12.5321 18.148 13.5671 17.7361 14.492 17.1348C15.417 16.5334 16.2134 15.7545 16.8353 14.8433C17.4572 13.932 17.8921 12.9065 18.1149 11.826C18.6025 9.64254 18.2096 7.35492 17.0214 5.45929C15.8332 3.56366 13.9456 2.21292 11.7679 1.70001C11.1772 1.56696 10.5735 1.49987 9.96794 1.5H9.96194C7.7287 1.5198 5.59479 2.42593 4.02962 4.01904C2.46445 5.61216 1.59623 7.76175 1.61594 9.995C1.61499 11.3628 1.93924 12.7112 2.56194 13.929L2.74994 14.304C2.9835 14.7625 3.0308 15.2935 2.88194 15.786C2.68194 16.3193 2.50861 16.8637 2.36194 17.419C2.91294 17.25 3.58194 16.998 4.07294 16.819L4.27294 16.745C4.36421 16.7119 4.46118 16.6972 4.55817 16.702C4.65516 16.7067 4.75023 16.7308 4.83783 16.7726C4.92543 16.8145 5.00381 16.8735 5.06839 16.946C5.13297 17.0185 5.18245 17.1032 5.21394 17.195C5.28077 17.3809 5.27189 17.5856 5.18921 17.765C5.10653 17.9443 4.95667 18.0841 4.77194 18.154L4.57194 18.227C3.78688 18.534 2.9857 18.7981 2.17194 19.018C2.1148 19.0305 2.05643 19.0365 1.99794 19.036C1.8367 19.0426 1.67585 19.0157 1.52545 18.9572C1.37506 18.8987 1.23837 18.8098 1.12394 18.696C1.00328 18.5608 0.911648 18.4024 0.854713 18.2303C0.797779 18.0583 0.776754 17.8764 0.792942 17.696C0.794797 17.6462 0.801158 17.5966 0.811943 17.548C0.99125 16.7842 1.22109 16.0333 1.49994 15.3C1.51873 15.1945 1.50184 15.0858 1.45194 14.991L1.26194 14.617C0.0544723 12.2706 -0.185834 9.54458 0.592525 7.02313C1.37088 4.50169 3.10597 2.38547 5.42594 1.12799C6.82362 0.3866 8.3818 -0.000702279 9.96394 9.55952e-07H9.97594C11.2892 0.000591904 12.5894 0.259847 13.8024 0.76294C15.0155 1.26603 16.1175 2.00313 17.0457 2.93213C17.9739 3.86113 18.71 4.96383 19.212 6.17731C19.714 7.39079 19.972 8.6913 19.9714 10.0045C19.9709 11.3177 19.7116 12.618 19.2085 13.831C18.7054 15.044 17.9683 16.1461 17.0393 17.0743C16.1103 18.0024 15.0076 18.7385 13.7941 19.2405C12.5806 19.7425 11.2802 20.0006 9.96694 20C9.25711 19.9995 8.54949 19.9207 7.85694 19.765L7.85094 19.762ZM13.1139 10C13.1181 9.77017 13.19 9.54665 13.3207 9.35754C13.4514 9.16844 13.635 9.02216 13.8485 8.93701C14.062 8.85187 14.2959 8.83168 14.5208 8.87897C14.7458 8.92626 14.9518 9.03891 15.1129 9.20282C15.2741 9.36673 15.3832 9.57464 15.4267 9.80035C15.4702 10.0261 15.446 10.2596 15.3572 10.4716C15.2685 10.6837 15.1191 10.8647 14.9278 10.9922C14.7365 11.1196 14.5118 11.1878 14.2819 11.188C14.1272 11.1867 13.9743 11.155 13.8319 11.0945C13.6895 11.0341 13.5603 10.9463 13.4519 10.8359C13.3434 10.7256 13.2578 10.595 13.1998 10.4516C13.1418 10.3082 13.1126 10.1547 13.1139 10ZM8.79994 10C8.80408 9.77017 8.876 9.54665 9.00667 9.35754C9.13735 9.16844 9.32096 9.02216 9.53448 8.93701C9.74799 8.85187 9.9819 8.83168 10.2068 8.87897C10.4318 8.92626 10.6378 9.03891 10.7989 9.20282C10.9601 9.36673 11.0692 9.57464 11.1127 9.80035C11.1562 10.0261 11.132 10.2596 11.0432 10.4716C10.9545 10.6837 10.8051 10.8647 10.6138 10.9922C10.4225 11.1196 10.1978 11.1878 9.96794 11.188C9.81324 11.1867 9.66032 11.155 9.51789 11.0945C9.37547 11.0341 9.24635 10.9463 9.13789 10.8359C9.02943 10.7256 8.94376 10.595 8.88577 10.4516C8.82779 10.3082 8.79862 10.1547 8.79994 10ZM4.47194 10C4.47628 9.77018 4.54838 9.54672 4.67922 9.35773C4.81006 9.16873 4.9938 9.02259 5.20739 8.93762C5.42097 8.85266 5.65489 8.83271 5.8798 8.88019C6.10471 8.92767 6.31059 9.04048 6.4716 9.20453C6.63261 9.36858 6.7416 9.57655 6.78487 9.80231C6.82814 10.0281 6.80378 10.2615 6.71485 10.4735C6.62591 10.6855 6.47636 10.8665 6.28495 10.9938C6.09354 11.1211 5.86881 11.189 5.63894 11.189C5.48391 11.1881 5.33057 11.1566 5.18774 11.0963C5.04491 11.036 4.91538 10.948 4.80659 10.8376C4.6978 10.7271 4.61188 10.5963 4.55377 10.4526C4.49566 10.3088 4.46649 10.155 4.46794 10H4.47194Z"
               fill="#7A86A1"
            />
         </svg>
      ),
      badge: 6,
   },
];

const Sidebar = () => {
   const { verifyAuth } = useAuth()
   const navigate = useNavigate()
   async function handleLogout() {
      const loading = toast.loading("Logging out...");
      try {
         const { data } = await axios.post('/v2/logout');

         if (data) {
            localStorage.removeItem("allowPrivate");
            localStorage.removeItem("collegeProfileId");
         }
         navigate('/signin')
         await verifyAuth()
         toast.dismiss(loading)
         toast.success('Logout successfully')
      } catch (err) {
         console.log(err);
         toast.dismiss(loading);
         toast.error("Failed to log out !!");
      }
   }

   return (
      <SidebarStyles>
         <div className="logo">
            <Link to="/dashboard">
               <img src={Logo} alt="" />
            </Link>
         </div>

         <div className="side-nav-main">
            <ul>
               {firstNav.map((item, index) => (
                  <SideNavLink key={index} link={item.link} icon={item.icon} title={item.title} />
               ))}
            </ul>

            <ul>
               {secNav.map((item, index) => (
                  <SideNavLink key={index} badge={item?.badge} link={item.link} icon={item.icon} title={item.title} />
               ))}
            </ul>
         </div>

         <div className="sidebar-bottom">
            <div className="pb-2 flex items-center justify-between">
               <div className="profile active relative w-[45px] aspect-square rounded-[18px]">
                  <img src={ProfileImage} alt="" className="h-full w-full object-cover rounded-[18px]" />
               </div>

               <div className="flex items-center gap-[10px]">
                  <button className="w-[40px] aspect-square rounded-full flex items-center justify-center">
                     <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M13.473 15.058C13.4901 14.0768 13.8957 13.1425 14.6007 12.4599C15.3058 11.7774 16.2528 11.4023 17.234 11.417C17.5165 11.4167 17.7981 11.4472 18.074 11.508C18.1847 11.5301 18.2899 11.5739 18.3836 11.6369C18.4772 11.6999 18.5574 11.7808 18.6196 11.875C18.6817 11.9692 18.7245 12.0749 18.7455 12.1857C18.7665 12.2966 18.7653 12.4106 18.742 12.521V12.528C18.6847 12.752 18.5421 12.9447 18.3445 13.0649C18.147 13.1851 17.9103 13.2232 17.685 13.171C17.1645 13.059 16.6209 13.1564 16.1717 13.4422C15.7226 13.7279 15.404 14.1791 15.285 14.698C15.2594 14.8157 15.2446 14.9356 15.241 15.056C15.241 15.5865 15.4517 16.0952 15.8268 16.4702C16.2019 16.8453 16.7106 17.056 17.241 17.056C17.7714 17.056 18.2801 16.8453 18.6552 16.4702C19.0303 16.0952 19.241 15.5865 19.241 15.056C19.2412 14.9481 19.2322 14.8404 19.214 14.734C19.1967 14.6221 19.2017 14.5078 19.2288 14.3978C19.2559 14.2879 19.3045 14.1843 19.3718 14.0932C19.4391 14.0021 19.5238 13.9252 19.621 13.867C19.7182 13.8087 19.8259 13.7704 19.938 13.754C20.1652 13.7145 20.3988 13.7657 20.5886 13.8966C20.7784 14.0275 20.9093 14.2276 20.953 14.454C20.9871 14.6522 21.0042 14.8529 21.004 15.054C20.9879 16.041 20.5845 16.9821 19.8809 17.6744C19.1772 18.3667 18.2296 18.7547 17.2425 18.7547C16.2554 18.7547 15.3078 18.3667 14.6041 17.6744C13.9005 16.9821 13.4971 16.041 13.481 15.054L13.473 15.058ZM1.881 15.911C1.6545 15.911 1.43729 15.8211 1.27713 15.6609C1.11697 15.5007 1.02699 15.2835 1.02699 15.057C1.02699 14.8305 1.11697 14.6133 1.27713 14.4531C1.43729 14.293 1.6545 14.203 1.881 14.203H9.116C9.34249 14.203 9.55971 14.293 9.71986 14.4531C9.88002 14.6133 9.97 14.8305 9.97 15.057C9.97 15.2835 9.88002 15.5007 9.71986 15.6609C9.55971 15.8211 9.34249 15.911 9.116 15.911H1.881ZM0.998993 3.71102C0.999055 3.50989 1.01645 3.30917 1.05099 3.11104C1.0945 2.88452 1.22531 2.68419 1.41519 2.55324C1.60507 2.42229 1.8388 2.3712 2.06599 2.41103C2.17817 2.42727 2.28602 2.4656 2.3833 2.52376C2.48059 2.58192 2.56539 2.65877 2.6328 2.7499C2.70021 2.84102 2.74889 2.9446 2.77605 3.05464C2.8032 3.16469 2.80829 3.27899 2.791 3.39101C2.71031 3.79498 2.75602 4.214 2.92191 4.59108C3.08779 4.96816 3.3658 5.28501 3.71812 5.49849C4.07045 5.71198 4.47997 5.81176 4.89101 5.78426C5.30204 5.75676 5.69464 5.60332 6.01538 5.34481C6.33612 5.08629 6.56945 4.73525 6.68362 4.33943C6.7978 3.94362 6.78727 3.52221 6.65349 3.13259C6.5197 2.74296 6.26914 2.40401 5.9359 2.16182C5.60265 1.91963 5.2029 1.78596 4.791 1.77901C4.63129 1.77665 4.47186 1.79311 4.31599 1.82802C4.0909 1.88256 3.85339 1.8462 3.65495 1.72676C3.45652 1.60733 3.31317 1.41445 3.256 1.19002C3.23148 1.08 3.22905 0.966214 3.24883 0.855242C3.2686 0.744271 3.3102 0.638314 3.37122 0.543536C3.43223 0.448757 3.51145 0.367002 3.60428 0.303057C3.69711 0.239112 3.8017 0.194271 3.912 0.171038C4.87738 -0.0532316 5.89224 0.111936 6.73663 0.630816C7.58103 1.1497 8.18693 1.98046 8.423 2.94301C8.4822 3.19587 8.51405 3.45435 8.51801 3.71401C8.48249 4.68789 8.07065 5.61003 7.36911 6.28646C6.66757 6.96288 5.73103 7.34084 4.7565 7.34084C3.78197 7.34084 2.84543 6.96288 2.14389 6.28646C1.44235 5.61003 1.03051 4.68789 0.994995 3.71401L0.998993 3.71102ZM12.881 4.56502C12.6545 4.56502 12.4373 4.47505 12.2771 4.3149C12.117 4.15474 12.027 3.93751 12.027 3.71102C12.027 3.48452 12.117 3.26729 12.2771 3.10713C12.4373 2.94698 12.6545 2.85701 12.881 2.85701H20.114C20.3405 2.85701 20.5577 2.94698 20.7179 3.10713C20.878 3.26729 20.968 3.48452 20.968 3.71102C20.968 3.93751 20.878 4.15474 20.7179 4.3149C20.5577 4.47505 20.3405 4.56502 20.114 4.56502H12.881Z"
                           fill="#7A86A1"
                        />
                     </svg>
                  </button>
                  <button onClick={handleLogout} className="w-[40px] aspect-square rounded-full flex items-center justify-center">
                     <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M5.30899 18.971C4.17793 18.9833 3.08813 18.5466 2.27852 17.7566C1.46891 16.9667 1.00554 15.888 0.98999 14.757C0.991165 14.6601 1.01141 14.5643 1.04959 14.4753C1.08777 14.3862 1.14313 14.3055 1.21249 14.2378C1.28186 14.1701 1.36388 14.1167 1.45387 14.0807C1.54387 14.0447 1.64007 14.0268 1.73698 14.028C1.8339 14.0267 1.93013 14.0444 2.02017 14.0803C2.11022 14.1162 2.19232 14.1694 2.26178 14.237C2.33124 14.3046 2.3867 14.3852 2.425 14.4743C2.4633 14.5633 2.48368 14.659 2.48499 14.756C2.495 15.4953 2.7978 16.2006 3.327 16.717C3.85619 17.2335 4.56859 17.519 5.30798 17.511H10.042C10.7792 17.5198 11.4899 17.2357 12.0178 16.721C12.5458 16.2064 12.848 15.5032 12.858 14.766V13.874C12.858 13.6751 12.937 13.4843 13.0777 13.3437C13.2183 13.203 13.4091 13.124 13.608 13.124C13.8069 13.124 13.9977 13.203 14.1383 13.3437C14.279 13.4843 14.358 13.6751 14.358 13.874V14.766C14.3417 15.8942 13.8785 16.97 13.0702 17.7574C12.2619 18.5447 11.1743 18.9793 10.046 18.966L5.30899 18.971ZM16.821 12.771C16.7532 12.7056 16.699 12.6275 16.6614 12.5411C16.6238 12.4548 16.6036 12.3618 16.6019 12.2677C16.6003 12.1735 16.6172 12.08 16.6517 11.9923C16.6862 11.9047 16.7376 11.8247 16.803 11.757L16.821 11.739L18.377 10.229H8.51999C8.32638 10.229 8.1407 10.1521 8.0038 10.0152C7.8669 9.87827 7.78998 9.6926 7.78998 9.49899C7.78998 9.30539 7.8669 9.11966 8.0038 8.98276C8.1407 8.84586 8.32638 8.76895 8.51999 8.76895H20.19C20.3368 8.76816 20.4806 8.81059 20.6035 8.89096C20.7264 8.97134 20.8229 9.08613 20.881 9.22098C20.938 9.35522 20.9529 9.50363 20.9236 9.64652C20.8943 9.7894 20.8222 9.91999 20.717 10.021L17.878 12.778C17.7361 12.9149 17.5467 12.9914 17.3495 12.9914C17.1523 12.9914 16.9628 12.9149 16.821 12.778V12.771ZM0.98999 11.442V4.22696C1.00659 3.09894 1.46964 2.02349 2.27769 1.23624C3.08575 0.448988 4.17291 0.0141235 5.30098 0.0269482H10.035C11.1664 0.014131 12.2567 0.450585 13.0667 1.24057C13.8768 2.03056 14.3404 3.10962 14.356 4.241V5.12399C14.356 5.32291 14.277 5.51368 14.1363 5.65433C13.9957 5.79498 13.8049 5.87399 13.606 5.87399C13.4071 5.87399 13.2163 5.79498 13.0757 5.65433C12.935 5.51368 12.856 5.32291 12.856 5.12399V4.241C12.846 3.50145 12.543 2.79605 12.0136 2.27957C11.4842 1.7631 10.7715 1.47772 10.032 1.48599H5.29999C4.5629 1.47745 3.85254 1.76165 3.32478 2.27628C2.79703 2.79091 2.495 3.49392 2.48499 4.23099V11.446C2.48499 11.6449 2.40597 11.8356 2.26532 11.9763C2.12467 12.1169 1.9339 12.196 1.73499 12.196C1.53607 12.196 1.3453 12.1169 1.20465 11.9763C1.064 11.8356 0.984985 11.6449 0.984985 11.446L0.98999 11.442ZM17.54 7.95096L16.824 7.26096C16.7562 7.19572 16.7019 7.11776 16.6642 7.03153C16.6266 6.94529 16.6063 6.85247 16.6045 6.75839C16.6027 6.66431 16.6195 6.57083 16.6539 6.48325C16.6883 6.39566 16.7397 6.31569 16.805 6.24796L16.824 6.22897C16.9655 6.09135 17.1551 6.01431 17.3525 6.01431C17.5499 6.01431 17.7395 6.09135 17.881 6.22897L18.596 6.918C18.6641 6.98306 18.7187 7.06089 18.7567 7.14707C18.7948 7.23324 18.8154 7.32603 18.8176 7.4202C18.8197 7.51436 18.8033 7.60802 18.7692 7.69583C18.7351 7.78364 18.6841 7.8639 18.619 7.93198L18.601 7.94998C18.4598 8.08758 18.2707 8.16499 18.0735 8.16593C17.8763 8.16686 17.6865 8.09125 17.544 7.95499L17.54 7.95096Z"
                           fill="#7A86A1"
                        />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </SidebarStyles>
   );
};

export default Sidebar;
