import styled from "styled-components";

const StyledRegister = styled.div`
  background: #ffffff;
  max-width: 900px;
  margin: auto;
  padding: 24px;
  border-radius: 10px;
`;

const StyledField = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  label {
    font-size: 20px;
    display: inline-block;
  }
  input {
    margin-left: auto;
    height: 50px;
    border-radius: 5px;
    width: 500px;
    border: 1px solid #8c8c8c;
    padding: 5px 10px;
  }
`;
const StyledHeading = styled.h2`
  font-size: 48px;
  margin-top: 0;
  text-align: center;
`;
export { StyledRegister, StyledField, StyledHeading };
