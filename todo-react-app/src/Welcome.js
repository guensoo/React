import React from "react";

function WelcomeMessage(props) {
  return (
    <div>
      {props.isLoggedIn && <p>Welcome back!</p>}
    </div>
  );
}

export default WelcomeMessage;