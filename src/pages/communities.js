import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SectionTitle from "../components/atoms/SectionTitle"
import Link from "./../components/scripts/Link"
import GeneralLayout from "./../components/layouts/GeneralLayout"

const Communities = ({ data }) => {
  const { markdownRemark } = data
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



  const aglLogo = agl_logo ? agl_logo.childImageSharp.resolutions : ``
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
          AGL POSTS
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
          DKAN POSTS
        </div>
      </section>
    </GeneralLayout>
  )
}

export default Communities

export const communitiesQuery = graphql`
  query communityPosts {

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
