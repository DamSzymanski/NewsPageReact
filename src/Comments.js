import React from "react";
import app from "./base";
import { MDBBtn, MDBRow,MDBCard,MDBContainer, MDBCardBody, MDBCardImage,MDBCardHeader, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      news: []
    };
  }
  componentDidMount() {
    const newsUrl=process.env.REACT_APP_APIURL;

    fetch(newsUrl+"/comments")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          comments: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  render() {
    const { error, isLoaded, comments } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>
    } else {
      return(
        <MDBContainer className="p-5 border border-light">
            <h5 className="text-center">Komentarze</h5>
                {comments.map(item => (
            <div class="media d-block d-md-flex mt-4 mb-2">
            <img class="card-img-64 d-flex mx-auto mb-3"
                  src={item.image} alt="Avatar"/>
                     <div class="media-body text-center text-md-left ml-md-3 ml-0">
                  <p class="font-weight-bold my-0">
                    {item.name}
                  </p>
                  {item.text}
            </div>
            </div>
                  ))}
        </MDBContainer>
      )
}}
};

export default Comments;



