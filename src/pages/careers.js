import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"
const axios = require('axios');
const crypto = require('crypto');

import SectionTitle from "./../components/atoms/SectionTitle"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import IconParagraphsGroup from "../components/organisms/IconParagraphsGroup"
import ImageBand from "./../components/organisms/ImageBand"
import GlobalQuoteSlider from "./../components/organisms/GlobalQuoteSlider"
import Link from "./../components/scripts/Link"

class Careers extends React.Component {

  constructor() {
    super()
    this.state = {
      jazzJobs: [],
    }
  }

  getJazzJobs = async () => {
    // If environment variable is set to 'development':
    if (process.env.GATSBY_JAZZ_URL === 'development') {
      const fakeJob = {
        id: "123",
        title: "Test job",
        country: 1,
        city: "Test",
        state: "Test",
        zip: 12345,
        department: "Test",
        description: "Test",
        open_date: "Open date",
        type: "Job type",
        status: "Job status",
        board_code: "Board code",
        parent: null,
        internal: {
          type: 'Job',
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify({}))
            .digest(`hex`),
        },
      };
      this.setState({ jazzJobs: [ fakeJob ] });
    } else { // Environment variable is not set to development:
      let response = await axios.get(process.env.GATSBY_JAZZ_URL);
      this.setState({ jazzJobs: response.data });
    };
  }

  componentDidMount() {
    this.getJazzJobs();
  }

  render() {
    const JazzJobs = this.state;

    const { markdownRemark } = this.props.data
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

    const jobs = _.map(JazzJobs.jazzJobs, (job, index) => {
      const url = `http://civicactions.applytojob.com/apply/${job.board_code}`
      return (
        <li key={job.id} className="teaser__item">
          <h4 className="teaser__title">
            <Link to={url}>{job.title}</Link>
          </h4>
          <div className="teaser__text">
            Location:&nbsp;
            <span class="city">
              {job.city ? job.city.trim() : null}
            </span>
            {job.city && job.state ? `, ` : null}
            <span class="state">{job.state}</span>
          </div>
          <div className="teaser__text">
            Type: <span class="type">{job.type}</span>
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

export const careersQuery = graphql`
  query careersQuery {
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
  }
`
