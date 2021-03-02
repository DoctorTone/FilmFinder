import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AuthState from "../../context/auth/AuthState";

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);

  return (
    <div>
      <p>Please enter details to login</p>
      <form action="">
        <div className="row mb-3">
          <label htmlFor="username" className="col-1 col-form-label">
            Username:
          </label>
          <div className="col-10">
            <input
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-1 col-form-label">
            Password:
          </label>
          <div className="col-5">
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter password..."
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
