const _ = require('lodash')
const Promise = require('bluebird')
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const slug = createFilePath({ node, getNode, basePath: `pages/${fileNode.sourceInstanceName}` })
    createNodeField({
      node,
      name: `slug`,
      value: `${fileNode.sourceInstanceName}${slug}`,
    })
    createNodeField({
      node,
      name: `type`,
      value: fileNode.sourceInstanceName,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              categories
            }
          }
        }
      }
    }
  `)

  const dataResults = result.data.allMarkdownRemark.edges;

  _.each(dataResults, (post, index) => {
    const previous = index === dataResults.length - 1 ? null : dataResults[index + 1].node
    const next = index === 0 ? null : dataResults[index - 1].node

    createPage({
      path: '/category/' + post.node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.node.fields.slug,
        // previous,
        // next,
      },
    })
  });

  // Create Categories section here

  const categoriesFound = []
  dataResults.forEach(post => {
    post.node.frontmatter.categories.forEach(cat => {
      if (categoriesFound.indexOf(cat) === -1) {
        categoriesFound.push(cat)
      }
    })
  });

  // create a page for each category

  categoriesFound.forEach(cat => {
    createPage({
      path: `category/${cat}`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        category: cat
      },
    })
  });

  // create a page for category

  createPage({
      path: `category`,
      component: path.resolve(`./src/templates/category-list.js`)
  });

}
