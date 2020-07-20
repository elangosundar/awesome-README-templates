import React from 'react'
import { graphql } from 'gatsby'
import Category from '../components/category/category';
import Header from '../components/header/header';
import Footer from '../components/Footer';

const CategoryTemplate = ({ pageContext, data }) => {
    const { category } = pageContext;
    const categoryList = data.allMarkdownRemark.edges;

    return (
      <div>
        <Header />
        <div className="main thememain-white">
          <div className="container content-main">
          <br />
            <div className="row categoryView">
              <h2 className="catTitle"> {category.toUpperCase()} Category Page </h2>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  {categoryList.map(
                    ({node}, index) => (<Category key={index} data={node} />)
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryBySlug($category: String){
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(filter: {frontmatter: {categories: {eq: $category}}}) {
      edges {
        node {
          id
          html
          timeToRead
          frontmatter {
            categories
            title
            spoiler
            githubUsername
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
