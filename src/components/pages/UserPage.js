import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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

  goToComment = id => {
    this.props.history.push(
      this.props.history.location.pathname + "/comments=" + id
    );
  };

  render() {
    const { userId } = this.props.match.params;

    if (!userId.length) return <Redirect to="/" />;

    const { users } = this.props.postsReducer;

    const { userPosts, loading, error } = this.props.usersReducer;
    // console.log("TCL: UserPage -> render -> userId", typeof userId);
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
        ) : error ? (
          <p>Error, try again</p>
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
              <MapListItems
                goToComment={this.goToComment}
                userPosts={userPosts}
              />
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

UserPage.propTypes = {
  userId: PropTypes.string,
  users: PropTypes.array,
  userPosts: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object
};
