import React from "react";
import { withRouter, Redirect } from "react-router";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const About = () => {


  return (
    <MDBContainer>
    <MDBRow>
      <MDBCol className="mt-2" md="12">
     <p>App is create by University of Gdańsk student, Damian Szymański. Goal of this project is improving his knowlegde about React</p>
     <p>Technologies used in project:
<ul>
  <li>React</li>
  <li>Firebase for authentication</li>
  <li>MongoDB</li>
</ul>
     </p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
};

export default withRouter(About);