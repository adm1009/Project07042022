import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Auth from "./Auth";
import "./Home.css"
type props = {
  username: any;
  password: string;
  show: boolean;
  showError: boolean
};
class Home extends React.Component<
  props,
  { username: any; password: string; show: boolean; showError:boolean}
> {
  constructor(props: props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      show: false,
      showError:false
    };
  }
   count =0;
  submitForm = async (e: any) => {
    e.preventDefault();
    await fetch(`https://623ae79df8827fbe47aaf15a.mockapi.io/login?search=${this.state.username}`).then((data: any) => {
      data.json()
      .then((resp: any) => {
        console.warn("resp",resp);
        if(resp.length>0){
             Auth.authenticate();
             this.setState({show:true});
             this.props.username(this.state.username);
        }
        else{
          this.setState({showError:true})
          this.setState({username:"",password:""})
        }
      });
    });
  };

  render() {
    return (
      <div>
        {!this.state.show && (
          <h3 style={{ backgroundColor: "cornflowerblue", color: "white" ,textAlign:"center"}}>
            Welcome to Infogen Labs Pvt.Ltd
          </h3>
        )}
        {this.state.show && <Navbar personalData leaveData employeeData username={this.state.username}/>}
        {!this.state.show && (
          <>
          <h4 style={{fontFamily:"sans-serif",marginTop:"-18px",textAlign:"center"}}>Sign in</h4>
          <form onSubmit={this.submitForm} className={this.state.showError ? "cardError" :"card"}>
            <section style={{marginTop:"10px"}}>
            <span style={{marginLeft:"30px"}}>User Name:- </span>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              style={{marginLeft:"10px"}}
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
              required
            />
            <br />
            </section>
             <section style={{marginTop:"5px"}}>
            <span style={{marginLeft:"30px"}}>Password:- </span>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              style={{marginLeft:"20px"}}
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />
            </section>
            <input type="submit" value="Sign in" className="loginbutton"/>
            {this.state.showError && <h4 style={{color:"red" ,marginTop:"-1px",marginLeft:"125px"}}>Please enter correct username and password</h4>}
          </form>
          </>
        )}
        
      </div>
    );
  }
}

export default Home;
