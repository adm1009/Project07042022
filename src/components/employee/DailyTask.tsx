import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate, Link } from "react-router-dom";
import "../Home.css";
type props = {
  project: string;
  task: string;
  time: string;
  status: string;
  blockingissue: string;
  responsibleperson: string;
  show: boolean;
  username:any
};
class DailyTask extends React.Component<
  props,
  {
    project: string;
    task: string;
    time: string;
    status: string;
    blockingissue: string;
    responsibleperson: string;
    show: boolean;
    username:any
  }
> {
  constructor(props: props) {
    super(props);

    this.state = {
      project: "",
      task: "",
      time: "",
      status: "in progress",
      blockingissue: "",
      responsibleperson: "",
      show: false,
      username:this.props.username
    };
   
    this.submitForm = this.submitForm.bind(this);
  }
  projectHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({project:e.target.value})
  }
  taskHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({task:e.target.value})
  }
 timeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({time:e.target.value})
  }
  blockingissueHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({blockingissue:e.target.value})
  }
  responsiblepersonHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({responsibleperson:e.target.value})
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
    <Navigate to="/dailytask" />;
  };
  render() {
    return (
      <>
        <Navbar personalData leaveData employeeData username={this.props.username}/>
        <span style={{ marginLeft:"550px",textDecoration: "underline" }}>Daily Task Details</span>
        <hr />
        {!this.state.show && (
          <form onSubmit={this.submitForm}>
            <section style={{textAlign:"center"}}>
            <span>Project:- </span>
            <input
              type="text"
              name="project"
              style={{ marginLeft:"75px",marginTop: "10px" }}
              onChange={this.projectHandler}
              value={this.state.project}
              required
            />
            <br />
            <span>Task:- </span>
            <input
              type="text"
              name="task"
              style={{ marginLeft:"90px",marginTop: "10px" }}
              onChange={this.taskHandler}
              value={this.state.task}
              required
            />
            <br />
            <span>Time(in Hrs):- </span>
            <input
              type="text"
              name="time"
              style={{ marginLeft:"40px",marginTop: "10px" }}
              onChange={this.timeHandler}
              value={this.state.time}
              required
            />
            </section>
            <span style={{marginLeft:"480px"}}>Status:- </span>
            <select
              style={{ marginLeft:"85px",marginTop: "10px" }}
              onChange={(e:any)=>this.setState({status:e.target.value})}
              value={this.state.status}
            >
              <option value="in progress">in progress</option>
              <option value="completed">completed</option>
            </select>
            <br />
            <section style={{textAlign:"center"}}>
            <span>Blocking Issue:- </span>
            <input
              type="text"
              name="blockingissue"
              style={{ marginLeft:"30px",marginTop: "10px" }}
              onChange={this.blockingissueHandler}
              value={this.state.blockingissue}
              required
            />
            <br />
            <span>Responsible Person:- </span>
            <input
              type="text"
              name="responsibleperson"
              style={{ marginTop: "10px" }}
              onChange={this.responsiblepersonHandler}
              value={this.state.responsibleperson}
              required
            />
            <br />
            <input
              type="submit"
              value="Submit Task"
              style={{
                backgroundColor: "cornflowerblue",
                marginTop: "30px",
                color: "white",
                border: "none",
                fontSize: "15px",
              }}
            />
            </section>
          </form>
        )}
        {this.state.show && (
          <span style={{ color: "green" ,marginLeft:"550px"}}>Daily Task updated!</span>
        )}
        <br />
        {this.state.show && (
          <table id="data" style={{ marginLeft:"350px"}}>
            <thead>
              <tr>
                <td>
                  <h3>Project </h3>
                </td>
                <td>
                  <h3>Task </h3>
                </td>
                <td>
                  <h3>Time </h3>
                </td>
                <td>
                  <h3>Status </h3>
                </td>
                <td>
                  <h3>BlockingIssues </h3>
                </td>
                <td>
                  <h3>ResponsiblePerson</h3>
                </td>
                <td>
                  <h3>Edit</h3>{" "}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.project}</td>
                <td>{this.state.task}</td>
                <td>{this.state.time}</td>
                <td>{this.state.status}</td>
                <td>{this.state.blockingissue}</td>
                <td>{this.state.responsibleperson}</td>
                <td>
                  <span onClick={this.editHandler}>
                    <Link to="/dailytask">Edit</Link>
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
export default DailyTask;
