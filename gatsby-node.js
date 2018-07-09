/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const postTemplate = path.resolve('src/templates/posts.js');
  const studyTemplate = path.resolve('src/templates/case-study.js');

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            post_type
          }
        }
      }
    }
  }`)
    .then(res => {
      if(res.errors) {
        return Promise.reject(res.errors);
      }

      res.data.allMarkdownRemark.edges.forEach(({node}) => {

        if (node.frontmatter.post_type == 'case-study') {
          createPage ({
            path: node.frontmatter.path,
            component: studyTemplate
          })
        } else {
          createPage ({
            path: node.frontmatter.path,
            component: postTemplate
          })
        }
      } )
    })
}