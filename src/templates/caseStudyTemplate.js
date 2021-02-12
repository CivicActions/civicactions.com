// Template for displaying individual case-study content

import React from "react"
import _ from "lodash"
import { graphql, useStaticQuery} from "gatsby"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import ImageSlider from "./../components/organisms/ImageSlider"
import RelatedByTitle from "./../components/RelatedByTitle"


export default function Template({ _, location }) {
  const data = useStaticQuery(query);
  console.log(data);
  return (
    <GeneralLayout
      heroTitle=""
      pageTitle=""
      clientName=""
      heroCTALink=""
      heroCTAText="Visit Website"
      heroClass="case-study-hero"
      heroIsExternal={true}
      path={window.location.href}
      urlObject={location}
    >
      {data.allStrapiCaseStudy.nodes.map((node,i)=>{
        if(node.Path == "/case-study/"+window.location.href.split('/')[4]){
         return  <pre key={i}>{JSON.stringify(node, null, 4)}</pre>
        }
      })}
     
    </GeneralLayout>
  )
}
export const query = graphql`
  {
    allStrapiCaseStudy{
      nodes {
        Path
        Style
        Title
        Client_Name
        New_Style {
          Title
          Path
          Outcome_Text
          Explore
          Client_Name
          Client_Goal_Text
          Challenge_Text
          Approach_Text
          Approach_Image {
            url
          }
          Approach_Section {
            Text
            Title
            Image {
              publicURL
            }
          }
          Client_Goal_Bullet {
            Text
          }
          Expertise {
            Text
          }
          Figure {
            Header
            Text
          }
          Outcome {
            Caption
            Title
            Icon {
              url
            }
          }
          Preview_Image {
            url
          }
          Quote {
            Quote
            Source
          }
          Realated_Titles {
            Text
          }
          Technology {
            Text
          }
        }
        id
        Old_Style {
          Approach
          Project
          Website
          Background {
            Section_One
            Section_Two
            Title
          }
          Images {
            alternativeText
            caption
            url
          }
          Preview_Image {
            publicURL
          }
          Related_Titles {
            Text
          }
          Specs {
            Text
          }
          Tags {
            Text
          }
        }
      }
    }
  }
`



// OLD CODE TO BE USED AS REFERENCE WHILE BUILDING CURRENT

// export default function Template({ data, location }) {
//   const { markdownRemark, allMarkdownRemark } = data
//   const { frontmatter, html } = markdownRemark
//   const { related_titles, specs, tags, images } = frontmatter
//   const { edges } = allMarkdownRemark

//   const specsList = _.map(specs, (spec, index) => (
//     <li className="study__item" key={index}>
//       {` `}
//       {spec}
//     </li>
//   ))

//   const tagsList = tags.map((tag, index) => (
//     <button className="tags" key={index}>
//       {tag}
//     </button>
//   ))

//   return (
//     <GeneralLayout
//       heroTitle={frontmatter.title}
//       pageTitle={`CivicActions | ${frontmatter.title}`}
//       clientName={frontmatter.client_name}
//       heroCTALink={frontmatter.website}
//       heroCTAText="Visit Website"
//       heroClass="case-study-hero"
//       heroIsExternal={true}
//       path={frontmatter.path}
//       urlObject={location}
//     >
//       <div className="section__specs section">
//         <section className="usa-grid study">
//           <div className="study__project study--col">
//             <h3>Project</h3>
//             <div className="study__project__title">{frontmatter.project}</div>
//             {frontmatter.partner ? (
//               <div className="study__project__partner">
//                 <h3>Partner</h3>
//                 <div className="study__project__title">
//                   {frontmatter.partner}
//                 </div>
//               </div>
//             ) : null}
//           </div>
//           <div className="study__tech-specs study--col">
//             <h3> Tech Specs </h3>
//             <ul>{specsList}</ul>
//           </div>
//         </section>
//       </div>
//       <div className="text-container section">
//         <h3>Background</h3>
//         <h4> {frontmatter.background_section_title} </h4>
//         <p>{frontmatter.background_section} </p>
//         <p> {frontmatter.background_section_second} </p>
//       </div>
//       <ImageSlider images={images} />
//       <div className="text-container section">
//         <div
//           className="case-study-text"
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//       </div>
//       {related_titles ? (
//         <RelatedByTitle posts={edges} titles={related_titles} />
//       ) : null}
//     </GeneralLayout>
//   )
// }

// // Query case study content
// export const studyQuery = graphql`
//   query StudyByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//         title
//         client_name
//         partner
//         project
//         website
//         background_section_title
//         background_section
//         background_section_second
//         related_titles
//         tags
//         specs
//         images {
//           caption
//           alt
//           url {
//             childImageSharp {
//               fixed(width: 1400, height: 788) {
//                 ...GatsbyImageSharpFixed_withWebp_noBase64
//               }
//             }
//           }
//         }
//       }
//     }

//     allMarkdownRemark(
//       filter: {
//         frontmatter: { type: { eq: "case-study" }, path: { ne: $path } }
//       }
//     ) {
//       totalCount
//       edges {
//         node {
//           frontmatter {
//             client_name
//             title
//             path
//             tags
//             preview_image {
//               childImageSharp {
//                 fixed(width: 600, height: 600) {
//                   src
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `


























