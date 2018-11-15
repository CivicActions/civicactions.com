// Template for displaying individual team-member content

import React from 'react';
import { graphql } from 'gatsby';

import GeneralLayout from './../components/layouts/GeneralLayout';
import Teaser from './../components/Teaser';
import Blockquote from './../components/atoms/Blockquote';
import SectionTitle from './../components/atoms/SectionTitle';
import {existy, getFirstName} from "../helpers";

export default function Template({data}) {
  const{ markdownRemark } = data;
  const{ frontmatter, html } = markdownRemark;
  const{ first_name, name, role, location, social, medium_posts, specialties, image, quote } = frontmatter;

  const quoteName = getFirstName(first_name, name);

  let memberSpecialties,
    specs,
    mediumPosts,
    mediumPostsList;

  if(specialties) {
    memberSpecialties = specialties.map((item, index) => {
      return <li className = "hero__specialties" key = { index }>{ item }</li>
    });
    specs = <ul className = "hero__specs--list">{ memberSpecialties }</ul>
  }

  if(medium_posts) {
    mediumPosts = medium_posts.map((post, index) => {
      return (
        <li className = "medium--teaser__item teaser__item" key = { index }>
          <Teaser
            teaserDate = { post.date }
            teaserTitle = { post.title }
            teaserLink = { post.url }
          />
        </li>
      );
    });
    mediumPostsList = <ul className = "team__medium-posts medium--teasers teaser--wrapper">{ mediumPosts }</ul>

  }

  const url = window.location.protocol+'//'+window.location.hostname+(window.location.port ? ':'+window.location.port: '');
  return (
    <GeneralLayout
      heroTitle    = { name }
      heroSubtitle = { role }
      heroClass    = 'team-member__hero'
      pageTitle    = { `CivicActions | ${name}`}
      ogImage      = { url + image.childImageSharp.fluid.src}
      teamImage    = { image }
      location     = { location }
      social       = { social }
    >
      <div className = "team_member__specs--wrapper">
        <section className = " section usa-grid team-member__specs">
          <div className = "study__tech-specs ">
            <span className = "study__tech-specs__title"> Specialties </span>
            <div> { specs } </div>
          </div>
        </section>
      </div>
      <section className = "section text-container team-member__text">
        <div dangerouslySetInnerHTML = {{ __html: html}} />
        { // Just show quote if quote exists
          quote && existy(quoteName) ?
            <Blockquote
              quote = { quote }
              quote_source = { quoteName }
            />
          : quote }
      </section>

      { // Just show medium posts if medium posts exist
        mediumPostsList ?
          <section className = "section section__recent-posts team team-member__posts">
            <div className = "usa-grid">
              <SectionTitle title = "Authored Articles" />
              { mediumPostsList }
            </div>
          </section>
        : mediumPostsList }

    </GeneralLayout>
  );
};

// Query for team member markdown content. This rarely needs to be changed
export const teamQuery = graphql `
  query TeamByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } } ) {
      html
      frontmatter {
        path
        first_name
        name
        role
        location
        quote
        social {
          name
          url
        }
        medium_posts {
          title
          date
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
`;
