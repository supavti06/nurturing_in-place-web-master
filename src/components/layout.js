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

const Layout = ({ children }) => {
  

  return (
    <ParentLayout>
        <Container maxWidth="lg" style={{paddingTop: 20, backgroundColor: '#fffefa', boxShadow: ' 0px 0px 114px -91px rgba(0,145,255,1)',paddingTop: 20,paddingBottom: 20}}>
          {children}
        </Container>
      </ParentLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout