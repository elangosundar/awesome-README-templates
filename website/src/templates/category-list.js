import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { kebabCase } from 'lodash';
import { getCategoryList } from '../utils/helpers';

class CategoryListTemplate extends React.Component {

  render() {
    const { pageContext, data } = this.props;
    const categoryList = getCategoryList(data.allMarkdownRemark.edges);

    return (
      <Layout location={this.props.location} title="All Category Page">
        <div>
            <h3> Category List Page</h3>
            <ul>
            {
                Object.keys(categoryList).map((category, index) => {
                    return (<li key={index}>
                        <Link to={`/category/${kebabCase(category)}`}>
                            <p> {category} - {categoryList[category]} </p>
                        </Link>
                    </li>)
                })
            }
            </ul>
        </div>
      </Layout>
    )
  }
}

export default CategoryListTemplate

export const pageQuery = graphql`
    query CategoryListBySlug{
        site {
            siteMetadata {
                title
                author
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 100
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        categories
                        title
                    }
                }
            }
        }
    }
`
