import React, { Component } from 'react'

import moduleCss from './Style.module.css'
import Header from './Header'
import Footer from './Footer'

export default class ContactUs extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       uname:'',
       email:'',
       phone:'', 

    } 
  }
   changeUname=(e)=>{
  this.setState({
    uname:e.target.value,
  })
  // alert(e.target.value)
   }

   changeEmail=(r)=>{
    this.setState({
      email:r.target.value
    })
    
   }

   changePhone=(f)=>{
    this.setState({
     phone:f.target.value
    })
   }
   submitHandler=((e)=>{
    e.preventDefault();
    let alphaExp=/^[a-zA-Z]+$/;
    let emailExp=/^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;
    let numExp=/^[0-9]+$/;
  
    let {uname,email,phone}=this.state;
    if(uname===""){
      document.getElementById("unameNote").innerHTML="please enter uname";
    }
      else {
       if(uname.length<3){
        document.getElementById("unameNote").innerHTML="enter uname minimum 3 characters";
       }
       else if(uname.match(alphaExp)){
         document.getElementById("unameNote").innerHTML="";
        }
       
        else{
          document.getElementById("unameNote").innerHTML="please enter characters only"
        }
      }
      
      if(email===""){
        document.getElementById("emailNote").innerHTML="please enter email";
      }
        else {
        
         if(email.match(emailExp)){
          document.getElementById("emailNote").innerHTML="";
         }else{
          document.getElementById("emailNote").innerHTML="please enter email valid format"
         }
          
        }

      if(phone===""){
        document.getElementById("phoneNote").innerHTML="please enter phone number";
      }
        else {

          if(phone.length<10 || phone.length>10 ){
            document.getElementById("phoneNote").innerHTML="enter phone number in valid format";
           }
            else if(phone.match(numExp)){
              document.getElementById("phoneNote").innerHTML="";
             }else{
              document.getElementById("phoneNote").innerHTML="please enter numbers only";
             }
        }

   
   })


  render() {
    return (
      <div>

        <Header></Header>
        <div className={moduleCss}>
          <div className={moduleCss.breadCrumb}>
            <h3>CONTACT US</h3>
          </div>
        </div>

        <div className="container my-5 ">
          <div className="row " >
            <div className="col-lg-8 col-sm-12    mt-5">
              <form
                className="h-auto bg-black p-5  "
                onSubmit={this.submitHandler}
              >
                <div className="row ">
                  <div className="col-md-6  ">
                    <input
                      type="text"
                      name="uname"
                      value={this.state.uname}
                      onChange={this.changeUname}
                      placeholder="Name"
                      className="form-control"
                    ></input>
                    <div id="unameNote" className={moduleCss.error}></div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeEmail}
                      placeholder="Email"
                      className="form-control"
                    ></input>
                    <div id="emailNote" className={moduleCss.error}></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-3 ">
                    <input
                      type="text"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.changePhone}
                      placeholder="PhoneNumber"
                      className="form-control"
                    ></input>
                    <div id="phoneNote" className={moduleCss.error}></div>
                  </div>
                  <div className="col-md-6 col-lg-12 mb-3 ">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <textarea
                      name="Message"
                      placeholder="Message"
                      className="form-control mb-5"
                    />
                    <input
                      type="submit"
                      placeholder="Send Message"
                      className=" form-control btn btn-success"
                    ></input>
                  </div>
                </div>
              </form>
            </div>

            <div
              className={`${moduleCss.ContactUstitle} col-lg-4 col-sm-12 h-auto bg-black p-5 mt-5 rounded  text-light`}>
              <h5>Address Healthcare Hospital</h5>

              <p> House No 40,</p>
              <p> Third Floor, </p>
              <p>Vittalrao Nagar,</p>
              <p>Madhapur,</p>
              <p>Hitech City Main Road, </p>
              <p> Hyderabad, </p>
              <p> Telangana- 081</p>
              <p>+91 81439 56849</p>
              <p>info@healthcarehospital.com</p>
              <p>hr@healthcarehospital.com</p>
            </div>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.324200830664!2d78.38191677563505!3d17.444190283452723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ed2dea4c17%3A0xd49a55db035ba737!2sElearn%20Infotech%20-%20MERN%20Java%20Python%20Fullstack%20%7C%20UI%20Development%20React%20JS%20%7C%20PHP%20Web%20Development%20UI%20UX%20Courses%20Training%20Hyderabad!5e0!3m2!1sen!2sin!4v1719206497897!5m2!1sen!2sin"
            width="100%"
            height="600"
            title="ElearnInfotech"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mb-4"
          ></iframe>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}


