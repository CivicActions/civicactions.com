// Template for displaying individual team-member content

import React from "react"
import { graphql,useStaticQuery } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import Teaser from "./../components/Teaser"
import Blockquote from "./../components/atoms/Blockquote"
import SectionTitle from "./../components/atoms/SectionTitle"
import { existy, getFirstName } from "../helpers"

export default function Template({ _, location }) {
  const data = useStaticQuery(query);
  console.log(data);
  return (
    <GeneralLayout
      heroTitle=""
      heroSubtitle=""
      urlObject={location}
    >
       {data.allStrapiStaffProfile.nodes.map((node,i)=>{
        if(node.Path == "/team/"+window.location.href.split('/')[4]){
         return  <pre key={i}>{JSON.stringify(node, null, 4)}</pre>
        }
      })}
      {/* {data.allStrapiStaffProfile.nodes.map((node,i)=>{
        return <div key={i}>
            <div>id: {node.id}</div> 
            <div>name: {node.name}</div> 
            <div>pronunciation: {node.pronunciation}</div> 
            <div>personal-pronouns: {node.personal_pronouns}</div> 
            <div>role: {node.role}</div> 
            <div>location: {node.location}</div> 
            <div>image: {node.image?.absolutePath}</div> 
            <div>audio: {node.audio?.absolutePath}</div> 
            {node.Social.map((social,i)=>{
              return <div key={i}>
                <div>index: {i}</div>
                <div>link: {social.link}</div>
                <div>title: {social.title}</div>
              </div>
            })}
            {node.Specialties.map((specialty,i)=>{
              return <div key={i}>
                <div>index: {i}</div>
                <div>text: {specialty.text}</div>
              </div>
            })}
            <div>body: {node.body}</div> 
            <div>quote: quote: {node.Quote.quote} - client: {node.Quote.client}</div>
        </div>
      })}  */}
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
          publicURL
        }
        Audio {
          publicURL
        }
      }
    }
  }
`


// class teamMemberTemplate extends React.Component {
//   componentDidMount() {
//     var playButton = document.getElementById("play-button")
//     if (playButton) {
//       playButton.onclick = function() {
//         var player = document.getElementById("audio-player")
//         if (player.paused) {
//           // player.volume = .25;
//           player.play()
//         } else {
//           player.pause()
//         }
//       }
//     }
//   }

//   render() {
//     const { markdownRemark } = this.props.data
//     const { frontmatter, html } = markdownRemark
//     const {
//       first_name,
//       name,
//       personal_pronouns,
//       role,
//       social,
//       medium_posts,
//       specialties,
//       image,
//       audio,
//       pronunciation,
//       quote,
//     } = frontmatter

//     const memberLocation = frontmatter.location
//     const quoteName = getFirstName(first_name, name)
//     const personalPronouns = personal_pronouns ? personal_pronouns : ``
//     const nameAudioFile = audio ? audio : ``
//     const namePronunciation = pronunciation ? pronunciation : ``

//     let memberSpecialties
//     let specs
//     let mediumPosts
//     let mediumPostsList

//     if (specialties) {
//       memberSpecialties = specialties.map((item, index) => (
//         <li className="hero__specialties" key={index}>
//           {item}
//         </li>
//       ))
//       specs = <ul className="hero__specs--list">{memberSpecialties}</ul>
//     }

//     if (medium_posts) {
//       mediumPosts = medium_posts.map((post, index) => (
//         <li className="medium--teaser__item teaser__item" key={index}>
//           <Teaser
//             teaserDate={post.date}
//             teaserTitle={post.title}
//             teaserLink={post.url}
//           />
//         </li>
//       ))
//       mediumPostsList = (
//         <ul className="team__medium-posts medium--teasers teaser--wrapper">
//           {mediumPosts}
//         </ul>
//       )
//     }
//     return (
//       <GeneralLayout
//         heroTitle={name}
//         heroSubtitle={role}
//         heroClass="team-member__hero"
//         pageTitle={`CivicActions | ${name}`}
//         ogImage={image.childImageSharp.fluid.src}
//         teamImage={image}
//         location={memberLocation}
//         personal_pronouns={personalPronouns}
//         social={social}
//         path={frontmatter.path}
//         urlObject={this.props.location}
//         audioFile={nameAudioFile}
//         pronunciation={namePronunciation}
//       >
//         <div className="team_member__specs--wrapper">
//           <section className=" section usa-grid team-member__specs">
//             <div className="study__tech-specs ">
//               <span className="study__tech-specs__title"> Specialties </span>
//               <div> {specs} </div>
//             </div>
//           </section>
//         </div>
//         <section className="section text-container team-member__text">
//           <div dangerouslySetInnerHTML={{ __html: html }} />
//           {// Just show quote if quote exists
//           quote && existy(quoteName) ? (
//             <Blockquote quote={quote} quote_source={quoteName} />
//           ) : (
//             quote
//           )}
//         </section>

//         {// Just show medium posts if medium posts exist
//         mediumPostsList ? (
//           <section className="section section__recent-posts team team-member__posts">
//             <div className="usa-grid">
//               <SectionTitle title="Authored articles" />
//               {mediumPostsList}
//             </div>
//           </section>
//         ) : (
//           mediumPostsList
//         )}
//       </GeneralLayout>
//     )
//   }
// }

// export default teamMemberTemplate

// // Query for team member markdown content. This rarely needs to be changed
// export const teamQuery = graphql`
//   query TeamByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//         first_name
//         name
//         personal_pronouns
//         pronunciation
//         role
//         location
//         quote
//         social {
//           name
//           url
//         }
//         specialties
//         image {
//           childImageSharp {
//             fluid(maxWidth: 600, maxHeight: 600) {
//               ...GatsbyImageSharpFluid_withWebp_noBase64
//             }
//           }
//         }
//         audio {
//           publicURL
//         }
//       }
//     }
//   }
// `
