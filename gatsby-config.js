const config = require("./data/SiteConfig");

module.exports = {
  siteMetadata: {
    title: 'CivicActions | Open and Agile Digital Government Services',
    email: 'contact@civicactions.com',
    phone: '(510) 408-7510',
    address: '2625 Alcatraz Avenue,',
    address_line_2: 'Suite 320,',
    city: 'Berkeley, CA 94705'
  },
  pathPrefix: "/civicactions.com",
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-source-jazz`,
    `gatsby-plugin-node-fields`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'case-studies',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/files/client-logos`,
        name: 'client-logos',
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
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `agile-government-leadership`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ["gatsby-remark-copy-linked-files"],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: '100%'
            }
          }
        ]
      }
    }
  ],
};
