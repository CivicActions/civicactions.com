// Template for displaying individual team-member content

import React from "react"
import { graphql,useStaticQuery } from "gatsby"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import Markdown from "react-markdown";
import Teaser from "./../components/Teaser"
import Blockquote from "./../components/atoms/Blockquote"
import SectionTitle from "./../components/atoms/SectionTitle"
import { existy, getFirstName } from "../helpers"

export default function Template({ _, location }) {
  
  const data = useStaticQuery(query);
  var playButton = document.getElementById("play-button")
  if (playButton) {
      playButton.onclick = function() {
        var player = document.getElementById("audio-player")
        if (player.paused) {
          player.play()
        } else {
          player.pause()
        }
      }
  }
  let member = {};
  data.allStrapiStaffProfile.nodes.map((node,i)=>{
    if(node.Path == "/team/"+window.location.href.split('/')[4]){
      member = node;
    }
  });
  return (
    <GeneralLayout
      heroTitle={member.Name}
      heroSubtitle={member.Role}
      heroClass="team-member__hero"
      pageTitle={`CivicActions | ${member.Name}`}
      ogImage={member.Image.childImageSharp.fluid.src}
      teamImage={member.Image}
      location={member.Location}
      personal_pronouns={member.Personal_Pronouns}
      social={member.Social}
      path={member.Path}
      urlObject={location}
      audioFile={member.Audio}
      pronunciation={member.Pronunciation}
    >
        <div className="team_member__specs--wrapper">
          <section className=" section usa-grid team-member__specs">
            <div className="study__tech-specs ">
              <span className="study__tech-specs__title"> Specialties </span>
              <ul className="hero__specs--list">
                {member.Specialty.map((spec, index) => (
                  <li className="hero__specialties" key={index}>
                    {spec.Specialty}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <section className="section text-container team-member__text">
          <Markdown source={member.Body} escapeHtml={false}/>
          {member.Quote ? (
            <Blockquote quote={member.Quote} quote_source={member.Name.split(" ")[0]} />
          ) : (
            <div></div>
          )}
        </section>
    </GeneralLayout>
  );
};


export const query = graphql`
  {
    allStrapiStaffProfile {
      nodes {
        id
        Name
        Pronunciation
        Personal_Pronouns
        Role
        Path
        Location
        Quote
        Social {
          Title
          Url
        }
        Specialty {
          Specialty
          id
        }
        Body
        Image {
          childImageSharp {
            fluid(maxHeight: 600, maxWidth: 600){
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Audio {
          publicURL
        }
      }
    }
  }
`