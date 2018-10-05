import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { 
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Main from './components/Main';
import ApiKey from './components/ApiKey';

import './styles.css'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 'calc(100vh - 16px)',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    marginTop: 64,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,  
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

class ClippedDrawer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'home',
      anchorEl: null,
    }
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose(event) {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { selectedMenu } = this.state
    const { anchorEl } = this.state;

    return (
      <Router>
        <div className={classes.root}>
          <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
              <Link to="/" >
                <Typography variant="title" color="inherit" noWrap>
                  Clipped drawer
                </Typography>
              </Link>
              <div className="menu">
                <Link className={selectedMenu === "home" ? "menu-item active" : "menu-item"} onClick={() => this.setState({ selectedMenu: 'home' })} to="/home" >HOME</Link>
                <Link className={selectedMenu === "api-key" ? "menu-item active" : "menu-item"} onClick={() => this.setState({ selectedMenu: 'api-key' })} to="/api-key" >API KEYS</Link>
                <Link className={selectedMenu === "stl-hub" ? "menu-item active" : "menu-item"} onClick={() => this.setState({ selectedMenu: 'stl-hub' })} to="/stl-hub" >STL HUB</Link>
                <Link className={selectedMenu === "monitor" ? "menu-item active" : "menu-item"} onClick={() => this.setState({ selectedMenu: 'monitor' })} to="/monitor" >MONITOR</Link>
                <Link className={selectedMenu === "notifications" ? "menu-item active" : "menu-item"} onClick={() => this.setState({ selectedMenu: 'notifications' })} to="/notifications" >NOTIFICATIONS</Link>
              </div>
                <Avatar
                  className={classes.bigAvatar}
                  onClick={(event) => this.handleClick(event)}
                >
                  PR
                </Avatar>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={(event) => this.handleClose(event)}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>Account</MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <div className="left-menu">
              <Link className={selectedMenu === "home" ? "menu-item active" : "menu-item"} onClick={() => this.setState({ selectedMenu: 'home' })} to="/home" >Keys</Link>
              <Link className={selectedMenu === "api-key" ? "menu-item active" : "menu-item"} onClick={() => this.setState({ selectedMenu: 'api-key' })} to="/api-key" >Log</Link>
            </div>
          </Drawer>
          <main className={classes.content}>
            <Route exact path="/" component={Main} />
            <Route exact path="/api-key" component={ApiKey} />
          </main>
        </div>
      </Router>
    )
  }
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
