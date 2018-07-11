/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;



  const caseStudyTemplate = path.resolve(`src/templates/caseStudyTemplate.js`);
  const teamMemberTemplate = path.resolve(`src/templates/teamMemberTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              type
              title
              name
              role
            }
          }
        }
      }
    }
  `).then(
    result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {

        if (node.frontmatter.type === 'team') {
          createPage ({
            path: node.frontmatter.path,
            component: teamMemberTemplate,
            context: {}
          })
        } else {
          createPage ({
            path: node.frontmatter.path,
            component: caseStudyTemplate
          })
        }
      })
    }
  )
}