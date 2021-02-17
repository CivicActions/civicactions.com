import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Link from "gatsby-link"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import PressTeaser from "./../components/PressTeaser"

const NavLink = props => {
  if (props.url != null) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const Press = props => {
  const data = useStaticQuery(query)
  let currentPageIndex = parseInt(window.location.href.split("/press/")[1] ?? 0)
  let nextPageIndex = currentPageIndex + (currentPageIndex == 0 ? 2 : 1)
  let nextUrl = "/press/" + (isNaN(nextPageIndex) ? 2 : nextPageIndex)
  let prevPageIndex =
    currentPageIndex == 0
      ? null
      : currentPageIndex - (currentPageIndex == 2 ? 2 : 1)
  let prevUrl =
    isNaN(prevPageIndex) || prevPageIndex == null
      ? null
      : "/press/" + (prevPageIndex == 0 ? "" : prevPageIndex)
  return (
    <GeneralLayout heroTitle="Press" heroSubtitle="" urlObject={props.location}>
      <section className="section">
        <div className="usa-grid text-container">
          <ul className="press__list">
            {data.allStrapiPress.nodes.map((node, i) => {
              let k =
                isNaN(currentPageIndex) || currentPageIndex == 0
                  ? 1
                  : currentPageIndex
              if (i > k * 2 && i < k * 2 + 5)
                return (
                  <div key={i}>
                    <PressTeaser
                      publication={node.Publication}
                      date={node.Date}
                      title={node.Title}
                      body={node.Body}
                      link_text={node.Link_Text}
                      link={node.Link}
                    />
                  </div>
                )
            })}
          </ul>
          <div className="prev-next-links">
            <div className="previous">
              <NavLink url={prevUrl} text="Previous" />
            </div>
            <div className="next">
              <NavLink url={nextUrl} text="Next" />
            </div>
          </div>
        </div>
      </section>
    </GeneralLayout>
  )
}

export default Press

export const query = graphql`
  {
    allStrapiPress(sort: { fields: Date, order: DESC }) {
      nodes {
        Body
        Date
        Link
        Link_Text
        Path
        Publication
        Title
      }
    }
  }
`
