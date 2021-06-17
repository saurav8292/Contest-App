import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import {Link} from "react-router-dom";
import Badge from '@material-ui/core/Badge';

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



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:"#00838F"}}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab component={Link} to="/Stories" icon={<CreditCardIcon/>}  {...a11yProps(0)} style={{color:"white"}}/>
          <Tab component={Link} to="/Trending" icon={<LiveTvIcon/>}  {...a11yProps(1)} style={{color:"white"}} />
          <Tab component={Link} to="/Notification" icon={<Badge badgeContent={4} color="red" backgroundColor="white"><NotificationsActiveSharpIcon/></Badge>}  {...a11yProps(2)} style={{color:"white"}}/>
          <Tab component={Link} to="/Profile" icon={<PersonSharpIcon/>}  {...a11yProps(3)} style={{color:"white"}}/>
        </Tabs>
      </AppBar>
    </div>
  );
}
