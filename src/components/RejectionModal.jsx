import { styled } from "styled-components";
import { MdClose } from "react-icons/md";
import ClickAwayListener from "react-click-away-listener";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    background: #fff;
    max-width: 720px;
    width: 100%;
    padding: 32px 40px 40px 32px;
    border-radius: 20px;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 25px;

      p {
        color: #707070;
        font-size: 24px;
        font-weight: 400;
        line-height: normal;
      }

      .student-application-no {
        display: flex;
        align-items: center;
        gap: 20px;

        p {
          color: #707070;
          font-size: 24px;
          font-weight: 700;
          line-height: normal;
        }

        input {
          border: 1px solid #707070;
          border-radius: 10px;
          height: 40px;
          padding: 8px;
          outline: none;
          width: 240px;
        }
      }

      button {
        font-size: 30px;
      }
    }
    .body {
      padding-bottom: 24px;
      textarea {
        width: 100%;
        height: 205px;
        border-radius: 10px;
        border: 1px solid #707070;
        padding: 10px;
        resize: none;
        outline: none;
      }
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      button {
        background: #ff6c3e;
        width: 170px;
        padding: 8px;
        border-radius: 14px;
        color: #fffefe;
        font-size: 23px;
        font-weight: 400;
        line-height: normal;
      }
    }
    .error {
      color: #b51212;
      margin-bottom: 4px;
      font-size: 16px;
    }
  }
`;

const RejectionModal = ({ setShowModal, isAccepted, id, record }) => {
  const [values, setValues] = useState();
  const [errors, setErrors] = useState();

  const habdleSubmit = async () => {
    if (values) {
      try {
        const body = {
          studentid: record?.studentid,
          collegeid: record?.collegeid,
          subjectid: record?.subjectid,
          result: isAccepted ? "accept" : "reject",
          acceptNote: values,
          applicationNo: id,
        };
        await axios.patch(`/v2/stdappli/accept-reject/api`, body, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setShowModal(false);
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong");
      }
    } else {
      setErrors("Please enter reason!");
    }
  };
  return (
    <Wrapper>
      <ClickAwayListener onClickAway={() => setShowModal(false)}>
        <div className="modal">
          <div className="header">
            {isAccepted ? (
              <div className="student-application-no">
                <p>Student Application no:</p>
                <input type="text" value={id} disabled />
              </div>
            ) : (
              <p>Reason of rejection:</p>
            )}
            <button onClick={() => setShowModal(false)}>
              <MdClose />
            </button>
          </div>
          <div className="body">
            <textarea
              name="note"
              value={values}
              onChange={(e) => {
                setValues(e.target.value), setErrors("");
              }}
            ></textarea>
            {errors && <p className="error">{errors}</p>}
          </div>
          <div className="footer">
            <button onClick={() => habdleSubmit()}>Send</button>
          </div>
        </div>
      </ClickAwayListener>
    </Wrapper>
  );
};

export default RejectionModal;
