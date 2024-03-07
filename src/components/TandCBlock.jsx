import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 150px;

  .tnc-left {
    flex: 1;
    .tnc-condition {
      .label {
        padding-bottom: 14px;
        p {
          font-weight: 400;
          font-size: 25px;
          line-height: 33px;
          color: #60269e;
        }
      }

      .field {
        max-width: 577px;
        height: 182px;
        border: 1px solid #707070;
        border-radius: 20px;
        overflow: hidden;

        textarea {
          width: 100%;
          height: 100%;
          resize: none;
          padding: 5px 10px;
          outline: none;
        }
      }
    }
  }
  .tnc-right {
    flex: 1;

    .form-ctas {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-top: 60px;
      gap: 32px;
      button {
        background: #60269e;
        padding: 10px 52px;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #ffffff;
        border-radius: 14px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const InputFieldStyle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  .label {
    width: 130px;

    p {
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      color: #000000;
      text-transform: capitalize;
    }
  }

  .field {
    width: calc(100% - 130px);

    input {
      width: 100%;
      height: 45px;
      border: 1px solid #707070;
      border-radius: 16px;
      padding: 0 20px;
      font-weight: 400;
      font-size: 12px;
      line-height: 13px;
      color: #000;
      outline: none;
    }
  }
`;

const InputField = ({ title, name, placeholder, value, handleChange }) => {
  return (
    <InputFieldStyle>
      <div className="label">
        <p>{title}</p>
      </div>
      <div className="field">
        <input
          type="url"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    </InputFieldStyle>
  );
};

const TandCBlock = ({ info, fetchData }) => {
  console.log(info);
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState(info);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editable) {
      setFormData({ ...formData, [name]: value });
    } else {
      toast.dismiss();
      toast.error("Details Edit are not allowed !!");
    }
  };

  const handleFormSubmit = async () => {
    const loading = toast.loading("Saving Details...");
    try {
      const { data } = await axios.patch(
        `/v2/reg/clgplcysocial/edit/${formData.clgpolicyid}`,
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setEditable(false);
      fetchData();
      window.location.reload();
      toast.dismiss(loading);
      toast.success("Details Updated successfully !!");
    } catch (err) {
      console.log(err);
      toast.dismiss(loading);
      toast.error("Failed to save details !!");
    }
  };

  return (
    <Wrapper>
      <div className="tnc-left">
        <div className="tnc-condition">
          <div className="label">
            <p>TERMS & CONDITIONS</p>
          </div>
          <div className="field">
            <textarea
              name="terms_condition"
              value={formData.terms_condition}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="tnc-right">
        <div className="tnc-links-field">
          <InputField
            title={"website"}
            name="website"
            placeholder={"www.example.com"}
            value={formData.website}
            handleChange={handleChange}
          />
          <InputField
            title={"facebook"}
            name={"facebook"}
            placeholder={"www.facebook.com/example"}
            value={formData.facebook}
            handleChange={handleChange}
          />
          <InputField
            title={"youtube"}
            name={"youtube"}
            placeholder={"www.youtube.com/example"}
            value={formData.youtube}
            handleChange={handleChange}
          />
          <InputField
            title={"instagram"}
            name={"instagram"}
            placeholder={"www.Instagrame.com/college"}
            value={formData.instagram}
            handleChange={handleChange}
          />
        </div>

        <div className="bottom-ctas-styles save-cta-main">
          {editable && (
            <button
              className="cancel-btn-cta"
              onClick={() => {
                setEditable(false);
                setFormData(info);
              }}
            >
              Cancel
            </button>
          )}
          {editable ? (
            <button onClick={handleFormSubmit}>Save</button>
          ) : (
            <button
              id="editBtn"
              onClick={() => {
                setEditable(true);
              }}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default TandCBlock;
