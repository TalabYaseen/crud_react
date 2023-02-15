import React,{Component} from "react";
import UserService from './UserService';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSelect,
  MDBRadio,
  MDBFile
}
from 'mdb-react-ui-kit';

class Register extends Component {
    handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(event.target.inlineRadio.value);
        const user = {first_name :event.target.First_Name.value, 
                second_name :event.target.Second_Name.value, 
                last_name :event.target.Last_Name.value, 
                Occupation :event.target.inlineRadio.value, 
                phone :event.target.Phone_Number.value, 
                password :event.target.password.value, 
                photo :event.target.photo.value, 
                email :event.target.Email.value}
                console.log(user)
                UserService.createUser(JSON.stringify(user) );
    }
    render() {
  return (
    <form onSubmit={this.handleSubmit} >
    <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>
            <h3 className="fw-bold mb-4 pb-2 pb-md-0">Registration Form</h3>
            <MDBRow>
                <MDBCol md='3'>
                <h5 className="fw-bold">Occupation: </h5>
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='Owner' label='Owner' />
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='Contractor' label='Contractor'  />
                <MDBRadio name='inlineRadio' id='inlineRadio3' value='Materials_Provider' label='Materials Provider' />
                </MDBCol>
            </MDBRow>
            <br />
            <MDBRow>
                <MDBCol md='12' className="p-m-2">
                    <MDBRow>
                        <h5 className="fw-bold mb-4 pb-2 pb-md-0">Full Name :</h5>
                        <MDBCol md='4' >
                            <MDBInput wrapperClass='mb-4' size='lg' id='First_Name' type='text' name="First_Name" label="First Name"/>
                        </MDBCol>

                        <MDBCol md='4'>
                            <MDBInput wrapperClass='mb-4' size='lg'  type='text' name="Second_Name" label="Second Name"/>
                        </MDBCol>

                        <MDBCol md='4'>
                            <MDBInput wrapperClass='mb-4' size='lg' type='text' name="Last_Name" label="Last Name"/>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>

            <MDBRow>
              <h5 className="fw-bold mb-4 pb-2 pb-md-0">Contacts :</h5>
              <MDBCol md='4'>
                <MDBInput wrapperClass='mb-4' size='lg' type='text' name="Phone_Number" label="Phone Number"/>
              </MDBCol>
              <MDBCol md='4'>
                <MDBInput wrapperClass='mb-4' size='lg' type='text' name="Email"  label="Email"/>
              </MDBCol>
              <MDBCol md='4'>
                <MDBInput wrapperClass='mb-4' size='lg' type='text' name="Email"  label="Confirm Email"/>
              </MDBCol>

            </MDBRow>

            <MDBRow>
            <h5 className="fw-bold">Account: </h5>

              <MDBCol md='4' className='align-items-center'>
                <MDBInput wrapperClass='mb-4' size='lg' type="password" name="password" label="Password"/>
              </MDBCol>
              <MDBCol md='4'>
                <MDBInput wrapperClass='mb-4' size='lg' type="password" name="re_password" label="Repeat Password "/>
              </MDBCol>
              <MDBCol md='4'>
                {/* <br /> */}
                    {/* <label className="mx-3">Choose Photo: </label> */}
                    <MDBFile label='Default file input example' id='customFile' name="photo"/>
                    {/* <button className="btn btn-outline-warning">Upload</button> */}
              </MDBCol>

            </MDBRow>
            <MDBBtn type="Submit" className='mb-4 bg-warning border-warning text-dark' size='lg' >Submit</MDBBtn>

          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
    </form>
  )};
}

export default Register;