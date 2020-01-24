import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import PressTeaser from "./../components/PressTeaser"

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const Press = ({ data, pageContext, location }) => {
  // pagination. See gatsby node for loading of pageContext.
  const { group, index, first, last } = pageContext
  const previousUrl =
    index - 1 === 1 ? `/press` : `/press/` + (index - 1).toString()
  const nextUrl = `/press/` + (index + 1).toString()
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const { title, subtitle } = frontmatter

  const pressItems = group.map(({ node }, index) => {
    const { frontmatter, html } = node
    const { title, date, publication, link_text, website } = frontmatter

    return (
      <PressTeaser
        publication={publication}
        date={date}
        key={index}
        title={title}
        text={html}
        link_text={link_text}
        website={website}
      />
    )
  })

  return (
    <GeneralLayout
      heroTitle={title}
      heroSubtitle={subtitle}
      urlObject={location}
    >
      <section className="section">
        <div className="usa-grid text-container">
          <ul className="press__list">{pressItems}</ul>

          <div className="prev-next-links">
            <div className="previous">
              <NavLink test={first} url={previousUrl} text="Previous" />
            </div>
            <div className="next">
              <NavLink test={last} url={nextUrl} text="Next" />
            </div>
          </div>
        </div>
      </section>
    </GeneralLayout>
  )
}
export default Press

export const pressQuery = graphql`
  query pressPage {
    markdownRemark(frontmatter: { title: { eq: "Press" } }) {
      frontmatter {
        title
        subtitle
      }
    }
  }
`
