import React from "react";
import { loginUrl } from "../Helpers/spotify";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      {/* Login with spotify button */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
