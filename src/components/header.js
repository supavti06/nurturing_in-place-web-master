import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { navigate } from 'gatsby';
import Hidden from '@material-ui/core/Hidden';
import { Location } from '@reach/router';
import logoimage from '../images/nurturinginplacelogo.png';
import CollapseMenu from '../components/collapseMenu';
import CollapseSideMenu from '../components/collapseSideMenu';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'white',
  },
  toolbarTitle: {
    flex: 1,
    fontSize: 30,
    '&:hover': {
      textDecoration: 'none'
    },
    '& img': {
      height: 70,
      float: 'left',
      margin: 'auto',
      padding: 10,
    }
  },
  toolbarSecondary: {
    background: 'white',
    maxWidth: 1100, width: 1100, display: 'flex', margin:'auto',
    justifyContent: 'space-between',
    overflowX: 'auto',
    marginBottom: 10,
    marginTop: 10,
  },
  
  active:{
    borderBottom: '2px solid #5fe387',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 20,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  hide: {
    display: 'none',
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const parent =  React.createRef();

  function goSubscribe(){
    navigate("/subscribe")
  }
  const [toggleIndex, setToggleIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const isSelected = (i) => {
    setToggleIndex(i)
  }

  const isToggle = (i) => {
    return (toggleIndex == i)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const isActive = (value) => (Location === value ? 'active' : '')
  const DrawerList = () => (
    <Hidden mdUp >

    <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton edge="end" onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {sections.map((section) => (
            <CollapseSideMenu section={section} ref={parent} data={isSelected} expand={isToggle(section.id)}></CollapseSideMenu>
          ))}
        </List>
      </Drawer>
      </Hidden>

  );
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} >
        <div style={{maxWidth: 1200, width: 1200, display: 'flex', margin:'auto'}} >
      <Hidden mdUp >
        <div style={{margin:'auto'}}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
        </IconButton>
        </div>
      </Hidden>
        <Link edge="start"
          className={classes.toolbarTitle}
          align="center"
          href="/">
          <img src={logoimage} alt="nurturing in place logo"></img>
        </Link>
        <Hidden smDown>
        <ul style={{display: 'flex',padding: 0, margin: 0, listStyle: 'none', flexWrap: 'nowrap'}}>

        {sections.map((section) => (
          <li style={{paddingTop: 24}}>
              <CollapseMenu section={section} ref={parent} data={isSelected} expand={isToggle(section.id)}></CollapseMenu>
            </li>
          ))}
        </ul>

      </Hidden>
        <Button onClick={() => goSubscribe()} size="small">
          Subscribe
        </Button>
        </div>
      </Toolbar>
      <DrawerList></DrawerList>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
