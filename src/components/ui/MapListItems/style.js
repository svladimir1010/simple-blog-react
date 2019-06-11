import styled from "styled-components";
const shadow = "0 0 7px rgba(0, 0, 0, 0.3)";
const border = "#CED5E0";
const lightText = "#8c98a8";

export const Container = styled.ul`
  list-style-type: none;
  margin: 0 1% 0;
  padding: 0;
  border-radius: 6px;
  box-shadow: ${shadow};
`;

export const ListContain = styled.li`
  border-bottom: 1px solid ${border};
  margin-bottom: 1%;
  padding: 1%;
`;
export const ListBody = styled.span`
  color: ${lightText};
`;

export const ListTitle = styled.h4`
  background: lavender;
  display: inline-block;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    color: blue;
  }
`;
