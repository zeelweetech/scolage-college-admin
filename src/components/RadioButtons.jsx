import { RadioButton } from "primereact/radiobutton";
import styled from 'styled-components'

const Wrapper = styled.div`
   
`

const RadioButtons = ({ acdType, handleRadioChange, acdTypeOpt, readOnly, name }) => {
   return (
      <>
         {acdTypeOpt.map((item, index) => (
            <Wrapper key={index} className="flex align-items-center">
               <RadioButton  inputId={item} name={name} value={item} onChange={(e) => handleRadioChange(name,e.value)} checked={acdType == item} disabled={ readOnly } />
               <label htmlFor={item} className="ml-2">
                  {item}
               </label>
            </Wrapper>
         ))}
      </>
   );
};

export default RadioButtons;
