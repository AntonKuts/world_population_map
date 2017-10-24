import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import { Button } from "react-bootstrap";


class App extends Component {
  render() {
    return (

      <div className="wrapper container">

      <div className="row">
        <div className="logo col-xs-12 col-sm-2">
          <p> box for logo</p>
        </div>
        <div className="col-xs-12 col-sm-9 col-sm-offset-1">
          <ul className="nav nav-pills row header">
            <li role="presentation" className="batton col-xs-4 col-sm-2"><a href="">How we work</a></li>
            <li role="presentation" className="batton col-xs-4 col-sm-2"><a href="">Companies</a></li>
            <li role="presentation" className="batton col-xs-4 col-sm-2"><a href="">Testimonials</a></li>
            <li role="presentation" className="batton col-xs-4 col-sm-2"><a href="">Contact Us</a></li>
            <li role="presentation" className="batton btn btn-default navbar-btn col-xs-6 col-sm-2 right2" href="#" role="button"><a href="">Sing up</a></li>
            <li role="presentation" className="batton btn btn-default navbar-btn col-xs-6 col-sm-2" href="#" role="button"><a href="">Login</a></li>
          </ul>
        </div>
      </div>

        <div className="row slader">
          <div className="row controlAndTextForSlader">
            <a className="col-xs-2 col-sm-2" href="">
              <div className="left">
              </div>
            </a>
            <div className="textForSlader col-xs-6 col-xs-offset-1 col-sm-6 col-sm-offset-1">
            <h2>Exteding your team?</h2>
            <h5>Find a porfect match</h5>
            </div>
            <a className="col-sm-2 col-sm-offset-1 col-xs-2 col-xs-offset-1 col-sm-2 col-sm-offset-1" href="">
              <div className="right">
              </div>
            </a>
          </div>
        </div>

        <h3>How we work</h3>
        <div className="row">
          <div className="forText col-xs-12 col-sm-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <video className="border col-xs-6 col-sm-5 col-sm-offset-1" controls="controls" poster="">
          </video>
        </div>

        <h3>Featured companies</h3>
        <div className="row">
          <div className="oneCompany col-xs-6 col-sm-4">
          </div>
          <div className="oneCompany col-xs-6 col-sm-4">
          </div>
          <div className="oneCompany col-xs-6 col-sm-4">
          </div>
          <div className="oneCompany col-xs-6 col-sm-4">
          </div>
          <div className="oneCompany col-xs-6 col-sm-4">
          </div>
          <div className="oneCompany col-xs-6 col-sm-4">
          </div>
        </div>

        <div className="row">
          <Map />
        </div>

        <div className="row">
          <div className="startProfile">
            <div className="forTextAndBtnProfile">
            <p className="textProfile">Start Bulding Your Own Profile Now</p>
              <Button bsStyle="primary" bsSize="large" className="buttonProfile">Get started</Button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6 col-sm-7">
            <h3 className="leftSide">Drop us a line</h3>
            <input className="inputName" placeholder=" Name" type="text" name="Name"></input>
            <input className="inputEmail"  placeholder=" Email" type="email" name="Email"></input>
            <input className="inputMessage" placeholder=" Message" type="text" name="Message" maxLength="300"></input>
          </div>
          <div className="col-xs-6 col-sm-offset-6 col-sm-3 col-sm-offset-2">
            <h3 className="leftSide">Visit our office</h3>
            <p className="city">New york</p>
            <br/>
            <p>5 Park Avenue</p>
            <p>New York, NY 10016</p>
            <p>USA</p>
            <a href="tel:+17182425555"> +1 718.242.5555</a><br/>
            <a href="tel:+17182425556"> +1 718.242.5556</a><br/>
            <a href="mailto:nu@jobseek.com">nu@jobseek.com</a><br/>
            <p>Mon-Fri 9am- 5pm</p>
            <p>Sat 10am - 2pm</p>
            <p>Sun Closed</p>
          </div>
        </div>

        <div className="socialMedia row">
          <a href="">
            <div className="contact-icons facebook">
            </div>
          </a>
          <a href="">
            <div className="contact-icons twitter">
            </div>
          </a>
          <a href="">
            <div className="contact-icons instagram">
            </div>
          </a>
          <a href="">
            <div className="contact-icons linkedin">
            </div>
          </a>
          <a href="">
            <div className="contact-icons pinterest">
            </div>
          </a>
          <p>© 2016 SiteName - all rights reserved</p>
        </div>
      </div>
    );
  }
}

export default App;
