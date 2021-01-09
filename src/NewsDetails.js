import React from "react";
import app from "./base";
import Comments from "./Comments"
import { MDBBtn, MDBRow,MDBCard,MDBContainer, MDBCardBody, MDBCardImage,MDBCardHeader, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
class NewsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      news: null,
      comments: null
    };
  }
  componentDidMount() {
    const newsUrl=process.env.REACT_APP_APIURL;
var id=this.props.match.params.id;
    fetch(newsUrl+"/"+id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            news: result
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
    const { error, isLoaded, news } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>
    } else {
  return (
    <MDBContainer>
    <MDBRow>
    <MDBCol className="mt-2" md='12'>
      <MDBCard>
          <MDBCardHeader><h4 className="text-center">{news.title}</h4></MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>{news.description}</MDBCardTitle>
          <MDBCardText>{news.content}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBRow>
    <Comments/>
    </MDBContainer>
  );}
}
};

export default NewsDetails;