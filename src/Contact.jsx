import React, {useState} from "react";

const Contact = () => {
    // state
    const [data, setData] =useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    }); 

    // define onchange event
    const inputEvent = (event) => {
        const {name, value} = event.target;
        // updated the user data 
        setData((prevVal) => {
            return {
                ...prevVal,
                [name]:value,
            }
        })
        
    }
    
    const formSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        alert(`${data.fullname} ${data.phone} ${data.email} ${data.msg}`);
        
    }

    return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} action="">
              <div className="mb-3">
                <label className="form-label">
                  Enter Your name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Your name"
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Enter Your phone number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Your phone number"
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Enter Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Message
                </label>
                <textarea
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
