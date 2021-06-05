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
import Stories from '../stories/Stories'
import Profile from '../Profile/Profile'
import Notification from '../Notification/Notification'
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

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab icon={<CreditCardIcon/>} href="/drafts" {...a11yProps(0)} />
          <LinkTab icon={<LiveTvIcon/>} href="/trash" {...a11yProps(1)} />
          <LinkTab icon={<NotificationsActiveSharpIcon/>} href="/spam" {...a11yProps(2)} />
          <LinkTab icon={<PersonSharpIcon/>} href="/spam" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Stories/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stories/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Notification/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Profile/>
    </TabPanel>
    </div>
  );
}
