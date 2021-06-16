import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import "./modals.css";
import Divider from "@material-ui/core/Divider";
import { storage } from "../../Configure/Fire";
import { useAuth } from "../../../Context/AuthContext";
import { useHistory } from "react-router";
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
  const history = useHistory();
  const [imgSrc, setImageSrc] = useState();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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

    reader.onloadend = function (e) {
      setImageSrc(reader.result);
    };
    console.log(url);
  };
  const openEdit = () => {
    const finput = document.getElementById("imageInput");
    finput.click();
  };
  const uploadImage = async () => {
    const ref = storage.ref(currentUser.uid);
    const uploader = ref.put(image);

    uploader.on("complete", (d) => {
      console.log("Upload done");
      const url = ref.getDownloadURL();
      console.log(url);
    });
    handleClose();
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
        <img height="100px" width="100px" src={imgSrc} alt="..."></img>
        <Button onClick={uploadImage}>UPLOAD</Button>
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

