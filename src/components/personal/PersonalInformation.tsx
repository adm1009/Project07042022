import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./personal.css";
import Table from 'react-bootstrap/Table'
import "../Home.css"
type props = {
  employeecode: string;
  firstname: string;
  middlename: string;
  lastname: string;
  gender: string;
  dateofbirth: string;
  mobileno: string;
  emailid: string;
  address: string;
  passportno: string;
  bloodgroup: string;
  show: boolean;
  username:any
};
class PersonalInformation extends React.Component<
  props,
  {
    employeecode: string;
    firstname: string;
    middlename: string;
    lastname: string;
    gender: string;
    dateofbirth: string;
    mobileno: string;
    emailid: string;
    address: string;
    passportno: string;
    bloodgroup: string;
    show: boolean;
    username:any
  }
> {
  constructor(props: props) {
    super(props);
    this.state = {
      employeecode: "",
      firstname: "",
      middlename: "",
      lastname: "",
      gender: "",
      dateofbirth: "",
      mobileno: "",
      emailid: "",
      address: "",
      passportno: "",
      bloodgroup: "",
      show: false,
      username:this.props.username
    };
    this.submitForm = this.submitForm.bind(this);
  }
  employeecodeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ employeecode: e.target.value });
  };
  firstnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ firstname: e.target.value });
  };
  middlenameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ middlename: e.target.value });
  };
  lastnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ lastname: e.target.value });
  };
  genderHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };
  dateofbirthHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ dateofbirth: e.target.value });
  };
  mobilenoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ mobileno: e.target.value });
  };
  emailidHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ emailid: e.target.value });
  };
  addressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ address: e.target.value });
  };
  passportnoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ passportno: e.target.value });
  };
  bloodgroupHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ bloodgroup: e.target.value });
  };
  submitForm = () => {
    localStorage.setItem("personalinfodetails", JSON.stringify(this.state));
    this.setState({
      show: true,
    });
  };
  editHandler = () => {
    this.setState({
      show: false,
    });
    <Navigate to="/personalinformation" />;
  };
  render() {
    return (
       <>
        <Navbar personalData leaveData employeeData username={this.props.username}/>
        <div style={{textAlign:"center"}}>
        <span style={{ textDecoration: "underline" }}>
          Personal Information Details
        </span>
        <hr />
        {!this.state.show && (
          <form onSubmit={this.submitForm}>
            <span>Employee Code:- </span>
            <input
              type="text"
              value={this.state.employeecode}
              name="employeecode"
              onChange={this.employeecodeHandler}
              style={{ marginLeft:"60px",marginTop: "10px" }}
              required
            />
            <br />
            <span>FirstName:- </span>
            <input
              type="text"
              value={this.state.firstname}
              name="firstname"
              onChange={this.firstnameHandler}
              style={{ marginLeft:"90px",marginTop: "10px" }}
              required
            />
            <br />
            <span>MiddleName:- </span>
            <input
              type="text"
              value={this.state.middlename}
              name="middlename"
              onChange={this.middlenameHandler}
              style={{marginLeft:"75px", marginTop: "10px" }}
              required
            />
            <br />
            <span>LastName:- </span>
            <input
              type="text"
              value={this.state.lastname}
              name="lastname"
              onChange={this.lastnameHandler}
              style={{marginLeft:"90px", marginTop: "10px" }}
              required
            />
            <br />
            <span>Gender:- </span>
            <input
              type="text"
              value={this.state.gender}
              name="gender"
              onChange={this.genderHandler}
              style={{marginLeft:"105px", marginTop: "10px" }}
              required
            />
            <br />
            <span>Date of Birth:- </span>
            <input
              type="text"
              value={this.state.dateofbirth}
              name="dateofbirth"
              onChange={this.dateofbirthHandler}
              style={{ marginLeft:"70px",marginTop: "10px" }}
              required
            />
            <br />
            <span>Mobile No:- </span>
            <input
              type="text"
              value={this.state.mobileno}
              name="mobileno"
              onChange={this.mobilenoHandler}
              style={{ marginLeft:"80px",marginTop: "10px" }}
              required
            />
            <br />
            <span>Email Id:- </span>
            <input
              type="text"
              value={this.state.emailid}
              name="emailid"
              onChange={this.emailidHandler}
              style={{ marginLeft:"90px",marginTop: "10px" }}
              required
            />
            <br />
            <span>Address:- </span>
            <input
              type="text"
              value={this.state.address}
              name="address"
              onChange={this.addressHandler}
              style={{ marginLeft:"95px",marginTop: "10px" }}
              required
            />
            <br />
            <span>Passport No:- </span>
            <input
              type="text"
              value={this.state.passportno}
              name="passportno"
              onChange={this.passportnoHandler}
              style={{marginLeft:"70px", marginTop: "10px" }}
              required
            />
            <br />
            <span>Blood Group:- </span>
            <input
              type="text"
              value={this.state.bloodgroup}
              name="bloodgroup"
              onChange={this.bloodgroupHandler}
              style={{ marginLeft:"60px",marginTop: "10px" }}
              required
            />
            <br />
            <input
              type="submit"
              value="Submit Data"
              style={{
                marginTop: "30px",
                backgroundColor: "cornflowerblue",
                color: "white",
                border: "none",
                fontSize: "15px",
              }}
            />
          </form>
        )}
        {this.state.show && (
          <span style={{ color: "green" }}>
            Personal Information Added Successfully
          </span>
        )}
        {this.state.show && (
          <table id="data" style={{marginLeft:"150px"}}>
            <thead>
              <tr>
                <td>
                  <h3>Employeecode </h3>
                </td>
                <td>
                  <h3>Firstname </h3>
                </td>
                <td>
                  <h3>Middlename </h3>
                </td>
                <td>
                  <h3>Lastname </h3>
                </td>
                <td>
                  <h3>Gender </h3>
                </td>
                <td>
                  <h3>DateOfBirth </h3>
                </td>
                <td>
                  <h3>Mobileno </h3>
                </td>
                <td>
                  <h3>Emailid </h3>
                </td>
                <td>
                  <h3>Address</h3>
                </td>
                <td>
                  <h3>Passportno</h3>
                </td>
                <td>
                  <h3>Bloodgroup</h3>
                </td>
                <td>
                  <h3>Edit </h3>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.employeecode}</td>
                <td>{this.state.firstname}</td>
                <td>{this.state.middlename}</td>
                <td>{this.state.lastname}</td>
                <td>{this.state.gender}</td>
                <td>{this.state.dateofbirth}</td>
                <td>{this.state.mobileno}</td>
                <td>{this.state.emailid}</td>
                <td>{this.state.address}</td>
                <td>{this.state.passportno}</td>
                <td>{this.state.bloodgroup}</td>
                <td>
                  <span onClick={this.editHandler}>
                    <Link to="/personalinformation">Edit</Link>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      </>
    );
  }
}
export default PersonalInformation;
