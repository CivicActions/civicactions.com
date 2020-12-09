const axios = require('axios');
const crypto = require('crypto');
const _ = require(`lodash`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Job implements Node {
      id: String
      title: String
      country: Int
      city: String
      state: String
      zip: Int
      department: String
      description: String
      open_date: String
      type: String
      status: String
      board_code: String
    }
  `)
}

exports.sourceNodes = async({ actions }) => {
  const {createNode} = actions;

  // If environment variable is set to 'development':
  if (process.env.GATSBY_JAZZ_URL === 'development') {

    const fakeJob = {
      id: "123",
      title: "Test job",
      country: 1,
      city: "Test",
      state: "Test",
      zip: 12345,
      department: "Test",
      description: "Test",
      open_date: "Open date",
      type: "Job type",
      status: "Job status",
      board_code: "Board code",
      parent: null,
      internal: {
        type: 'Job',
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify({}))
          .digest(`hex`),
      },
    };
    createNode(fakeJob);


  } else { // Environment variable is not set to development:

    const result = await axios.get(process.env.GATSBY_JAZZ_URL);
    let single = result.data;

    // A *hacky* way to check for single results from the JazzHR API.
    if(single.title === undefined) {
      for (const job of result.data) {
        await createNode({
          children: [],
          id: job.id.toString(),
          title: job.title,
          country: job.country_id,
          city: job.city,
          state: job.state,
          zip: job.zip,
          department: job.department,
          description: job.description,
          open_date: job.original_open_date,
          type: job.type,
          status: job.status,
          board_code: job.board_code,
          parent: null,
          internal: {
            type: 'Job',
            contentDigest: crypto
              .createHash(`md5`)
              .update(JSON.stringify(job))
              .digest(`hex`),
          },
        });
      }
    } else {
      await createNode({
        children: [],
        id: single.id.toString(),
        title: single.title,
        country: single.country_id,
        city: single.city,
        state: single.state,
        zip: single.zip,
        department: single.department,
        description: single.description,
        open_date: single.original_open_date,
        type: single.type,
        status: single.status,
        board_code: single.board_code,
        parent: null,
        internal: {
          type: 'Job',
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(single))
            .digest(`hex`),
        },
      });
    }
  }
};
