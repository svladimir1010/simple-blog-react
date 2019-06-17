import styled from "styled-components";

const text = "#303336";
const lightText = "#8c98a8";
const border = "#CED5E0";
const shadow = "0 0 7px rgba(0, 0, 0, 0.3)";

// ====== Home Page ======

export const Box = styled.div`
  display: flex;
  border-bottom: 1px solid grey;

  :hover {
    transition: 0.3s;
  }
`;
export const BoxPost = styled.div`
  width: 100%;
  padding: 10px;
  transition: 0.3s;
`;
export const BoxUserAvatar = styled.div`
  width: 100px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background: ${border};
  }
`;

export const BoxTitlePage = styled.div`
  box-shadow: ${shadow};
  background: lavender;
  border-bottom: 2px solid grey;
  width: 85%;
  padding: 10px;
  position: fixed;
  top: 0px;
`;

export const TitleHomePage = styled.h3`
  cursor: pointer;
  color: grey;
  transition: 0.3s;
  :hover {
    color: black;
  }
`;

export const BoxAllPostPage = styled.div`
  box-shadow: ${shadow};
  width: 85%;
  margin: auto;
  position: relative;
  top: 50px;
`;

export const PostsBody = styled.span`
  color: grey;
`;

export const PostsTitle = styled.h3``;

export const Avatar = styled.img`
  width: 60px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  text-align: center;
  font-size: 12px;
  color: grey;
`;
// ====== User Page  ======

export const UserCard = styled.div`
  box-shadow: ${shadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 85%;
  color: ${text};
  padding: 5px 0;
  @media (max-width: 780px) {
    flex-direction: column;
    width: 95%;
  }
`;
export const Container = styled.div`
  margin: -30% 2% 0;
  width: 30%;
  min-width: 24%;
  height: 100%;
  background: white;
  border-radius: 5px;
  padding: 0 0 10px;
  box-shadow: ${shadow};
  @media (max-width: 780px) {
    width: 35%;
    margin: 10% auto 0;
    height: 100%;
    /* padding: 0 0 10px; */
  }
`;

export const Information = styled.div`
  text-align: center;
  border-radius: 5px;
`;
export const CardAvatar = styled.img`
  margin: 0 auto;
  width: 65%;
  margin: -95px auto 15px;
  display: block;
`;
export const Name = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Position = styled.div`
  font-size: 15px;
  color: ${lightText};
  margin-bottom: 10px;
`;

export const ContactsBox = styled.div`
  margin: auto;
  border-top: 1px solid ${border};
  text-align: left;
`;

export const Contacts = styled.span`
  display: inline-block;
  padding: 6px 10px 0;
  border-bottom: 1px solid rgb(243, 243, 243);
  right: 100px;
`;
export const Label = styled.span`
  color: ${lightText};
  font-size: 14px;
`;

export const Contact = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const BackgroundImage = styled.img`
  width: 100%;
`;

export const TitleUserPage = styled.h3`
  cursor: pointer;
  color: grey;
  transition: 0.3s;
  :hover {
    color: black;
  }
`;

export const Load = styled.p`
  position: relative;
  margin-top: 50px;
  top: 0px;
  height: 100%;
`;

export const BoxComment = styled.ul`
  list-style-type: none;
  margin: 1% 1% 0;
  padding: 3%;
  border-radius: 6px;
  box-shadow: ${shadow};
`;

export const IdComment = styled.li`
  margin: 5px;
`;

// ====== Button ======

export const Button = styled.button`
  display: inline-block;
  position: relative;

  background-color: lavender;
  background-image: linear-gradient(
    hsla(0, 0%, 100%, 0.6),
    hsla(0, 0%, 100%, 0) 50%,
    hsla(0, 0%, 0%, 0.3) 50%,
    hsla(0, 0%, 100%, 0.2)
  );
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  padding: 10px 30px;
  text-shadow: 0 0 15px hsla(0, 0%, 100%, 1);

  border: none;
  border-radius: 50px;
  margin: 30px 15px;
  box-shadow: inset 0 -5px 20px hsla(0, 0%, 0%, 0.4);

  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s;
  :before {
    display: block;
    position: absolute;
    left: 20px;
    right: 20px;
    top: 5px;
    height: 30px;
    border-radius: 15px;
    background: linear-gradient(
      hsla(0, 0%, 100%, 0.8),
      hsla(0, 0%, 100%, 0)
    );
  }
  :hover {
    transform: scale(1.05);
    box-shadow: inset 0 -5px 20px hsla(0, 0%, 0%, 0.4);
  }
  :focus {
    outline: none;
  }
`;

// === === Form ======

export const WrapperForm = styled.div`
  padding: 15px;
  margin: 0;
  border: 0;
  outline: 0;
  max-width: inherit;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Headline = styled.h2`
  text-align: center;
`;
