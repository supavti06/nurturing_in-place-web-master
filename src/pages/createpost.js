import axios from 'axios';
import React from 'react'
import { navigate, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from "../components/seo"
// seoImage from 

export default class CreatePostPage extends React.Component {
    state = {
        title: "",
        text: "",
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
        axios.post('http://54.185.157.195:1337/blogs',
          {
            Title: this.state.title,
            Text: this.state.text,
            PublishDate: new Date()
          })
        .then(res => {
            alert("Your blog post has been uploaded.")
            navigate("/")
        })
    }
    render() {
        return (
      <Layout>
        <SEO  title="Discovery | Browser through our selection of high quality parenting content." />

        <h1>Create Blog Post</h1>
        <form
          method="post"
          onSubmit={this.handleSubmit}
        >
          <label>
            Title
            <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleInputChange}
            />
          </label>
          <label>
            Text
            <textarea
                rows="5"
                type="text"
                name="text"
                value={this.state.text}
                onChange={this.handleInputChange}
          />
          </label>
          <input type="submit" value="Submit" />
        </form>
    </Layout>
        )
    }}