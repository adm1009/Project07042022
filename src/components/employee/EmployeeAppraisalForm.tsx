import { render } from "@testing-library/react";
import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate, Link } from "react-router-dom";
import "../Home.css";
type props = {
  duration: string;
  goals: string;
  skills: string;
  show: boolean;
  username:any
};
class EmployeeAppraisalForm extends React.Component<
  props,
  { duration: string; goals: string; skills: string; show: boolean;username:any }
> {
  constructor(props: props) {
    super(props);

    this.state = {
      duration: "",
      goals: "",
      skills: "",
      show: false,
      username:this.props.username
    };
    
    this.submitForm = this.submitForm.bind(this);
  }
  durationHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({duration:e.target.value})
  }
  goalsHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({goals:e.target.value})
  }
  skillsHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({skills:e.target.value})
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
    <Navigate to="/home/employeeappraisalform" />;
  };
  render() {
    return (
      <>
        <Navbar personalData leaveData employeeData username={this.props.username}/>
        <div style={{textAlign:"center"}}>
        <span style={{ textDecoration: "underline" }}>
          EmployeeAppraisalForm
        </span>
        <hr />
        {!this.state.show && (
          <form onSubmit={this.submitForm}>
            <span>Appraisal Duration:- </span>
            <input
              type="text"
              value={this.state.duration}
              onChange={this.durationHandler}
              name="duration"
              style={{ marginLeft:"20px",marginTop: "10px" }}
              required
            />
            <br />
            <span>Selected Goals:-</span>
            <input
              type="text"
              value={this.state.goals}
              onChange={this.goalsHandler}
              name="goals"
              style={{ marginLeft:"50px",marginTop: "10px" }}
              required
            />{" "}
            <br />
            <span>Selected Skills:- </span>
            <input
              type="text"
              value={this.state.skills}
              onChange={this.skillsHandler}
              name="skills"
              style={{ marginLeft:"50px",marginTop: "10px" }}
              required
            />{" "}
            <br />
            <input
              type="submit"
              value="Finalize"
              style={{
                backgroundColor: "cornflowerblue",
                marginTop: "30px",
                color: "white",
                border: "none",
                fontSize: "15px",
              }}
            />
          </form>
        )}
        {this.state.show && (
          <span style={{ color: "green" }}>
            Appraisal Data Added Successfully
          </span>
        )}
        {this.state.show && (
          <table id="data" style={{ marginLeft: "450px" }}>
            <thead>
              <tr>
                <td>
                  <h3>AppraisalDuration </h3>
                </td>
                <td>
                  <h3>SelectedGoals </h3>
                </td>
                <td>
                  <h3>SelectedSkills </h3>
                </td>
                <td>
                  <h3>Edit </h3>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.duration}</td>
                <td>{this.state.goals}</td>
                <td>{this.state.skills}</td>
                <td>
                  <span onClick={this.editHandler}>
                    <Link to="/employeeappraisalform">Edit</Link>
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
export default EmployeeAppraisalForm;
