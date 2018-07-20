module.exports = {
  siteMetadata: {
    title: 'CivicActions | Open and Agile Digital Government Services',
  },
  pathPrefix: "/civicactions.com",
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
    {
      resolve: 'gatsby-source-thirdparty',
      options: {
        // The url, this should be the endpoint you are attempting to pull data from
        // All jobs url: `https://api.resumatorapi.com/v1/jobs?apikey=AhfDcT1eXkKTHcHKPEib5KKs1JRxuoD6`,
        url: `https://api.resumatorapi.com/v1/jobs/status/open?apikey=AhfDcT1eXkKTHcHKPEib5KKs1JRxuoD6`,

        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `jobs`,

        // Optional payload key name if your api returns your payload in a different key
        // Default will use the full response from the http request of the url
        // payloadKey: `body`,

        // Optionally save the JSON data to a file locally
        // Default is false
        localSave: true,

        //  Required folder path where the data should be saved if using localSave option
        //  This folder must already exist
        path: `${__dirname}/src/data/jobs/`,

        // Optionally include some output when building
        // Default is false
        verboseOutput: true, // For debugging purposes

        // Optionally skip creating nodes in graphQL.  Use this if you only want
        // The data to be saved locally
        // Default is false
        // skipCreateNode: true, // skip import to graphQL, only use if localSave is all you want
      }
    }
  ],
}
