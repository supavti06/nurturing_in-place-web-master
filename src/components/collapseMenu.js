import React from 'react';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { Location } from '@reach/router';
import { Collapse, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbarLink: {
    padding: theme.spacing(1.5),
    flexShrink: 0,
    margin:'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
    // borderBottom: '2px solid black',

    '&:hover': {
      cursor:'pointer',
      textDecoration: 'none',
      borderBottom: '2px solid #5fe387',

    },
  },
  toolbarLinkExpand: {
    paddingRight: theme.spacing(2.5),
  },
  toolbarSublink: {
      padding: theme.spacing(1),
      flexShrink: 0,
      margin: 20,
      heigth: 100,
      display: 'block',
    '&:hover': {
      textDecoration: 'none',
      // color: 'white',
      borderBottom: '2px solid #5fe387',

    },
  },
  collapseMenu: {
    padding: theme.spacing(1),
    boxShadow: ' 0px 0px 114px -91px rgba(0,145,255,1)',
    position:'absolute',
    background: 'white',
    zIndex: 100
  }
}));

export default function CollapseMenu(props) {
  const classes = useStyles();
  const { section, data, key, expand } = props;
  const handleClick = () => {
    expand ? data(null): data(section.id)
  };


  const isActive = (value) => (Location === value ? 'active' : '')
  return (
    <React.Fragment>
      {section.child ?
    <React.Fragment>
        <Link
          color="inherit"
          align="center"
          key={section.title}
          variant="body2"
          onClick={handleClick}
          className={[isActive('/'+section.title+ '/'), classes.toolbarLink, classes.toolbarLinkExpand]}
        >
          {section.title}
        {expand ? <ExpandLess fontSize="small" style={{position:'absolute'}}/> : <ExpandMore fontSize="small" style={{position:'absolute'}}/>}
        </Link>
        <Collapse className={classes.collapseMenu} in={expand} timeout="auto" unmountOnExit>
          {section.child.map((subsection) => (
            <Link
              align="center"
              key={subsection.title}
              variant="body2"
              href={subsection.url}
              className={[isActive('/'+subsection.title+ '/'),classes.toolbarSublink]}
            >
            {subsection.title}
          </Link>
          ))}
        </Collapse>
      </React.Fragment>
      :
      <Link
        color="inherit"
        key={section.id}
        variant="body2"
        href={section.url}
        className={[isActive('/'+section.title+ '/'),classes.toolbarLink]}
      >
        {section.title}
      </Link>}
    </React.Fragment>
  );
}

CollapseMenu.propTypes = {
  section: PropTypes.array,
  isSelected: PropTypes.bool
};
