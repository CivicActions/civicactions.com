import React from "react"
import _ from 'lodash'
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"

const Careers = ({data}) => {
  const{ allThirdPartyJobs } = data;
  const { edges } = allThirdPartyJobs;

  console.log(edges);

  const jobs = _.map(edges, (job, index) => {
    return (
        <li key = { job.node.id }>
          <h4>{ job.node.title }</h4>
          <p>Location: { job.node.city}, { job.node.state }</p>
          <p>Type: { job.node.type }</p>
        </li>
      )
  });

  return(
    <GeneralLayout
      heroTitle = "Careers"
      heroSubtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
      <ul>
        {jobs}
      </ul>
    </GeneralLayout>
  )
};

export default Careers;

export const jobsQuery = graphql `
  query jobsQuery {
    allThirdPartyJobs {
      edges {
        node {
          id,
          title,
          city,
          state,
          type,
        }
      }
    }
  }
`;