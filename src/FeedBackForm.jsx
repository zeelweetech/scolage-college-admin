import { FiMoreHorizontal } from "react-icons/fi";
import Layout from "./components/Layout";
import { styled } from "styled-components";
import { MdClose } from "react-icons/md";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useEffect } from "react";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import ClickAwayListener from "react-click-away-listener";
import { Dropdown } from "primereact/dropdown";
import SearchIcon from "./Icons/SearchIcon";
import FeedbackListItem from "./components/feedbackListItem";

const Wrapper = styled.div`
   display: flex;

   .feedback-block-left-main {
      width: calc(100% - 578px);
      padding-right: 42px;

      .feedback-block-left-in {
         border: 1px solid #707070;
         border-radius: 20px;
         height: 100%;
         padding: 34px 60px 60px;

         .feedback-form-title-main {
            padding-bottom: 24px;
            h3 {
               color: #60269e;
               font-family: Segoe UI;
               font-size: 30px;
               font-weight: 700;
               line-height: normal;
            }
         }

         .feedback-form-header-main {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 24px;

            .receiver-name {
               color: #000;
               font-family: Segoe UI;
               font-size: 18px;
               font-weight: 400;
               line-height: normal;
            }

            .feedback-form-right-ctas {
               display: flex;
               align-items: center;
               gap: 20px;
               button {
                  height: 45px;
                  width: 45px;
                  border-radius: 20px;
                  border: 1px solid #707070;
                  display: flex;
                  align-items: center;
                  color: #707070;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 22px;
               }
            }
         }

         .feedback-form-subject-field {
            padding-bottom: 20px;
            border-bottom: 1px solid #707070;
            input {
               padding: 12px 20px;
               border: 1px solid #707070;
               border-radius: 16px;
               outline: none;
               color: #000;
               font-size: 14px;
               font-weight: 400;
               line-height: normal;
               width: 100%;
               max-width: 420px;
            }
         }

         .feedback-form-main {
            .write-msg-main {
               .epr-preview {
                  display: none;
               }

               .message-text-field {
                  display: flex;
                  flex-direction: column-reverse;
                  .ql-toolbar {
                     border: none;
                     padding-inline: 0;
                     order: -1;
                     transform: translateY(2px);
                     .ql-formats {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        button {
                           height: 36px;
                           width: 36px;
                           border: 1px solid #707070;
                           border-radius: 15px;
                           display: flex;
                           align-items: center;
                           justify-content: center;

                           svg {
                              width: 18px;
                           }
                        }
                     }
                  }
                  .ql-container {
                     border: none;
                     height: 475px;
                     border-bottom: 1px solid #707070;
                     margin-bottom: 30px;
                  }
                  .ql-editor {
                     padding-inline: 0;
                     font-family: "Noto Color Emoji", sans-serif;
                     font-size: 20px;
                     &.ql-blank::before {
                        left: 0px;
                     }

                     p {
                        font-size: 20px;
                        font-family: "Noto Color Emoji", sans-serif;
                     }
                  }

                  .textarea-extra-btns {
                     display: flex;
                     align-items: center;
                     justify-content: space-between;
                     margin-left: 138px;
                     position: relative;
                     z-index: 9999;
                     margin-bottom: -55px;

                     .emoji-picker-main {
                        position: absolute;
                        left: 0;
                        bottom: 100%;
                     }

                     .send-btn {
                        min-width: 140px;
                        height: 55px;
                        background: #60269e;
                        color: #fff;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: normal;
                        border-radius: 20px;
                     }
                     .left-btns {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        button,
                        label {
                           height: 36px;
                           width: 36px;
                           border: 1px solid #707070;
                           border-radius: 15px;
                           display: flex;
                           align-items: center;
                           justify-content: center;
                        }
                     }
                  }
               }

               .attachment-prev-main {
                  display: flex;
                  align-items: center;
                  flex-wrap: wrap;
                  gap: 10px;

                  .attachment-prev {
                     width: 92px;
                     height: 70px;
                     border-radius: 18px;
                     background: #707070;
                     overflow: hidden;
                     position: relative;

                     img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                     }

                     .cancel-attach {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        height: 20px;
                        width: 20px;
                        border-radius: 8px;
                        background: #fff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        display: none;
                     }

                     &:hover {
                        .cancel-attach {
                           display: flex;
                        }
                     }
                  }
               }
            }
         }
      }
   }

   .feedback-block-right-main {
      width: 578px;
      border: 1px solid #707070;
      border-radius: 20px;
      padding: 28px;

      .feedback-right-header {
         display: flex;
         align-items: center;
         gap: 24px;
         padding: 0 0 10px 16px;
         .feedback-search-block-main {
            border: 1px solid #707070;
            border-radius: 20px;
            overflow: hidden;
            width: 100%;
            height: 45px;
            position: relative;

            label {
               position: absolute;
               top: 50%;
               left: 14px;
               transform: translateY(-50%);
            }

            input {
               height: 100%;
               width: 100%;
               outline: none;
               border: none;
               padding: 12px 45px;
               color: #000;
               font-family: Segoe UI;
               font-size: 14px;
               font-weight: 400;
               line-height: normal;
            }
         }

         .feedback-list-filter {
            height: 45px;

            .p-dropdown {
               height: 100%;
               border: 1px solid #707070;
               border-radius: 20px;
               box-shadow: none;

               .p-dropdown-label {
                  padding-right: 0;
                  padding-block: 4px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
               }
            }
         }
      }
   }

   @media (min-width: 768px) and (max-width: 1440px) {
      flex-direction: column-reverse;
      gap: 40px;

      .feedback-block-left-main {
         width: 100%;
         padding: 0;

         .feedback-block-left-in {
            padding: 24px 40px 40px;
         }
      }
      .feedback-block-right-main {
         width: 100%;
      }
   }

   @media (min-width: 1441px) and (max-width: 1880px) {
      .feedback-block-left-main {
         width: calc(100% - 478px);
      }
      .feedback-block-right-main {
         width: 478px;
      }
   }
`;

