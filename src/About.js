import React from "react";
import { withRouter, Redirect } from "react-router";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const About = () => {


  return (
    <MDBContainer>
    <MDBRow>
      <MDBCol md="12">
       o mnie 
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
};

export default withRouter(About);