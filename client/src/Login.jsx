import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './login.css'


function Login() {
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        } else alert("NO DATA FOUND!");
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="login-container">
  <div className="login-card">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email"><strong>Email</strong></label>
        <input
          type="email"
          placeholder="Enter Email"
          autoComplete="off"
          name="email"
          onChange={(e) => SetEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password"><strong>Password</strong></label>
        <input
          type="password"
          placeholder="Enter Password"
          autoComplete="off"
          name="password"
          onChange={(e) => SetPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-login">Login</button>
    </form>
    <p>Does not Have an Account?</p>
    <Link to={"/register"} className="btn-register">Register</Link>
  </div>
</div>

  );
}

export default Login;