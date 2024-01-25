import styled from "styled-components";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   padding-bottom: 25px;
   label {
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      color: #000000;
      padding-bottom: 10px;
   }

   input {
      padding: 15px 20px;
      border: 1px solid #707070;
      border-radius: 15px;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #000;
      outline: none;

      &::placeholder {
         text-transform: capitalize;
      }
   }
`;

const FormInput = ({ title, type, name, placeholder, id }) => {
   return (
      <Wrapper>
         <label htmlFor={id}>{title}</label>
         <input type={type} placeholder={placeholder} name={name} id={id} required />
      </Wrapper>
   );
};

export default FormInput;
