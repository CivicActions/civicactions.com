// Template for displaying individual team-member content

import React from 'react';
import { graphql } from 'gatsby';

import GeneralLayout from './../components/layouts/GeneralLayout';
import Teaser from './../components/Teaser';
import Blockquote from './../components/atoms/Blockquote';
import SectionTitle from './../components/atoms/SectionTitle';

export default function Template({data}) {
  const{ markdownRemark } = data;
  const{ frontmatter, html } = markdownRemark;
  const{ name, role, location, social, medium_posts, specialties, image, quote } = frontmatter;

  let quoteName = name.split(' ');

  let memberSpecialties,
    specs,
    mediumPosts,
    mediumPostsList;

  let memberImage = image ? image.childImageSharp.resize.src: '';

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

  return (
    <GeneralLayout
      heroTitle    = { name }
      heroSubtitle = { role }
      heroClass    = 'team-member__hero'
      pageTitle    = { `CivicActions | ${name}`}
      teamImage    = { memberImage }
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
        <Blockquote
          quote = { quote }
          quote_source = { quoteName[0] }
        />
      </section>
      <section className = "section section__recent-posts team team-member__posts">
        <div className = "usa-grid">
          <SectionTitle title = "Authored Articles" />
          { mediumPostsList }
        </div>
      </section>
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
            resize(width: 300, height: 300) {
              src
            }
          }
        }
      }
    }
  }
`;