import React from "react";
import app from "./base";
import {MDBIcon,MDBListGroup,MDBListGroupItem, MDBBtn,MDBInput, MDBRow,MDBCard,MDBContainer, MDBCardBody, MDBCardImage,MDBCardHeader, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class  Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {title: '',description:'',content:"",news:[]};
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch(process.env.REACT_APP_APIURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            news: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  handleSubmit(event) {
  console.log(this.state)

    fetch(process.env.REACT_APP_APIURL, {
      method: 'POST',
      body: JSON.stringify({title:this.state.title,content:this.state.content,description:this.state.description}),
        headers: {
        'Content-Type': 'application/json'
       },
    }).then(function(response) {
      console.log(response)
      return response.json();
    }).catch((error) => {
      console.log(error);
    });
    event.preventDefault();
  }
  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }
  
  handleChangeDesc(event) {
    this.setState({description: event.target.value});
  }
  handleChangeContent(event) {
    this.setState({content: event.target.value});
  }
  render() {
    const { error, isLoaded, news } = this.state;
  return (
    <MDBContainer>
    <MDBRow>
    <MDBCol className="mt-2" md='12'>
      <MDBCard>
          <MDBCardHeader><h4 className="text-center">Dashboard</h4></MDBCardHeader>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="12">
            <form onSubmit={this.handleSubmit}>
        <p className="h5 text-center mb-4">Dodaj newsa</p>
        <div className="grey-text">
          <MDBInput label="Tytuł" value={this.state.title} onChange={this.handleChangeTitle} icon="user" group type="text" required validate error="wrong"
            success="right" />
          <MDBInput value={this.state.description} onChange={this.handleChangeDesc} type="textarea" rows="2" label="Opis" icon="pencil-alt" />
          <MDBInput value={this.state.content} onChange={this.handleChangeContent} type="textarea" rows="6" label="Treść" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn onClick={this.handleSubmit} type="submit"  color="primary">
            Zapisz
            <MDBIcon far icon="save" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
         
            </MDBCol>
          </MDBRow>
          <MDBRow>
    <MDBCol md="12">
      <h4 className="text-center mt-2">Lista newsów</h4>
    <MDBListGroup >
    {news.map(item => (
    <MDBListGroupItem>{item.title}</MDBListGroupItem>
    ))}
  </MDBListGroup>
    </MDBCol>
    </MDBRow>
          <div className="text-center">
        <MDBBtn onClick={() => app.auth().signOut()} color="blue-grey" >Wyloguj</MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBRow>
   
    </MDBContainer>
 

  );
}
};

export default Dashboard;