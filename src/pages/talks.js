import React from "react"
import { graphql } from "gatsby"
import _ from "lodash"

import YouTubeVideo from "./../components/atoms/YouTubeVideo"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import SectionTitle from "../components/atoms/SectionTitle"
import Teaser from "./../components/Teaser"
import Link from "./../components/scripts/Link.js"

const Talks = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    title,
    subtitle,
    videos,
    videos_title,
    related_link_title,
    related_link,
    what_we_have_been_talking_about_teasers,
  } = frontmatter

  const videoTeasers = videos.map((video, index) => {
    return <YouTubeVideo key={index} video={video} />
  })

  const whatWeHaveBeenTalkingAboutTeasers = _.map(
    what_we_have_been_talking_about_teasers,
    (item, index) => {
      const { title, link, date } = item
      return (
        <li className="what-weve-been-talking-about--teaser__item teaser__item">
          <Teaser
            key={{ index }}
            teaserDate={date}
            teaserTitle={title}
            teaserLink={link}
          />
        </li>
      )
    }
  )

  return (
    <GeneralLayout heroTitle={title} heroSubtitle={subtitle}>
      <div className="usa-grid-full">
        <SectionTitle title={videos_title} />
      </div>
      <section className="section usa-grid section__talks">
        {videoTeasers}
      </section>

      {/* What we've been talking about */}
      <section className="section section__what-weve-been-talking-about">
        <div className="usa-grid">
          <SectionTitle title="What we've been talking about" />
          <div className="teaser-wrapper">
            <ul className="what-weve-been-talking-about--teasers">
              {whatWeHaveBeenTalkingAboutTeasers}
            </ul>
            <Link
              children="See more talks"
              to="https://medium.com/civicactions/tagged/civicactions-talks"
              className="link-button"
            />
          </div>
        </div>
      </section>
    </GeneralLayout>
  )
}

export default Talks

export const query = graphql`
  query talksContent {
    markdownRemark(frontmatter: { title: { eq: "Talks" } }) {
      html
      frontmatter {
        title
        subtitle
        videos_title
        videos {
          youTubeID
          related_link_title
          related_link
          cover_image {
            childImageSharp {
              fixed(width: 462, height: 247) {
                src
              }
            }
          }
        }
        what_we_have_been_talking_about_teasers {
          date
          title
          link
        }
      }
    }
  }
`
