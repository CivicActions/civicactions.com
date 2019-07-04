import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SectionTitle from '../components/atoms/SectionTitle'
import Link from "./../components/scripts/Link";
import GeneralLayout from "./../components/layouts/GeneralLayout"
import MediumPostList from '../components/medium-components/mediumPostList'


const Communities = ({ data }) => {
  const{ markdownRemark, allMediumPost } = data;
  const { frontmatter } = markdownRemark;
  const { agl_button_text,
	  agl_button_link,
	  dsc_intro_text,
	  dsc_title,
	  dsc_logo,
	  dsc_button_text,
	  dsc_button_link,
	  title,
	  subtitle,
	  agile_intro_text,
	  dkan_title,
	  dkan_button_text,
	  dkan_button_link,
	  dkan_intro_text,
	  agl_logo,
	  dkan_logo } = frontmatter;

  const { group: medium } = allMediumPost;

  return(
    <GeneralLayout
      heroTitle = { title }
      heroSubtitle = { subtitle } >

      {/* The Recent AGL Posts from Medium Section.*/}
      <section className = "section section__recent-posts">
        <div className = "usa-grid community__wrapper">
          <span className = "community__logo"><Img resolutions = { agl_logo ? agl_logo.childImageSharp.resolutions: '' } /></span>
          <SectionTitle
            title = "Agile Government Leadership"
            subtitle = { agile_intro_text }>
            <Link
              to = { agl_button_link }
              children = { agl_button_text }
              className = 'link-button external-link'
              />
          </SectionTitle>
	  <MediumPostList posts = { (medium[1]) ? medium[1] : null } />
        </div>
      </section>


     {/* The Recent DSC Posts from Medium Section.*/}
      <section className = "section section__recent-posts right-flipped central">
        <div className = "usa-grid community__wrapper">
          <span className = "community__logo dsc"><Img resolutions = {  dsc_logo ? dsc_logo.childImageSharp.resolutions : '' } /></span>
          <SectionTitle
            title = { dsc_title }
            subtitle = { dsc_intro_text }>
            <Link
              to = { dsc_button_link }
              children = { dsc_button_text }
              className = 'link-button external-link'
            />
          </SectionTitle>
	  <MediumPostList posts = { (medium[0]) ? medium[0] : null } />
        </div>
      </section>


      {/* The Recent DKAN Posts from Medium Section.*/}
      <section className = "section section__recent-posts">
        <div className = "usa-grid community__wrapper">
          <span className = "community__logo dkan"><Img resolutions = { dkan_logo ? dkan_logo.childImageSharp.resolutions: '' } /></span>
          <SectionTitle
            title = {dkan_title}
            subtitle = { dkan_intro_text }>
            {/* Passing in a link component as props.children.  */}
            <Link
              to = { dkan_button_link }
              children = { dkan_button_text }
              className = 'link-button external-link'
            />
          </SectionTitle>
	  <MediumPostList posts = { (medium[2]) ? medium[2] : null } />
        </div>
      </section>
    </GeneralLayout>
  );
}

export default Communities;

export const communitiesQuery = graphql`
  query communityPosts {
   allMediumPost(filter: {approvedHomeCollectionId : { ne: "b1968dbe7197" }}) {
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

  markdownRemark(frontmatter: {title :{ eq: "Our Communities"}}) {
    frontmatter {
      dsc_title
      dsc_intro_text
      dsc_button_text
      dsc_button_link

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
      dsc_logo {
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
`;
