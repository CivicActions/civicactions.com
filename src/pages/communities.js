import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SectionTitle from "../components/atoms/SectionTitle"
import Link from "./../components/scripts/Link"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import MediumPostList from "../components/medium-components/mediumPostList"

const Communities = ({ data }) => {
  const { markdownRemark, allMediumPost } = data
  const { frontmatter } = markdownRemark
  const {
    agl_button_text,
    agl_button_link,
    title,
    subtitle,
    agile_intro_text,
    dkan_title,
    dkan_button_text,
    dkan_button_link,
    dkan_intro_text,
    agl_logo,
    dkan_logo,
  } = frontmatter

  const { group } = allMediumPost

  // @todo Test if this will consistently return the AGL group of posts first.
  // It may be better to filter with JS using specified homeCollection ID's.

  const mediumAGL = _.first(group, edges => edges)

  const AGLPosts = _.map(mediumAGL, (post, index) => (
    <MediumPostList posts={{ post }} />
  ))

  const aglLogo = agl_logo ? agl_logo.childImageSharp.resolutions : ``

  const mediumDKAN = _.last(group, edges => edges)

  const DKANPosts = _.map(mediumDKAN, (post, index) => (
    <MediumPostList posts={{ post }} />
  ))
  const dkanLogo = dkan_logo ? dkan_logo.childImageSharp.resolutions : ``

  return (
    <GeneralLayout heroTitle={title} heroSubtitle={subtitle}>
      {/* The Recent AGL Posts from Medium Section.*/}
      <section className="section section__recent-posts">
        <div className="usa-grid community__wrapper">
          <span className="community__logo">
            <Img resolutions={aglLogo} />
          </span>
          <SectionTitle
            title="Agile Government Leadership"
            subtitle={agile_intro_text}
          >
            <Link
              to={agl_button_link}
              children={agl_button_text}
              className="link-button external-link"
            />
          </SectionTitle>
          {AGLPosts}
        </div>
      </section>

      {/* The Recent DKAN Posts from Medium Section.*/}
      <section className="section section__recent-posts right-flipped">
        <div className="usa-grid community__wrapper">
          <span className="community__logo dkan">
            <Img resolutions={dkanLogo} />
          </span>
          <SectionTitle title={dkan_title} subtitle={dkan_intro_text}>
            {/* Passing in a link component as props.children.  */}
            <Link
              to={dkan_button_link}
              children={dkan_button_text}
              className="link-button external-link"
            />
          </SectionTitle>
          {DKANPosts}
        </div>
      </section>
    </GeneralLayout>
  )
}

export default Communities

export const communitiesQuery = graphql`
  query communityPosts {
    allMediumPost(
      filter: { approvedHomeCollectionId: { ne: "b1968dbe7197" } }
    ) {
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

    markdownRemark(frontmatter: { title: { eq: "Our Communities" } }) {
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
`
