import React from "react"
import { graphql } from "gatsby"
import YouTubeVideo from "./../components/atoms/YouTubeVideo"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import SectionTitle from "../components/atoms/SectionTitle"

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
  } = frontmatter

  const videoTeasers = videos.map((video, index) => {
    return <YouTubeVideo key={index} video={video} />
  })

  return (
    <GeneralLayout heroTitle={title} heroSubtitle={subtitle}>
      <div className="usa-grid-full">
        <SectionTitle title={videos_title} />
      </div>
      <section className="section usa-grid section__talks">
        {videoTeasers}
      </section>
    </GeneralLayout>
  )
}

export default Talks

export const talksQuery = graphql`
  query talksPage {
    markdownRemark(frontmatter: { title: { eq: "Talks" } }) {
      html
      frontmatter {
        title
        subtitle
        videos_title
        videos {
          url
          related_link_title
          related_link
        }
      }
    }
  }
`
