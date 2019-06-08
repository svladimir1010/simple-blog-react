import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import MapListItems from "../ui/MapListItems";

import { selectedUser } from "../../actions/selectUser";

import {
  UserCard,
  Container,
  Information,
  CardAvatar,
  Name,
  // Position,
  ContactsBox,
  Contacts,
  Label,
  Contact,
  BackgroundImage,
  TitleUserPage,
  BoxTitlePage,
  Load
} from "./style";

class UserPage extends React.Component {
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.props.selectedUser(userId);
  }

  render() {
    const { userId } = this.props.match.params;
    if (!userId.length) return <Redirect to="/" />;

    const { users } = this.props.postsReducer;
    const { userPosts, loading } = this.props.usersReducer;

    if (!users.length) return <Redirect to="/" />;

    const user =
      users && userId && users.find(el => el.id === +userId);

    return (
      <UserCard>
        <BoxTitlePage>
          <TitleUserPage>User Page</TitleUserPage>
        </BoxTitlePage>

        {loading ? (
          <Load>Loading...</Load>
        ) : (
          <>
            <Container>
              <BackgroundImage
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cookies.jpg"
                alt="cookies"
              />

              <Information>
                <CardAvatar src={user.avatar} alt="avatar" />
                <Name>{user.name}</Name>

                <ContactsBox>
                  <Contacts>
                    <Label>User name: &nbsp; </Label>
                    <Contact>{user.username}</Contact>
                  </Contacts>

                  <Contacts>
                    <Label>Phone: &nbsp; </Label>
                    <Contact>{user.phone}</Contact>
                  </Contacts>

                  <Contacts>
                    <Label>Email: &nbsp; &nbsp; </Label>
                    <Contact>{user.email}</Contact>
                  </Contacts>
                </ContactsBox>
              </Information>
            </Container>

            <>
              <MapListItems userPosts={userPosts} />
            </>
          </>
        )}
      </UserCard>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  selectedUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
