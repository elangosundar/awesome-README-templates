import React, { useRef, useLayoutEffect } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Header from '../components/header/header';
import Footer from '../components/Footer';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { html, frontmatter } = post;
  const gitUrl = frontmatter.githubUsername ? `http://github.com/${frontmatter.githubUsername}`
    : '';

  return (
    <div>
      <Header />
      <div className="main thememain-white">
        <div className="container content-main">
          <br />
          <div className="row profileView">
            <div className="left">
              <a href={gitUrl} target="_blank">
                <h3>{frontmatter.title.toUpperCase()}</h3>
              </a>
            </div>
            <div className="right">
              <Link to={'/'}>← Back to Category</Link>
            </div>
          </div>
          <div className="row">
            <div className={'readmeDiv'} dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogPost;

export const query = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
        categories
        githubUsername
      }
      fields {
        slug
      }
    }
  }
` 
