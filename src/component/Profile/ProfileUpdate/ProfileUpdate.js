import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "./ProfileUpdate.css";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@material-ui/core/Button";
import { db } from "../../Configure/Fire";
import { useAuth } from "../../../Context/AuthContext";

const ProfileUpdate = () => {
  const [dob, setDob] = useState("");
  const { currentUser } = useAuth();
  const [nameFromDb, setnameFromDb] = useState("");
  console.log(currentUser.uid);
  const uploadTODB = () => {
    db.collection("users").doc(currentUser.uid).set({
      name: "Kishan",
    });
  };
  const getDataFromDb = async () => {
    const snap = await db.collection("users").doc(currentUser.uid).get();
    const name = snap.data()["name"];
    console.log(name);
  };
  useEffect(() => {
    getDataFromDb();
  }, []);

  return (
    <div className="container" style={{ marginTop: "70px" }}>
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
            placeholder="Name"
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
            Email
          </label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Email"
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
          />
        </div>

        <div className="dob">
          <label className="Dob">Date Of Birth :-</label>
          <DatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            name="dob"
          />
        </div>
      </div>

      <Button
        variant="contained"
        onClick={uploadTODB}
        color="primary"
        style={{ marginTop: "10px" }}
      >
        Submit Dummy Data
      </Button>
      <Button variant="contained" color="primary" style={{ marginTop: "10px" }}>
        Submit
      </Button>
    </div>
  );
};
export default ProfileUpdate;
