import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";

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
  const handleLogin = (e) => {
    e.preventDefault();
  };


  const handleRegister = (e) => {
    e.preventDefault();
    toast.success('Registration Successful');
    const formData = new FormData(e.target);
    const { username, email, password} = Object.fromEntries(formData);
    console.log(username, email, password);
    try{
      
    }catch(err){
      console.log(err.message);
      toast.error('Registration Failed');
    }
  };
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="seprator"></div>
      <div className="item">
        <h2>Sign UP</h2>

        <form onSubmit={ handleRegister }>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            upload an image</label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign UP</button>
        </form>
      </div>
      
    </div>

  );
};

export default Login;
