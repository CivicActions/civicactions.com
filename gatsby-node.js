/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const createPaginatedPages = require(`gatsby-paginate`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const { createRedirect } = actions
  createRedirect({
    fromPath: "/distributed-government",
    toPath: "https://distributedgov.com/",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/a11y-iaaf",
    toPath:
      "https://medium.com/civicactions/4-ways-to-improve-government-accessibility-through-open-source-8e20fabc7281",
    isPermanent: true,
    redirectInBrowser: true,
  })

  const caseStudyTemplate = path.resolve(`src/templates/caseStudyTemplate.js`)
  const teamMemberTemplate = path.resolve(`src/templates/teamMemberTemplate.js`)
  const generalTemplate = path.resolve(`src/templates/generalTemplate.js`)
  const pressSubPageTemplate = path.resolve(
    `src/templates/pressSubPageTemplate.js`
  )

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
              type
              title
              name
              role
              manager
              date
              link_text
              publication
              website
              redirect_from
              weight
            }
            html
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const pressNodes = result.data.allMarkdownRemark.edges.filter(
      ({ node }) => node.frontmatter.type === `press`
    )

    createPaginatedPages({
      edges: pressNodes,
      createPage: createPage,
      pageTemplate: `src/templates/press.js`,
      pageLength: 5, // This is optional and defaults to 10 if not used
      pathPrefix: `press`,
      buildPath: (index, pathPrefix) =>
        index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`,
    })

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      switch (node.frontmatter.type) {
        case `team`:
          createPage({
            path: node.frontmatter.path,
            component: teamMemberTemplate,
            context: {},
          })
          break
        case `case-study`:
          createPage({
            path: node.frontmatter.path,
            component: caseStudyTemplate,
          })
          break
        case `press-sub-page`:
          createPage({
            path: node.frontmatter.path,
            component: pressSubPageTemplate,
            context: {},
          })
          break
        default:
          createPage({
            path: node.frontmatter.path,
            component: generalTemplate,
          })
      }
    })
  })
}

// This is to be able to query page slugs. For creating a dynamic menu in the future
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `SitePage`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.path,
    })
  }
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.path,
    })
  }
}

// For easier imports
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`],
    },
  })
}
