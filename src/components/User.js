import React from "react";

function User(props) {
  let { user_id, city } = props;
  return (
    <div>
      {user_id} {city}
    </div>
  );
}
export default User;
