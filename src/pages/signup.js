import axios from 'axios';
import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/layout'

export default class SignupPage extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        axios.post('http://54.185.157.195:1337/auth/local/register',
          {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
          })
        .then(res => {
            alert("You have successfully signed up.")
            navigate("/")
        })
    }
    render() {
        return (
      <Layout>
        <h1>Sign Up</h1>
        <form
          method="post"
          onSubmit={this.handleSubmit}
        >
          <label>
            Username
            <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
            />
          </label>
          <label>
            Email
            <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
          />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
    </Layout>
        )
    }}