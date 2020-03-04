// Template for displaying individual team-member content

import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import Teaser from "./../components/Teaser"
import Blockquote from "./../components/atoms/Blockquote"
import SectionTitle from "./../components/atoms/SectionTitle"
import { existy, getFirstName } from "../helpers"

export default function Template({ data, location }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    first_name,
    name,
    personal_pronouns,
    role,
    social,
    specialties,
    image,
    quote,
  } = frontmatter

  const memberLocation = frontmatter.location
  const quoteName = getFirstName(first_name, name)
  const personalPronouns = personal_pronouns ? personal_pronouns : ``

  let memberSpecialties
  let specs

  if (specialties) {
    memberSpecialties = specialties.map((item, index) => (
      <li className="hero__specialties" key={index}>
        {item}
      </li>
    ))
    specs = <ul className="hero__specs--list">{memberSpecialties}</ul>
  }
  return (
    <GeneralLayout
      heroTitle={name}
      heroSubtitle={role}
      heroClass="team-member__hero"
      pageTitle={`CivicActions | ${name}`}
      ogImage={image.childImageSharp.fluid.src}
      teamImage={image}
      location={memberLocation}
      personal_pronouns={personalPronouns}
      social={social}
      path={frontmatter.path}
      urlObject={location}
    >
      <div className="team_member__specs--wrapper">
        <section className=" section usa-grid team-member__specs">
          <div className="study__tech-specs ">
            <span className="study__tech-specs__title"> Specialties </span>
            <div> {specs} </div>
          </div>
        </section>
      </div>
      <section className="section text-container team-member__text">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {// Just show quote if quote exists
        quote && existy(quoteName) ? (
          <Blockquote quote={quote} quote_source={quoteName} />
        ) : (
          quote
        )}
      </section>
    </GeneralLayout>
  )
}

// Query for team member markdown content. This rarely needs to be changed
export const teamQuery = graphql`
  query TeamByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        first_name
        name
        personal_pronouns
        role
        location
        quote
        social {
          name
          url
        }
        specialties
        image {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 600) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
