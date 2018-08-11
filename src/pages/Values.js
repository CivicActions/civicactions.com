import React from "React";
import { graphql } from "gatsby";

import GeneralLayout from './../components/layouts/GeneralLayout';
import GlobalQuoteSlider from './../components/organisms/GlobalQuoteSlider';
import SectionTitle from './../components/atoms/SectionTitle';
import ThreeColGrid from './../components/organisms/ThreeColGrid';

const Values = ({ data }) => {
  const{ markdownRemark } = data;
  const{ frontmatter, html } = markdownRemark;
  const{
    title,
    subtitle,
    thankyou_text,
    thankyou_images,
    quotes,
    quotes_title } = frontmatter;

  console.log(typeof(thankyou_images));

  return(
    <GeneralLayout
      heroTitle = { title }
      heroSubtitle = { subtitle }
    >
      <section className = "section">
        <div className = "usa-grid">
          <p className = "text-container" dangerouslySetInnerHTML = {{ __html: html }} />
        </div>
      </section>

      <section className = "section section__triple-quotes neutral-hex-bg">
        <div className = "usa-grid">
            <SectionTitle title = { quotes_title } />
            <div className = "blockquotes__list">
              <GlobalQuoteSlider quotes = {quotes} />
              </div>
          </div>
        </section>

      <section className = "section section_benefits usa-grid">
        <SectionTitle title = "Thanks"/>
        <div className = "section__benefits--intro-text">{ thankyou_text }</div>
        <ThreeColGrid items = { thankyou_images } />
      </section>
    </GeneralLayout>
  );
};

export default Values;

export const valuesQuery = graphql`
  query valuesPage {
    markdownRemark(frontmatter: { title: { eq: "Our Values" } } ) {
    html
    frontmatter {
      title
      subtitle
      thankyou_text
      thankyou_images {
        text
        image {
          childImageSharp{
            resize(width: 516) {
              src
            }
          }
        }
      }
      quotes_title
      quotes {
        image {
    childImageSharp{
            resize(width: 132, height: 132) {
              src
            }
          }
        }
        text
        author
      }
    }
  }
  }
`;