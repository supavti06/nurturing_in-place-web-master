import React from 'react';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    margin:'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            justifyContent: 'center', 
alignItems: 'center' ,

    '&:hover': {
      textDecoration: 'none',
      borderBottom: '2px solid #5fe387',

    },

  },
  toolbarSublink: {
    paddingLeft: theme.spacing(1),
    color: '#5fe387',
  '&:hover': {
    textDecoration: 'none',
    // color: 'white',
    borderBottom: '2px solid #5fe387',

  },
},
}));

export default function CollapseSideMenu(props) {
  const classes = useStyles();
  const { section, data, expand } = props;
  const handleClick = () => {
    expand ? data(null): data(section.id)

  };
  return (
    <React.Fragment>
        <div>
          {section.child ? 
            <div>
              <ListItem onClick={handleClick}
                  activeClassName={classes.active} button key={section.title}>
                    <Link
                      color="inherit"
                      noWrap
                      variant="body2"
                      className={classes.toolbarLink}
                      >
                      {section.title}
                    </Link>
                    {expand ? <ExpandLess fontSize="small"/> : <ExpandMore fontSize="small"/>}

                  </ListItem>
                  <Collapse in={expand} timeout="auto" unmountOnExit>
                    {section.child.map((subsection) => (
                      <List disablePadding>
                        <ListItem  variant="body2" component="a" button href={subsection.url}>
                          <Link
                            color="inherit"
                            variant="body2"
                            className={classes.toolbarSublink}
                            >
                              {subsection.title}
                          </Link>
                        </ListItem>
                      </List>
          
                    ))}
                  </Collapse>
                </div>
                :
              
            <ListItem component="a" button href={section.url}
            activeClassName={classes.active} button key={section.title}>
              <Link
                color="inherit"
                noWrap
                variant="body2"
                className={classes.toolbarLink}>
                {section.title}
              </Link>
            </ListItem>}
            </div>
    </React.Fragment>
  );
}

CollapseSideMenu.propTypes = {
  section: PropTypes.array,
  isSelected: PropTypes.bool
};
