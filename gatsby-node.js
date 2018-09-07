/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const caseStudyTemplate = path.resolve(`src/templates/caseStudyTemplate.js`);
  const teamMemberTemplate = path.resolve(`src/templates/teamMemberTemplate.js`);
  const generalTemplate = path.resolve(`src/templates/generalTemplate.js`);

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
              manager
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

        switch(node.frontmatter.type) {
          case 'team':
            createPage ({
              path: node.frontmatter.path,
              component: teamMemberTemplate,
              context: {}
            });
            break;
          case 'case-study':
            createPage ({
              path: node.frontmatter.path,
              component: caseStudyTemplate
            });
            break;
          default:
            createPage ({
              path: node.frontmatter.path,
              component: generalTemplate
            })
        }
      })
    }
  )
};

// This is to be able to query page slugs. For creating a dynamic menu in the future
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {

    const { createNodeField } = boundActionCreators;
    if(node.internal.type==='SitePage'){
        createNodeField({
            node,
            name: `slug`,
            value: node.path,
        });
        console.log(node)
    }

};

// For easier imports
exports.onCreateWebpackConfig = (
    { stage, actions }
    ) => {

    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    })
};