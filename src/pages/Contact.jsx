import React, { useState } from 'react'

const Contact = () => {
    const [email, setemail] = useState("")
    const [pass, setPass] = useState("")
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("")
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [show, setShow] = useState(false)
    const submitHandler= (e)=>{
             e.preventDefault()    
             setShow(true)
            console.log("clicked")
            console.log(email);   
    }
  return (
    <>
      <form className="container" onSubmit={submitHandler}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group  col-md-6">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">State</label>
            <select
              id="inputState"
              className="form-control"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            >
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              value={zip}
              onChange={(e) => {
                setZip(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Stay Updated with our news and latest products
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary ms-5 mt-4">
          Sign in
        </button>
      </form>
      {show ? (
        <>
          <div className="container">
            <p>{email}</p>
            <p>{pass}</p>
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zip}</p>
          </div>
        </>
      ) : (
        <h1>no data</h1>
      )}
    </>
  );
}


export default Contact