const FeedBackForm = () => {
   const modules = {
      toolbar: [["bold", "italic", "underline"]],
   };
   const { quill, quillRef } = useQuill({ modules, placeholder: "Enter your Messages" });
   const [value, setValue] = useState(null);
   const [viewEmojiPicker, setViewEmojiPicker] = useState(false);
   const [imageAttachments, setImageAttachments] = useState([]);
   const [imagePreview, setImagePreview] = useState([]);

   const [selectedFilter, setSelectedFilter] = useState("Recent");
   const filters = ["Recent", "Old", "This Month", "This Year"];

   useEffect(() => {
      if (quill) {
         quill.on("text-change", (delta, oldDelta, source) => {
            setValue(quill.root.innerHTML);
         });
      }
   }, [quill]);

   const onEmojiClick = (emoji, event) => {
      quill.root.innerHTML += emoji.emoji;
      console.log(emoji.emoji);
   };

   const handleImageFileChange = (e) => {
      const files = [...e.target.files];
      console.log(files);
      var tempAttaches = [];
      var tempPreview = [];
      for (const f of files) {
         tempAttaches.push(f);
         tempPreview.push(URL.createObjectURL(f));
      }
      setImageAttachments(tempAttaches);
      setImagePreview(tempPreview);
      console.log(imageAttachments);
   };

   const handleRemoveImage = (index) => {
      var tempAttaches = [...imageAttachments];
      var tempPreview = [...imagePreview];
      tempAttaches.splice(index, 1);
      tempPreview.splice(index, 1);
      setImageAttachments(tempAttaches);
      setImagePreview(tempPreview);
   };

   return (
      <Layout headerTitle={"Feedback Form"}>
         <Wrapper>
            <div className="feedback-block-left-main">
               <div className="feedback-block-left-in">
                  <div className="feedback-form-title-main">
                     <h3>SUGGESTION & FEEDBACK FORM</h3>
                  </div>
                  <div className="feedback-form-header-main">
                     <div className="receiver-name">
                        <p>St. Joseph High School</p>
                     </div>
                     <div className="feedback-form-right-ctas">
                        <button>
                           <FiMoreHorizontal />
                        </button>
                        <button>
                           <MdClose />
                        </button>
                     </div>
                  </div>
                  <div className="feedback-form-subject-field">
                     <input type="text" placeholder="Subject" />
                  </div>

                  <div className="feedback-form-main">
                     <div className="write-msg-main">
                        <div className="message-text-field">
                           <div className="textarea-extra-btns">
                              <div className="left-btns">
                                 <button onClick={() => setViewEmojiPicker((prev) => !prev)}>
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M7.50005 0.999847C5.7555 0.966921 4.056 1.55475 2.70464 2.65854C1.35327 3.76233 0.437906 5.31033 0.121876 7.02634C-0.194154 8.74234 0.109698 10.5148 0.979175 12.0276C1.84865 13.5404 3.22725 14.6951 4.86907 15.2859C4.69224 14.9139 4.5994 14.5076 4.5971 14.0958V12.7418C4.23829 12.5417 3.92465 12.2697 3.67583 11.9427C3.42702 11.6158 3.24834 11.241 3.15105 10.8419C3.13852 10.7604 3.14708 10.6772 3.17583 10.5999C3.20458 10.5227 3.25262 10.454 3.31536 10.4006C3.3781 10.3472 3.45341 10.3107 3.53423 10.2946C3.61505 10.2786 3.69862 10.2835 3.77703 10.3088C6.22239 10.9119 8.77771 10.9119 11.2231 10.3088C11.3015 10.2837 11.3849 10.2791 11.4656 10.2953C11.5463 10.3114 11.6216 10.348 11.6843 10.4013C11.7469 10.4547 11.7949 10.5231 11.8238 10.6002C11.8526 10.6773 11.8613 10.7605 11.849 10.8419C11.7518 11.241 11.5731 11.6158 11.3243 11.9427C11.0755 12.2697 10.7618 12.5417 10.403 12.7418V14.0958C10.4007 14.5076 10.3079 14.9139 10.131 15.2859C11.7729 14.6951 13.1514 13.5404 14.0209 12.0276C14.8904 10.5148 15.1943 8.74234 14.8782 7.02634C14.5622 5.31033 13.6468 3.76233 12.2955 2.65854C10.9441 1.55475 9.2446 0.966921 7.50005 0.999847ZM5.0811 7.89987C4.89353 7.89672 4.711 7.83816 4.55657 7.73166C4.40213 7.62515 4.28267 7.47545 4.21306 7.30124C4.14345 7.12703 4.12681 6.93614 4.16533 6.75253C4.20385 6.56893 4.29574 6.4008 4.42949 6.26926C4.56325 6.13771 4.73294 6.04861 4.91716 6.01315C5.10138 5.9777 5.29199 5.99741 5.46502 6.06992C5.63804 6.14242 5.78578 6.26443 5.8897 6.42062C5.99361 6.57681 6.04897 6.76024 6.049 6.94784C6.04808 7.07395 6.02236 7.19866 5.97319 7.31479C5.92403 7.43092 5.85242 7.53617 5.7625 7.6246C5.67259 7.71303 5.56608 7.78294 5.44915 7.83017C5.33221 7.87739 5.20721 7.90106 5.0811 7.89987ZM9.92009 7.89987C9.73252 7.89672 9.54999 7.83816 9.39556 7.73166C9.24112 7.62515 9.12166 7.47545 9.05205 7.30124C8.98244 7.12703 8.9658 6.93614 9.00432 6.75253C9.04284 6.56893 9.13473 6.4008 9.26848 6.26926C9.40224 6.13771 9.57193 6.04861 9.75615 6.01315C9.94037 5.9777 10.131 5.99741 10.304 6.06992C10.477 6.14242 10.6248 6.26443 10.7287 6.42062C10.8326 6.57681 10.888 6.76024 10.888 6.94784C10.8871 7.07395 10.8614 7.19866 10.8122 7.31479C10.763 7.43092 10.6914 7.53617 10.6015 7.6246C10.5116 7.71303 10.4051 7.78294 10.2881 7.83017C10.1712 7.87739 10.0462 7.90106 9.92009 7.89987ZM8.86504 11.9059C8.76273 11.8613 8.65189 11.8398 8.54033 11.8427C8.42878 11.8457 8.31931 11.8732 8.21953 11.9232C8.11976 11.9732 8.03213 12.0445 7.96294 12.132C7.89375 12.2196 7.84459 12.3213 7.81902 12.4299L7.76506 12.6618C7.75091 12.7205 7.7174 12.7728 7.66997 12.8102C7.62254 12.8475 7.56396 12.8678 7.50359 12.8678C7.44322 12.8678 7.38452 12.8475 7.33709 12.8102C7.28965 12.7728 7.25615 12.7205 7.24199 12.6618L7.18706 12.4299C7.16149 12.3213 7.11233 12.2196 7.04314 12.132C6.97395 12.0445 6.88644 11.9732 6.78667 11.9232C6.6869 11.8732 6.5773 11.8457 6.46575 11.8427C6.35419 11.8398 6.24335 11.8613 6.14104 11.9059C6.11404 11.9179 6.15002 11.8999 5.56902 12.1859V14.0609C5.57644 14.567 5.78185 15.0501 6.14116 15.4067C6.50048 15.7633 6.98519 15.9649 7.49138 15.9685C7.99758 15.972 8.48492 15.7771 8.84917 15.4256C9.21342 15.0741 9.42551 14.5939 9.43999 14.0879V12.1878C8.84899 11.8998 8.88806 11.9208 8.86406 11.9078L8.86504 11.9059Z"
                                          fill="#7A86A1"
                                       />
                                    </svg>
                                 </button>
                                 <label htmlFor="message-file">
                                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M4.12593 18C3.01815 17.9821 1.96258 17.5259 1.19038 16.7314C0.41819 15.9369 -0.0077003 14.8688 0.00593639 13.761V4.06104C-0.00983486 3.00099 0.395837 1.97801 1.13387 1.21692C1.87189 0.455827 2.88194 0.0187984 3.94197 0.00195312H8.60201C8.70987 0.00405651 8.81244 0.0488794 8.88741 0.126465C8.96237 0.20405 9.00352 0.308145 9.00191 0.416016V3.31604C8.99411 4.10014 9.29602 4.85563 9.842 5.41846C10.388 5.98129 11.1339 6.30599 11.9179 6.32202C12.2909 6.32202 12.6179 6.32203 12.9069 6.32703H13.9659C14.1659 6.32703 14.394 6.32703 14.597 6.32703C14.7019 6.32886 14.8018 6.37184 14.8753 6.44666C14.9488 6.52147 14.99 6.62217 14.9899 6.72705V13.963C15.0047 15.0181 14.6003 16.0361 13.8657 16.7936C13.131 17.5511 12.1261 17.9864 11.071 18.004L4.12593 18ZM4.13496 12.277C4.13438 12.4527 4.20251 12.6218 4.32491 12.7479C4.44731 12.8741 4.6143 12.9473 4.78999 12.952H9.53792C9.71353 12.9471 9.88029 12.8738 10.0026 12.7477C10.125 12.6216 10.1933 12.4527 10.1929 12.277C10.1937 12.1902 10.1775 12.1041 10.145 12.0236C10.1125 11.9431 10.0644 11.8698 10.0036 11.8079C9.94279 11.7459 9.87038 11.6965 9.79048 11.6626C9.71059 11.6287 9.62472 11.6108 9.53792 11.61H4.7889C4.61393 11.6118 4.44689 11.683 4.3243 11.8079C4.2017 11.9327 4.13363 12.102 4.13496 12.277ZM4.13496 7.78601C4.13363 7.96115 4.20185 8.12965 4.32466 8.25452C4.44747 8.37939 4.61486 8.45044 4.78999 8.45203H7.73897C7.9141 8.45044 8.08149 8.37939 8.2043 8.25452C8.32711 8.12965 8.39533 7.96115 8.394 7.78601C8.39433 7.61033 8.32604 7.44139 8.20369 7.31531C8.08134 7.18923 7.91458 7.11591 7.73897 7.11096H4.78999C4.61464 7.11591 4.44816 7.18917 4.326 7.31506C4.20385 7.44096 4.13561 7.60961 4.13594 7.78503L4.13496 7.78601ZM12.035 5.00403C11.5614 4.99431 11.1107 4.79825 10.7807 4.4585C10.4507 4.11874 10.2679 3.6626 10.2719 3.18896V0.81604C10.2695 0.70445 10.3115 0.596402 10.3885 0.515625C10.4655 0.434848 10.5714 0.387893 10.6829 0.38501C10.7402 0.384421 10.797 0.395782 10.8497 0.418335C10.9024 0.440888 10.9498 0.474121 10.989 0.515991L14.503 4.28406C14.58 4.36721 14.6216 4.47702 14.619 4.59033C14.6164 4.70364 14.5697 4.81148 14.489 4.89099C14.4127 4.96548 14.3106 5.00778 14.2039 5.00903H13.5949C13.0449 5.00903 12.476 5.00903 12.035 5.00403Z"
                                          fill="#7A86A1"
                                       />
                                    </svg>
                                 </label>
                                 <input type="file" hidden id="message-file" />
                                 <label htmlFor="message-images">
                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M11.73 13.0001H3.27002C2.41971 13.0154 1.59807 12.6929 0.985107 12.1034C0.372149 11.5139 0.0178617 10.7054 0 9.8551V5.57007C0.0175994 4.71972 0.371725 3.91112 0.984741 3.32153C1.59776 2.73195 2.41963 2.40963 3.27002 2.42517C3.29978 2.42639 3.32917 2.41868 3.35461 2.4032C3.38006 2.38772 3.40037 2.36512 3.41296 2.33813L3.45703 2.2511L3.51904 2.12512C3.71904 1.72512 3.93702 1.27807 4.07202 1.01807C4.22486 0.710068 4.46135 0.451342 4.75439 0.271484C5.04744 0.091625 5.38518 -0.0020663 5.729 0.00109795H9.26196C9.60699 -0.00286763 9.94625 0.0903987 10.2407 0.270263C10.5352 0.450127 10.773 0.709285 10.927 1.01807C11.045 1.24607 11.227 1.61016 11.397 1.96216L11.5031 2.17908L11.578 2.33813C11.5929 2.36476 11.6147 2.38691 11.6411 2.40222C11.6675 2.41753 11.6975 2.42546 11.728 2.42517C12.5785 2.40963 13.4004 2.73198 14.0135 3.32153C14.6267 3.91109 14.9812 4.71963 14.999 5.57007V9.8551C14.9812 10.7052 14.627 11.5135 14.0143 12.103C13.4015 12.6925 12.5801 13.0151 11.73 13.0001ZM7.5 4.62415C6.71978 4.621 5.969 4.92194 5.40698 5.46313C5.13554 5.72052 4.91962 6.03068 4.77258 6.37463C4.62554 6.71859 4.5505 7.08907 4.552 7.46313C4.56672 8.22895 4.88488 8.95762 5.43652 9.48901C5.98817 10.0204 6.72819 10.311 7.49402 10.2971H7.49902C8.27266 10.3006 9.01741 10.0034 9.57605 9.46814C9.84941 9.21228 10.0676 8.90329 10.2175 8.56018C10.3674 8.21707 10.4457 7.84706 10.4476 7.47266C10.4496 7.09825 10.3753 6.72735 10.229 6.38269C10.0827 6.03803 9.8677 5.72685 9.59705 5.46814L9.58398 5.45508C9.02386 4.91753 8.27632 4.61951 7.5 4.62415ZM11.707 4.45117C11.5803 4.45762 11.4583 4.50096 11.356 4.57593C11.2536 4.65089 11.1755 4.75419 11.1311 4.87305C11.0867 4.9919 11.0781 5.12107 11.1063 5.24475C11.1345 5.36844 11.1983 5.48121 11.2898 5.56909C11.3813 5.65697 11.4965 5.71619 11.6212 5.73938C11.7459 5.76257 11.8747 5.7487 11.9917 5.69958C12.1087 5.65047 12.2086 5.56817 12.2794 5.46289C12.3502 5.35761 12.3887 5.23403 12.39 5.10718C12.3893 5.01895 12.3709 4.93173 12.3359 4.85071C12.301 4.76969 12.2503 4.69649 12.1866 4.63538C12.123 4.57426 12.0478 4.52639 11.9655 4.49475C11.8831 4.46311 11.7952 4.44837 11.707 4.45117ZM7.5 9.21313C7.0269 9.22332 6.56914 9.04524 6.22729 8.71802C5.88545 8.3908 5.6875 7.94124 5.677 7.46814V7.45312C5.67452 7.22321 5.71992 6.99535 5.8103 6.78394C5.90069 6.57252 6.03411 6.38216 6.20203 6.2251C6.5478 5.8929 7.00783 5.7061 7.4873 5.70312C7.96678 5.70015 8.42918 5.88123 8.77905 6.20911C8.94867 6.36764 9.08418 6.55908 9.17737 6.77173C9.27055 6.98438 9.31945 7.21376 9.32104 7.44592C9.32264 7.67809 9.27691 7.90816 9.18665 8.12207C9.09638 8.33598 8.96345 8.52922 8.79602 8.69006C8.44855 9.02641 7.9836 9.21411 7.5 9.21313Z"
                                          fill="#60269E"
                                       />
                                    </svg>
                                 </label>
                                 <input type="file" hidden accept="image/*" multiple onChange={handleImageFileChange} id="message-images" />
                              </div>
                              <button className="send-btn">Send</button>
                              {viewEmojiPicker && (
                                 <ClickAwayListener onClickAway={() => setViewEmojiPicker(false)}>
                                    <div className="emoji-picker-main">
                                       <EmojiPicker searchDisabled previewConfig={false} onEmojiClick={onEmojiClick} height={200} />
                                    </div>
                                 </ClickAwayListener>
                              )}
                           </div>
                           <div className="attachment-prev-main">
                              {imagePreview.map((image, index) => (
                                 <div className="attachment-prev" key={index}>
                                    <img src={image} alt="" />
                                    <button className="cancel-attach" onClick={() => handleRemoveImage(index)}>
                                       <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4 4.88684L0.894043 7.99292L0.00695801 7.10583L3.11304 3.99988L0.00695801 0.893921L0.894043 0.00683594L4 3.11292L7.10596 0.00683594L7.99304 0.893921L4.88696 3.99988L7.99304 7.10583L7.10596 7.99292L4 4.88684Z" fill="#7A86A1" />
                                       </svg>
                                    </button>
                                 </div>
                              ))}
                           </div>

                           <div ref={quillRef} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="feedback-block-right-main">
               <div className="feedback-right-header">
                  <div className="feedback-search-block-main">
                     <label>
                        <SearchIcon />
                     </label>
                     <input type="text" placeholder="Search" />
                  </div>
                  <div className="feedback-list-filter">
                     <Dropdown value={selectedFilter} onChange={(e) => setSelectedFilter(e.value)} options={filters} />
                  </div>
               </div>

               <div className="feedback-list-main">
                  <FeedbackListItem />
                  <FeedbackListItem />
                  <FeedbackListItem />
               </div>
            </div>
         </Wrapper>
      </Layout>
   );
};

export default FeedBackForm;
