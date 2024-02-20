import React from "react";

const User = ({name, location}) => {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Twitter: @Anujdubey20</h3>
    </div>
  );
};

export default User;
