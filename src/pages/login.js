import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const LoginPage = ({ data }) => (
  <Layout>
        <h1>Log in</h1>
        <form
          method="post"
        >
          <label>
            Username
            <input type="text" name="username" />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
            />
          </label>
          <input type="submit" value="Log In" />
        </form>
    </Layout>
)

export default LoginPage
