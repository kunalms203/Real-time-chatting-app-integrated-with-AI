import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [avatar, setavatar] = useState({
    file: null,
    url: "",
  });
  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setavatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back</h2>
        <form>
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="seprator"></div>
      <div className="item">
        <h2>Sign UP</h2>

        <form>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            upload image</label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="Password" name="password" />
          <button>Sign UP</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
