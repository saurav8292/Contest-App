import React, {useState } from "react";
import "./ProfileUpdate.css";
import { db } from "../../Configure/Fire";
import { useAuth } from "../../../Context/AuthContext";
import { useHistory } from 'react-router';


const ProfileUpdate = () => {
  const { currentUser } = useAuth();
  const [uname,setname]=useState("");
  const [ucity,setcity]=useState("");
  const [ustate,setstate]=useState("")
  const [ucountry,setcountry]=useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  console.log(currentUser.uid);

  const uploadTODB = async (e) => {
    e.preventDefault();
    db.collection("users").doc(currentUser.uid).set({
      name:uname,
      city:ucity,
      state:ustate,
      country:ucountry,
    });
    setMessage("Profile Updated!");
    setTimeout(()=>{
      history.push('/Profile');
    },1100);
  };


  return (
    <div className="container" style={{ marginTop: "70px" }}>
    <form onSubmit={uploadTODB}>
    <div className="form-row">

      <div className="col-md-4 mb-3">
      <label for="validationDefault01" style={{float:"left",fontSize:"1.2em",fontWeight:"600px",marginLeft:"2px"}}>Full Name</label>
      <input 
      type="text" 
      className="form-control" 
      id="validationDefault01" 
      placeholder="Full name" 
      value={uname} 
      onChange={(e)=>setname(e.target.value)} 
      required/>
      </div>



      <div className="col-md-4 mb-3">
      <label for="validationDefault03" style={{float:"left",fontSize:"1.2em",fontWeight:"600px",marginLeft:"2px"}}>City</label>
      <input 
      type="text" 
      className="form-control" 
      id="validationDefault03" 
      placeholder="City" 
      value={ucity}  
      onChange={(e)=>setcity(e.target.value)}
      required/>
    </div>



    <div className="col-md-4 mb-3">
    <label for="validationDefault04" style={{float:"left",fontSize:"1.2em",fontWeight:"600px",marginLeft:"2px"}}>State</label>
    <input 
    type="text" 
    className="form-control" 
    id="validationDefault04" 
    placeholder="State"  
    value={ustate}  
    onChange={(e)=>setstate(e.target.value)}
    required/>
    </div>


    </div>


    <div className="form-row">

    <div className="col-md-4 mb-3">
    <label for="validationDefault05" style={{float:"left",fontSize:"1.2em",fontWeight:"600px",marginLeft:"2px"}}>Country</label>
    <input 
    type="text" 
    className="form-control" 
    id="validationDefault05" 
    placeholder="country" 
    value={ucountry}  
    onChange={(e)=>setcountry(e.target.value)}
    required/>
    </div>
    </div>


    <button className="btn btn-dark" type="submit" style={{background:"#00838F"}}>Submit form</button>
  </form>
      <h4>{message}</h4>
    </div>
  );
};
export default ProfileUpdate;
