const config = require(`./data/SiteConfig`)

module.exports = {
  siteMetadata: {
    title: `CivicActions | Open and Agile Digital Government Services`,
    email: `contact@civicactions.com`,
    phone: `(510) 408-7510`,
    address: `3527 Mt Diablo Blvd,`,
    address_line_2: `Unit 269,`,
    city: `Lafayette, CA 94549`,
    siteUrl: `https://civicactions.com`,
  },
  pathPrefix: `/civicactions.com`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-source-jazz`,
    `gatsby-plugin-node-fields`,
    `gatsby-plugin-client-side-redirect`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `case-studies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/files/client-logos`,
        name: `client-logos`,
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1028,
        wrapperStyle: `position: relative;`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
              removeAccents: true,
            },
          },
        ],
        engines: { yaml: require("./custom-yaml.js") },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-1170467-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    `gatsby-redirect-from`,
    `gatsby-plugin-meta-redirect`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "civicactions.com",
        sitemap: "https://civicactions.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/press-item/*`],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 100,
        contentTypes: [],
        singleTypes: [],
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
  ],
}
