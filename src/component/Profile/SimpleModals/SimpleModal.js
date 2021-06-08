import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Link} from 'react-router-dom'
import './modals.css'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 250,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper} id="mod">
      <h4 id="simple-modal-title" className="chng">Change Photo</h4>
      <div id="simple-modal-description">
      <Divider/>
      <Link className="slinks1">Upload Photo</Link>
      <Divider/>
      <Link className="slinks2">Remove Photo</Link>
      <Divider/>
      <Link className="slinks3" onClick={handleClose}>Cancel</Link>
      </div>
    </div>
  );

  return (
    <div>
    <Link onClick={handleOpen}>CHnage Photo</Link>
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
