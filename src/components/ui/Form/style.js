import styled from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
`;
export const BoxField = styled.div`
  display: flex;
  flex-flow: row;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 30px 25px;
`;
export const LabelField = styled.label`
  font-weight: 700;
  margin-right: 10px;
  min-width: 150px;
  text-align: right;
  padding: 9px 13px;
`;
export const Fields = styled.div`
  flex: 1;
  max-width: 500px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: column nowrap;
  flex-flow: column;
  position: relative;
`;
export const BoxButton = styled.div`
  display: flex;
  -ms-flex-flow: row nowrap;
  flex-flow: row;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 10px 5px;
`;
export const Button = styled.button`
  font-size: 18px;
  color: #fff;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 5px;
  background-image: linear-gradient(#4f93ce, #285f8f);
`;
