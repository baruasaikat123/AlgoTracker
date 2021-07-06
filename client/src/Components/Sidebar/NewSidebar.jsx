import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TableChartIcon from '@material-ui/icons/TableChart';
import { NavLink } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#f48fb1',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {

    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
      
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
      
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',

  },
  drawerOpen: {
    backgroundColor: '#011627',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: '#011627',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    },
}));


export default function MiniDrawer() {
  
  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Welcome
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon  style={{color:'white'}}/>}
          </IconButton>
        </div>
        <Divider  style={{backgroundColor:'white'}}/>
        <List>
            <ListItem button key="Home">
                      <ListItemIcon><NavLink to='/dash'><HomeIcon style={{fill:'white'}}/></NavLink></ListItemIcon>
                <ListItemText style={{color:'white'}} primary="Home" />
            </ListItem>
        </List>
        <List>
            <ListItem button key="Questions">
                <ListItemIcon><NavLink to='/table'><TableChartIcon style={{fill:'white'}} /></NavLink></ListItemIcon>
                <ListItemText style={{color:'white'}} primary="Questions" />
            </ListItem>
        </List>
        <Divider />
        
        <List style={{marginTop:"380px"}}>
           {/* <ListItem button key="Questions">
                <ListItemIcon><TableChartIcon  /></ListItemIcon>
                <ListItemText primary="Questions" />
            </ListItem>  */}
        </List>
        <Divider  style={{backgroundColor:'white'}}/>
        
        <List style={{marginTop:'50px'}}>
            <ListItem button key="Home">
                    <ListItemIcon><ExitToAppIcon style={{fill:'white'}}/></ListItemIcon>
                <ListItemText style={{color:'white'}} primary="Logout" />
            </ListItem>
        </List>
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
      </main>
    </div>
  );
}