import React, { useState } from "react";
import "./login.css";

const Login2 = () => {
  const [Inputtext, setInputtext] = useState({ username: "", password: "" });

  const [click, setClick] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputtext({
      ...Inputtext,
      [e.target.name]: value,
    });
  };
  const clear = () => {
    setInputtext({ username: "", password: "" });
  };

  return (
    <>
      <div className="Login-page">
        <p>This is your login page </p>
        <div className="Login-page-card">
          <div>
            <p> Username:</p>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              value={Inputtext.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <p> Password:</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={Inputtext.password}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="Buttons">
        <button onClick={clear}>Clear</button>
        <button onClick={() => setClick(true)}>Submit</button>

        {click && (
          <div>
            <p>{Inputtext.username}</p>
            <p>{Inputtext.password}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Login2;