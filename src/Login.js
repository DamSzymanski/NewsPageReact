  
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <MDBContainer>
    <MDBRow>
      <MDBCol md="12">
        <form onSubmit={handleLogin}>
          <p className="h5 text-center mt-4 mb-4">Logowanie</p>
          <div className="grey-text">
            <MDBInput name="email" label="Email" icon="envelope" group type="email" validate error="wrong"
              success="right" />
            <MDBInput name="password"  label="Hasło" icon="lock" group type="password" validate />
          </div>
          <div className="text-center">
            <MDBBtn type="submit">Zaloguj</MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
};

export default withRouter(Login);