import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header/header';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import { getCategoryList } from '../utils/helpers';

const HomePage = ({ data }) => {
    const categoryList = data.allMarkdownRemark.edges;
    const uniqueCategory = getCategoryList(categoryList);

    return (
        <div className="App">
            <Header />
            <Profile profile={uniqueCategory} />
            <Footer />
        </div>
    )
}

export default HomePage;

export const query = graphql`
    query {
        # site {
        #     siteMetadata {
        #         title
        #         author
        #     }
        # }
        allMarkdownRemark{
            totalCount
            edges {
                node {
                    id
                    fields {
                        slug
                        type
                    }
                    frontmatter {
                        categories
                        title
                    }
                }
            }
        }
    }
`
