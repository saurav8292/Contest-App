import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import "./modals.css";
import Divider from "@material-ui/core/Divider";
import { storage, db } from "../../Configure/Fire";
import { useAuth } from "../../../Context/AuthContext";
import { Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 250,
    height: 240,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const { currentUser } = useAuth();
  const [image, setImage] = useState();
  const [imgSrc, setImageSrc] = useState();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state,setstate]=useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSelectImage = (e) => {
    var file = e.target.files[0];
    setImage(file);
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    console.log(url);
    reader.onloadend = function (e) {
      setImageSrc(reader.result);
    };
  };
  const openEdit = () => {
    setstate(!state);
    const finput = document.getElementById("imageInput");
    finput.click();
  };
  const uploadImage = async () => {
    setstate(!state);
    const storageRef = storage.ref(`${currentUser.uid}_dp`);
    const firestoreRef = db.collection("users").doc(currentUser.uid);
    storageRef.put(image).on(
      "state-changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log(percentage);
      },
      (err) => {
        console.log(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        firestoreRef.update({
          dpURL: url,
        });
        handleClose();
      }
    );
    // const ref = storage.ref(currentUser.uid);
    // const uploader = ref.put(image);
    // uploader.on("complete", (d) => {
    //   console.log("Upload done");
    //   const url = ref.getDownloadURL();
    //   seturl(url);
    //   console.log(url);
    // });
  };
  const body = (
    <div className={classes.paper} id="mod">
      <input
        type="file"
        id="imageInput"
        hidden="hidden"
        onChange={handleSelectImage}
      />
      <h4 id="simple-modal-title" className="chng">
        Change Photo
      </h4>
      <div id="simple-modal-description">
        <Divider />
        <Button variant="link" className="slinks1" onClick={openEdit}>
          Upload Photo
        </Button>
        <Divider />
        <Button variant="link" className="slinks2">
          Remove Photo
        </Button>
        <Divider />
        <Button variant="link" className="slinks3" onClick={handleClose}>
          Cancel
        </Button>
      </div>
      <div className={state ? 'show' : 'notshow'}>
      <img height="240px" width="250px" src={imgSrc} alt="..." style={{marginTop:"-190px",marginLeft:"-33px"}}></img>
      <Button onClick={uploadImage} style={{marginLeft:"40px",marginTop:"10px"}}>UPLOAD</Button>
      </div>
    </div>
  );

  return (
    <div>
      <Link onClick={handleOpen}>Change Photo</Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
