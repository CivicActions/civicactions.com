import React from "react"
import _ from 'lodash'
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import Benefits from '../components/organisms/Benefits';

const Careers = ({data}) => {
  const{ allJob } = data;
  const { edges } = allJob;

  const jobs = _.map(edges, (job, index) => {

    let url = `http://civicactions.applytojob.com/apply/${job.node.board_code}`;

    return (
        <li key = { job.node.id }>
          <h4>{ job.node.title }</h4>
          <p>Location: { job.node.city}, { job.node.state }</p>
          <p>Type: { job.node.type }</p>
          <a href = {url} > View Details</a>
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

     <Benefits/>

    </GeneralLayout>
  )
};

export default Careers;


export const jobsQuery = graphql `
  query jobsQuery {
     allJob {
      edges {
        node {
          id,
          title,
          city,
          state,
          type,
          board_code
        }
      }
    }
  }
`;
