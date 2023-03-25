import React, { useState } from "react";
function contact() {  
  const[messag,setMessage]=useState('');
  const [entry,setEntry]=useState({
    firstName:'',
    lastName:'',
    email:'',
    text:'',
  })
  const {firstName,lastName,email,text}=entry;
  const handleChange=(e)=>{
    setEntry({...entry,[e.target.name]:e.target.value});

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!entry.email.match(validRegex)) {
      setMessage("invalid email please try again");
      return
    }
    try{
      const response=await fetch('/api/data',{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(entry)
    })
    const datta=await response.json();
    setMessage(datta.message);
    setMessage('');
    setEntry({
      email:'',
      firstName:'',
      lastName:'',
      text:'',
    })
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="contact wrapper">
      <div className="contact__form">
        <div className="contact__image">
          <div>
            <h1 className="h4 bg-primary text-center p-3">CONTACT US</h1>
          </div>
        </div>
        <div>
          <form  className="needs-validation w-75 mx-auto" onSubmit={handleSubmit}>
           <div className="d">
           <div className='div6 '>
           <div class="mb-3 mt-3">
              <label for="firstname">
                firtsname:
              </label><br/>
              <input
                type="text"
                 //class="form-control"
                id="firstname"
                name="firstName"
                value={firstName}
                className="form2 border-bottom"
                border-0
                required
                onChange={handleChange}
              />
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="mb-3 mt-3">
              <label for="lastname">
                lastname:
              </label><br/>
              <input
                type="text"
                id="lastname"
                name="lastName"
                value={lastName}
                className="form2 border-bottom"
                onChange={handleChange}
                required
              />
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
           </div>
           <div class="mb-3 mt-3">
              <label for="email">
                Email:
              </label><br/>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="form2 border-bottom"
                onChange={handleChange}
              />
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div>
              <label for="comment">Comments:</label><br/>
              <textarea
                rows="5"
                id="comment"
                name="text"
                value={text}
                className="form2 border"
                onChange={handleChange}
              ></textarea>
            </div>
           </div>

            <button type="submit" class="btn btn-primary p-2 my-2">
              Submit
            </button>
            <p>{messag}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default contact;
