import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import img from "../stories/Assets/waterfall.jpg";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import SimpleModal from "./SimpleModals/SimpleModal";
import { Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { db } from ".././Configure/Fire";
import { useCollection } from "react-firebase-hooks/firestore";
import HomeIcon from '@material-ui/icons/Home';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import PartyModeSharpIcon from '@material-ui/icons/PartyModeSharp';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [uname, setname] = useState("");
  const [ucity, setcity] = useState("");
  const [ustate, setstate] = useState("");
  const [ucountry, setcountry] = useState("");
  const [dpUrl, setDepUrl] = useState();
  const query = db.collection("users").doc(currentUser.uid);
  const [snapshot, loading, dpError] = useCollection(query, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  const getDataFromDb = async () => {
    const snap = await db.collection("users").doc(currentUser.uid).get();
    setname(snap.data()["name"]);
    setcity(snap.data()["city"]);
    setstate(snap.data()["state"]);
    setcountry(snap.data()["country"]);
    setDepUrl(snap.data()["dpURL"]);
  };
  useEffect(() => {
    getDataFromDb();
  }, []);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const MyOptions = [
    <Link to="/ProfileUpdate">Edit Profile</Link>,
    <SimpleModal />,
    <Link to="/ChangePassword">Change Password</Link>,
    <Link onClick={handleLogout}>Logout user</Link>,
  ];

  return (
    <div style={{ maxWidth: "550px", margin: "0px auto" }}>
      {error && <Alert variant="danger">{error}</Alert>}
      <div
        style={{
          margin: "58px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div></div>
          <div style={{ marginRight: "-45px" }}>
            {snapshot && (
              <img
                style={{
                  width: "170px",
                  height: "160px",
                  borderRadius: "100px",
                }}
                src={snapshot.data()["dpURL"] ? snapshot.data()["dpURL"] : img}
                alt="Loading..."
              />
            )}
          </div>
          <div>
            <IconButton
              aria-label="more"
              onClick={handleClick}
              aria-haspopup="true"
              aria-controls="long-menu"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              onClose={handleClose}
              open={open}
            >
              {MyOptions.map((option) => (
                <MenuItem key={option} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>

        <div style={{ margin: "9px 0px" }}>
          <p
            style={{
              margin: "3px 0px",
              fontFamily: "sans-serif",
              fontWeight: "550",
              fontSize: "1.5em",
            }}
          >
            {uname}
          </p>
          <h5>
            {<HomeIcon/>}{" "}
            Lives In {" "}{ucity},{ustate},{ucountry}
          </h5>
        </div>
      </div>

      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
          <Tab component={Link} to="/Profile/Posts" icon={<PartyModeSharpIcon/>}  {...a11yProps(0)} style={{color:"rgb(0,143,134)"}}/>
          <Tab component={Link} to="/Profile/Bookmarks" icon={<BookmarksIcon/>}  {...a11yProps(0)} style={{color:"#00838F"}}/>
          <Tab component={Link} to="/Profile/Participated" icon={<AssignmentTurnedInSharpIcon/>}  {...a11yProps(0)} style={{color:"#00838F"}}/>
          </Tabs>
        </AppBar>
      </div>
    </div>
  );
};
export default Profile;
