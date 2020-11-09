/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import JosefinSansRegular from '../fonts/JosefinSans-Regular.ttf';
import CssBaseline from "@material-ui/core/CssBaseline";
import ParentLayout from "./parentLayout";


const LayoutExpanded = ({ children }) => {
  

  return (
    <ParentLayout>
          {children}
      </ParentLayout>
  )
}

LayoutExpanded.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutExpanded