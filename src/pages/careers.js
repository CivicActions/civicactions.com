import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"

import SectionTitle from "./../components/atoms/SectionTitle"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import IconParagraphsGroup from "../components/organisms/IconParagraphsGroup"
import ImageBand from "./../components/organisms/ImageBand"
import GlobalQuoteSlider from "./../components/organisms/GlobalQuoteSlider"
import Link from "./../components/scripts/Link"

const axios = require("axios")

class Careers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }

  componentDidMount() {
    axios.get(process.env.GATSBY_JAZZ_URL).then(
      result => {
        this.setState({
          isLoaded: true,
          items: result.items,
        })
      },
      error => {
        this.setState({
          isLoaded: true,
          error,
        })
      }
    )
  }

  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      console.log("error")
    } else if (!isLoaded) {
      console.log("loading...")
    } else {
      console.log(items)
    }

    const { allJob, markdownRemark } = this.props.data
    const { html, frontmatter } = markdownRemark
    const {
      benefits,
      benefits_title,
      image_band,
      quotes,
      quotes_title,
      openings_subtitle,
      openings_title,
      title,
      subtitle,
    } = frontmatter
    const { edges } = allJob

    const jobs = _.map(edges, (job, index) => {
      const url = `http://civicactions.applytojob.com/apply/${job.node.board_code}`

      return (
        <li key={job.node.id} className="teaser__item">
          <h4 className="teaser__title">
            <Link to={url}>{job.node.title}</Link>
          </h4>
          <div className="teaser__text">
            Location:&nbsp;
            <span class="city">
              {job.node.city ? job.node.city.trim() : null}
            </span>
            {job.node.city && job.node.state ? `, ` : null}
            <span class="state">{job.node.state}</span>
          </div>
          <div className="teaser__text">
            Type: <span class="type">{job.node.type}</span>
          </div>
        </li>
      )
    })

    return (
      <GeneralLayout
        heroTitle={title}
        heroSubtitle={subtitle}
        hideSubFooter={true}
        urlObject={this.props.location}
      >
        <section className="section section__careers">
          <div className="usa-grid">
            <div
              className="text-container--careers"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>

        <section className="section section__triple-quotes section__triple-quotes-careers neutral-hex-bg">
          <div className="usa-grid">
            <SectionTitle title={quotes_title} />
            <div className="blockquotes__list">
              <GlobalQuoteSlider quotes={quotes} />
            </div>
          </div>
        </section>

        <section className="section section_benefits">
          <section className="usa-grid">
            <SectionTitle title={benefits_title} />
            <IconParagraphsGroup icons={benefits} />
          </section>
        </section>

        <section className="section section__recent-posts section__recent-posts-careers neutral-hex-bg">
          <div className="usa-grid">
            <SectionTitle title={openings_title} subtitle={openings_subtitle} />
            <ul className="teaser--wrapper">{jobs}</ul>
          </div>
        </section>
        <section className="feed__image--wrapper">
          <ImageBand imageArray={image_band} />
        </section>
      </GeneralLayout>
    )
  }
}

export default Careers

export const jobsQuery = graphql`
  query jobsQuery {
    markdownRemark(frontmatter: { title: { eq: "Careers" } }) {
      html
      frontmatter {
        image_band {
          childImageSharp {
            resize(quality: 50) {
              src
            }
          }
        }

        benefits_title
        benefits {
          alt
          title
          caption
          icon {
            publicURL
          }
        }
        openings_title
        openings_subtitle
        title
        subtitle
        quotes_title
        quotes {
          image {
            childImageSharp {
              fixed(width: 264, height: 264) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          text
          author
        }
      }
    }
    allJob {
      edges {
        node {
          id
          title
          city
          state
          type
          board_code
        }
      }
    }
  }
`
