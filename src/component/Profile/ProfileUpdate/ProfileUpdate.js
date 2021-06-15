import React, { useEffect, useState } from "react";
import "./ProfileUpdate.css";
import Button from "@material-ui/core/Button";
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
    },1000);
  };
  const getDataFromDb = async () => {
    const snap = await db.collection("users").doc(currentUser.uid).get();
    const name = snap.data()["name"];
    const city =snap.data()["city"];
    console.log(city);
    console.log(name);
  };
  useEffect(() => {
    getDataFromDb();
  }, []);

  return (
    <div className="container" style={{ marginTop: "70px" }}>
    <form>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label
            style={{
              float: "left",
              fontSize: "1.2em",
              fontWeight: "600px",
              marginLeft: "2px",
            }}
          >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={uname}
            placeholder="Name"
            onChange={(e)=>setname(e.target.value)}
          />
        </div>

       

        <div className="col-md-4 mb-3">
          <label
            style={{
              float: "left",
              fontSize: "1.2em",
              fontWeight: "600px",
              marginLeft: "2px",
            }}
          >
            City
          </label>
          <input
            type="text"
            className="form-control"
            name="city"
            placeholder="City"
            value={ucity}
            onChange={(e)=>setcity(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-3">
          <label
            style={{
              float: "left",
              fontSize: "1.2em",
              fontWeight: "600px",
              marginLeft: "2px",
            }}
          >
            State
          </label>
          <input
            type="text"
            className="form-control"
            name="state"
            placeholder="State"
            value={ustate}
            onChange={(e)=>setstate(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-3">
          <label
            style={{
              float: "left",
              fontSize: "1.2em",
              fontWeight: "600px",
              marginLeft: "2px",
            }}
          >
            Country
          </label>
          <input
            type="text"
            className="form-control"
            name="country"
            placeholder="Country"
            value={ucountry}
            onChange={(e)=>setcountry(e.target.value)}
          />
        </div>
      </div>

      <Button
        variant="contained"
        onClick={uploadTODB}
        color="primary"
        style={{ marginTop: "10px" }}
      >
        Submit
      </Button>
      </form>
      <h4>{message}</h4>
    </div>
  );
};
export default ProfileUpdate;
