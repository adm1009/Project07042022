import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate, Link } from "react-router-dom";
import "../Home.css";
type props = {
  date: string;
  reason: string;
  show: boolean;
  username:any
};

class LeaveData extends React.Component<
  props,
  { date: string; reason: string; show: boolean;username:any }
> {
  constructor(props: props) {
    super(props);

    this.state = {
      date: "",
      reason: "",
      show: false,
      username:this.props.username
    };
    this.submitForm = this.submitForm.bind(this);
  }
 dateHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{
   this.setState({date:e.target.value})
 }
 resonHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{
  this.setState({reason:e.target.value})
}
  submitForm = () => {
    localStorage.setItem("details", JSON.stringify(this.state));
    this.setState({
      show: true,
    });
  };
  editHandler = () => {
    this.setState({
      show: false,
    });
    <Navigate to="/home/leavedata" />;
  };
  render() {
    return (
      <>
        <Navbar personalData leaveData employeeData username={this.props.username}/>
        <span style={{ textDecoration: "underline",marginLeft:"550px" }}>Leave Details</span>
        <hr />
        {!this.state.show && (
          <form onSubmit={this.submitForm}>
            <section style={{marginLeft:"450px"}}>
            <span style={{marginLeft:"50px"}}>Date:- </span>
            <input
              type="text"
              value={this.state.date}
              onChange={this.dateHandler}
              name="date"
              style={{marginLeft:"60px",marginTop: "10px"}}
              required
            />
            <span style={{marginTop:"10px"}}>YYYY-MM-DD</span>
            </section>
          <section style={{marginLeft:"478px"}}>
            <span style={{position:"absolute",marginLeft:"20px",marginTop:"10px"}}>Reason:- </span>
            <input
              type="text"
              value={this.state.reason}
              onChange={this.resonHandler}
              name="reason"
              style={{marginLeft:"125px",marginTop: "10px" }}
              required
            />
            </section>
            <input
              type="submit"
              value="Apply"
              style={{
                backgroundColor: "cornflowerblue",
                marginTop: "30px",
                marginLeft:"600px",
                color: "white",
                border: "none",
                fontSize: "15px",
              }}
            />
          </form>
        )}
        {this.state.show && (
          <span style={{ color: "red" ,marginLeft:"550px"}}>Applied for Leave</span>
        )}
        {this.state.show && (
          <table id="data" style={{ marginLeft: "530px" }}>
            <thead>
              <tr>
                <td>
                  <h3>Date</h3>
                </td>
                <td>
                  <h3>Reason</h3>
                </td>
                <td>
                  <h3>Edit</h3>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.date}</td>
                <td>{this.state.reason}</td>
                <td>
                  <span onClick={this.editHandler}>
                    <Link to="/leavedata">Edit</Link>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </>
    );
  }
}
export default LeaveData;
