import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/danuj828");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, twitter_username } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Twitter: {twitter_username}</h3>
      </div>
    );
  }
}

export default UserClass;
