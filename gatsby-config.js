module.exports = {
  siteMetadata: {
    title: 'CivicActions | Open and Agile Digital Government Services',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'case-studies',
      }
    },
    `gatsby-transformer-remark`
  ],
}
