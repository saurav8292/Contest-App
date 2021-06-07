import React from 'react';
import {Link} from 'react-router-dom'
import img from "../stories/Assets/waterfall.jpg"

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Profile = () =>
{
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
        <div style={{
           margin:"58px 0px",
            borderBottom:"1px solid grey"
        }}>     
        <div style={{
            display:"flex",
            justifyContent:"space-around",
        }}>
            <div>
                <img style={{width:"160px",height:"160px",borderRadius:"80px"}}src={img} alt="Loading..."/>
            </div>
            </div>

            <div style={{margin:"9px 0px"}}>
            <Link style={{margin:"0px 0px 10px 0px"}}><button style={{backgroundColor:"lightgrey"}}>Edit Profile</button></Link>
            <p style={{margin:"3px 0px",fontFamily:"sans-serif",fontWeight:"550",fontSize:"1.5em"}}>Virat Kohli</p>
            <h6> Lives in  City, State, Country</h6>
            </div>

            </div>

             <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"white"}}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Posts" href="/drafts" {...a11yProps(0)} style={{color:"grey"}}/>
          <LinkTab label="Bookmarks" href="/trash" {...a11yProps(1)} style={{color:"grey"}}/>
          <LinkTab label="Participated" href="/spam" {...a11yProps(2)} style={{color:"grey"}}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Page One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
    </div>

            </div>
    )
}
export default Profile