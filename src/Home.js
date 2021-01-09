import React from "react";
import faker from "faker";
import app from "./base";
import { MDBBtn, MDBRow,MDBCard,MDBContainer, MDBCardBody, MDBCardImage,MDBCardHeader, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
class Home extends React.Component {
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

    fetch(newsUrl)
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
      <h3 className="text-center mt-2">Najświeższe newsy ze świata</h3>
    <MDBRow >
        {news.map(item => (
    <MDBCol key={item._id} md='4'>
      
      <MDBCard style={{marginTop: "10px",marginBottom:"10px"}}>
      <MDBCardImage className="img-fluid" src={faker.image.image()} waves />
        <MDBCardBody>
          <MDBCardTitle className="text-center">{item.title}</MDBCardTitle>
          <MDBCardText>
          {item.description}
          </MDBCardText>
          <div className="text-center">
          <MDBBtn color="blue-grey" href={"/news/"+item._id}>Więcej</MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
      ))}

    </MDBRow>
    </MDBContainer>
  );}
}
};

export default Home;