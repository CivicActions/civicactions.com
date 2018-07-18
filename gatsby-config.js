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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `civicactions`,
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `dkan-blog`,
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1028,
        wrapperStyle: "position: relative;"
      },
    },
  ],
}
