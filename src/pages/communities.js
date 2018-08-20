import React from "react"
import _ from 'lodash'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SectionTitle from '../components/atoms/SectionTitle'
import Button from '../components/atoms/Buttons'
import GeneralLayout from "./../components/layouts/GeneralLayout"
import MediumPostList from '../components/medium-components/mediumPostList'


const Communities = ({ data }) => {
  const{ markdownRemark, allMediumPost } = data;
  const { frontmatter } = markdownRemark;
  const { agl_button_text, agl_button_link, title, subtitle, agile_intro_text, dkan_title, dkan_button_text, dkan_button_link, dkan_intro_text,agl_logo, dkan_logo } = frontmatter;

  const { group } = allMediumPost;

  // @todo Test if this will consistently return the AGL group of posts first.
  // It may be better to filter with JS using specified homeCollection ID's.

  let mediumAGL = _.first(group, (edges) => {
    return edges
  });

  let AGLPosts = _.map(mediumAGL, (post, index) => {
    return <MediumPostList posts = {{ post }} />
  });

  let aglLogo = agl_logo ? agl_logo.childImageSharp.resolutions: '';


  let mediumDKAN = _.last(group, (edges) => {
    return edges;
  });

  let DKANPosts = _.map(mediumDKAN, (post, index) => {
    return <MediumPostList posts = {{ post }} />
  });
  let dkanLogo = dkan_logo ? dkan_logo.childImageSharp.resolutions: '';


  return(
    <GeneralLayout
      heroTitle = { title }
      heroSubtitle = { subtitle }
    >

      {/* The Recent AGL Posts from Medium Section.*/}
      <section className = "section section__recent-posts">
        <div className = "usa-grid community__wrapper">
          <span className = "community__logo"><Img resolutions = { aglLogo } /></span>
          <SectionTitle
            title = "Agile Government Leadership"
            subtitle = { agile_intro_text }
          />
          { AGLPosts }
        </div>
        <div className = "usa-grid">
          <Button
            button_text = {agl_button_text}
            link = {agl_button_link}
            isExternal = { true }
          />
        </div>
      </section>

      {/* The Recent DKAN Posts from Medium Section.*/}
      <section className = "section section__recent-posts right-flipped">
        <div className = "usa-grid community__wrapper">
          <span className = "community__logo dkan"><Img resolutions = { dkanLogo } /></span>
          <SectionTitle
            title = {dkan_title}
            subtitle = { dkan_intro_text }
          />
          { DKANPosts }
        </div>
        <div className = "usa-grid align-right">
          <Button
            button_text = {dkan_button_text}
            link = {dkan_button_link}
            isExternal = { true }
          />
        </div>
      </section>
    </GeneralLayout>
  );
}

export default Communities;

export const communitiesQuery = graphql`
  query communityPosts {
   allMediumPost(filter: {approvedHomeCollectionId : { ne: "b1968dbe7197" }}) {
    group(limit: 3, field: approvedHomeCollectionId) {
      edges {
        node {
          title
          createdAt
          uniqueSlug
        }
      }
    }
  }

  markdownRemark(frontmatter: {title :{ eq: "Our Communities"}}) {
    frontmatter {
      agl_button_text
      agl_button_link
      title
      subtitle
      agile_intro_text
      dkan_button_text
      dkan_button_link
      dkan_intro_text
      dkan_title
      agl_logo {
        childImageSharp {
          resolutions(width: 67, height: 67) {
          ...GatsbyImageSharpResolutions_withWebp
          }
        }
      }
      dkan_logo {
        childImageSharp {
          resolutions(width: 67, height: 67) {
          ...GatsbyImageSharpResolutions_withWebp
          }
        }
      }
    }
  }
}
`;
