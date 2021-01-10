import React from "react";
import app from "./base";
import axios from 'axios';
import {MDBIcon,MDBListGroup,MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter ,MDBListGroupItem, MDBBtn,MDBInput, MDBRow,MDBCard,MDBContainer, MDBCardBody, MDBCardImage,MDBCardHeader, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
class  Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {title: '',titleEdit:'',descriptionEdit:'',contentEdit:'',currentId:'',description:'',content:"",news:[],modal: false};
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    
    this.handleChangeTitleEdit = this.handleChangeTitleEdit.bind(this);
    this.handleChangeDescEdit = this.handleChangeDescEdit.bind(this);
    this.handleChangeContentEdit = this.handleChangeContentEdit.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
  }
  componentDidMount() {
   this.getData()
  }
  toggle(event) {
    console.log(event)
    if(event!=null){
      this.setState({
        modal: !this.state.modal,
        titleEdit:event.title,
          contentEdit:event.content,
          descriptionEdit:event.description,
          currentId:event._id
      });
    }
    else{
      this.setState({
        modal: !this.state.modal,
        titleEdit:"",
          contentEdit:"",
          descriptionEdit:""
      });
    }
    
  }
  handleSubmitEdit(event) {
    const user = app.auth().currentUser;
    const token = user && (user.getIdToken().then(x=>{
      const payload = {
        title:this.state.titleEdit,
        content:this.state.contentEdit,
        description:this.state.descriptionEdit,
        id:this.state.currentId
      }
      const payloadHeader = {
        headers: {
          method:'POST',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${x}`
        },
      };
      try {
        const res =  axios.patch(process.env.REACT_APP_APIURL,payload, payloadHeader).then(x=>{
if(x.status==200||x.status==204){
  toast.success('Pomyślnie edytowano nowego newsa', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  this.getData()
  this.toggle(null)
  return x.data;
}
else{
  toast.error('Błąd edycji newsa', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}
});
    } catch (e) {
        console.error(e);
        toast.error('Błąd edycji newsa', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    }));
    event.preventDefault();
  }

  handleSubmit(event) {
    const user = app.auth().currentUser;
    const token = user && (user.getIdToken().then(x=>{
      const payload = {
        title:this.state.title,
        content:this.state.content,
        description:this.state.description
      }
      const payloadHeader = {
        headers: {
          method:'POST',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${x}`
        },
      };
      try {
        const res =  axios.post(process.env.REACT_APP_APIURL,payload, payloadHeader).then(x=>{
if(x.status==200||x.status==204){
  toast.success('Pomyślnie dodano nowego newsa', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  this.getData()
  return x.data;
}
else{
  toast.error('Błąd dodawania newsa', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}
});
    } catch (e) {
        console.error(e);
        toast.error('Błąd dodawania newsa', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    }));
    event.preventDefault();
  }

  getData(){
    fetch(process.env.REACT_APP_APIURL)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          news: result
        });
      },
      (error) => {
        toast.error(' Błąd pobierania danych', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        this.setState({
          error
        });
      }
    )
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
  
  handleChangeTitleEdit(event) {
    this.setState({titleEdit: event.target.value});
  }
  
  handleChangeDescEdit(event) {
    this.setState({descriptionEdit: event.target.value});
  }
  handleChangeContentEdit(event) {
    this.setState({contentEdit: event.target.value});
  }
  delete(event){
    const user = app.auth().currentUser;
    const token = user && (user.getIdToken().then(x=>{
      const payload = {
        title:this.state.title,
        content:this.state.content,
        description:this.state.description
      }
      const payloadHeader = {
        headers: {
          method:'DELETE',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${x}`
        },
      };
      try {
        const res =  axios.delete(process.env.REACT_APP_APIURL+"/"+event._id,payload, payloadHeader).then(x=>{
if(x.status==200||x.status==204){
  toast.success('Pomyślnie usunięto newsa', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  this.getData()
  return x.data;
}
else{
  toast.error('Błąd usuwania newsa', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}
});
    } catch (e) {
        console.error(e);
      }
    }));
  }
  render() {
    const { error, isLoaded, news } = this.state;
  return (
    <MDBContainer>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
<ToastContainer />
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
          <MDBInput label="Tytuł" value={this.state.title} onChange={this.handleChangeTitle} icon="align-justify" group type="text" required validate error="wrong"
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
    <MDBListGroupItem key={item._id}>{item.title}
    <MDBIcon style={{color:'red',cursor: 'pointer'}} onClick={()=>this.delete(item)} far icon="trash-alt" className="ml-1" />
    <MDBIcon style={{color:'blue',cursor: 'pointer'}} onClick={()=>this.toggle(item)} far icon="edit" className="ml-1" />
    </MDBListGroupItem>
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
    <MDBModal isOpen={this.state.modal} toggle={()=>this.toggle(null)}>
        <MDBModalHeader toggle={()=>this.toggle(null)}>Edycja newsa</MDBModalHeader>
        <MDBModalBody>
        <MDBRow>
            <MDBCol md="12">
            <form onSubmit={this.handleSubmit}>
        <div className="grey-text">
          <MDBInput label="Tytuł" value={this.state.titleEdit} onChange={this.handleChangeTitleEdit} icon="align-justify" group type="text" required validate error="wrong"
            success="right" />
          <MDBInput value={this.state.descriptionEdit} onChange={this.handleChangeDescEdit} type="textarea" rows="2" label="Opis" icon="pencil-alt" />
          <MDBInput value={this.state.contentEdit} onChange={this.handleChangeContentEdit} type="textarea" rows="6" label="Treść" icon="pencil-alt" />
        </div>
      </form>
         
            </MDBCol>
          </MDBRow>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="light" onClick={()=>this.toggle(null)}>Anuluj</MDBBtn>
          <MDBBtn onClick={this.handleSubmitEdit} color="dark">Zapisz zmiany</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
 

  );
}
};

export default Dashboard;