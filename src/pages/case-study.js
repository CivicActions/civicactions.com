import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import FeaturedClients from "./../components/organisms/FeaturedClients"
import FilteredCaseStudies from "./../components/FilteredCaseStudies"
import GlobalQuoteSlider from "./../components/organisms/GlobalQuoteSlider"
import SectionTitle from "./../components/atoms/SectionTitle"


class CaseStudies extends React.Component {
  render() {
    const { markdownRemark, allMarkdownRemark } = this.props.data
    const { edges } = allMarkdownRemark
    const { quotes, quotes_title } = markdownRemark.frontmatter

    const allTags = [
      `All`,
      `UX`,
      `Open Data`,
      `Security and Compliance`,
      `Support`,
      `Drupal`,
      `DevOps`,
      `Education Services`,
      `Quality Assurance`,
      `Innovation Lab`,
    ]

    return (
      <GeneralLayout
        heroTitle="Case Studies"
        heroSubtitle="We help organizations provide better outcomes for people. Our years of experience with government and nonprofit clients have taught us how to manage the complexities of big projects and create partnerships that result in lasting success."
        urlObject={this.props.location}
      >

        <FilteredCaseStudies posts={edges} allTags={allTags} />

        <section className="section section__triple-quotes neutral-hex-bg">
          <div className="usa-grid">
            <div className="absolute">
              <SectionTitle title={quotes_title} />
              <div className="blockquotes__list">
                <GlobalQuoteSlider quotes={quotes} />
              </div>
            </div>
          </div>
        </section>
        <FeaturedClients />
      </GeneralLayout>
    )
  }
}

export default CaseStudies

export const allCaseStudies = graphql`
  query allCaseStudyNodes {
    markdownRemark(frontmatter: { title: { eq: "Case Studies" } }) {
      frontmatter {
        quotes_title
        quotes {
          author
          image {
            childImageSharp {
              fixed(width: 134, height: 134) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          text
        }
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { type: { in: ["case-study", "case-study-2"] } } }
      sort: { fields: [frontmatter___weight], order: ASC }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            client_name
            title
            path
            tags
            weight
            preview_image {
              childImageSharp {
                fixed(width: 600, height: 600) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`



// const CaseStudies = (props) => {
//   const data = useStaticQuery(query);
//   console.log(data);
//   return (
//     <GeneralLayout
//       heroTitle="Case Studies"
//       heroSubtitle="We help organizations provide better outcomes for people. Our years of experience with government and nonprofit clients have taught us how to manage the complexities of big projects and create partnerships that result in lasting success."
//       urlObject={props.location}
//     >
//       <pre>{JSON.stringify(data, null, 4)}</pre>
//       {/* {data.allStrapiCaseStudy.nodes.map((node,i)=>{
//         return <div key={i}>
//           <div>id: {node.id}</div>
//           <div>style: {node.style}</div>
//           <div>client: {node.New_Style_Structure.client}</div>
//           <div>title: {node.New_Style_Structure.title}</div>
//           <div>quote: quote: {node.New_Style_Structure.Quote.quote} - client: {node.New_Style_Structure.Quote.client}</div>
//           {node.New_Style_Structure.Figure.map((figure,i)=>{
//             return <div key={i}>
//               <div>index: {i}</div>
//               <div>figure: {figure.figure}</div>
//               <div>description: {figure.description}</div>
//             </div>
//           })}
//           <div>challenge: text: {node.New_Style_Structure.Challenge.text} client_goal: {node.New_Style_Structure.Challenge.client_goal}</div>
//           {node.New_Style_Structure.Expertise.map((expertise,i)=>{
//             return <div key={i}>
//               <div>index: {i}</div>
//               <div>text: {expertise.text}</div>
//             </div>
//           })}
//           {node.New_Style_Structure.Technology.map((technology,i)=>{
//             return <div key={i}>
//               <div>index: {i}</div>
//               <div>text: {technology.text}</div>
//             </div>
//           })}
//           <div>approach-image: {node.New_Style_Structure.Approach.image?.absolutePath}</div>
//           <div>approach-image-caption: {node.New_Style_Structure.Approach.image_caption}</div>
//           <div>approach-body: {node.New_Style_Structure.Approach.body}</div>
//           {node.New_Style_Structure.Approach_Section.map((section,i)=>{
//             return <div key={i}>
//               <div>index: {i}</div>
//               <div>approach-section-body: {section.body}</div>
//               <div>approach-section-title: {section.title}</div>
//               <div>approach-section-image: {section.image?.absolutePath}</div>
//               <div>approach-section-image-caption: {section.image_caption}</div>
//             </div>
//           })}
//           {node.New_Style_Structure.Key_Outcome.map((outcome,i)=>{
//             return <div key={i}>
//               <div>index: {i}</div>
//               <div>key-outcome-title: {outcome.title}</div>
//               <div>key-outcome-description: {outcome.description}</div>
//               <div>key-outcome-icon: {outcome.icon?.url}</div>
//             </div>
//           })}
//           <div>explore: {node.New_Style_Structure.Explore}</div>
//         </div>
//       })}  */}
//     </GeneralLayout>
//   );
// };

// export default CaseStudies

// export const query = graphql`
//   {
//     allStrapiCaseStudy {
//       nodes {
//         id
//         Path
//         Style
//         Title
//         Client_Name
//         New_Style {
//           Title
//           Path
//           Outcome_Text
//           Explore
//           Client_Name
//           Client_Goal_Text
//           Challenge_Text
//           Approach_Text
//           Approach_Image {
//             url
//           }
//           Approach_Section {
//             Text
//             Title
//             Image {
//               publicURL
//             }
//           }
//           Client_Goal_Bullet {
//             Text
//           }
//           Expertise {
//             Text
//           }
//           Impact_Stat {
//             Header
//             Text
//           }
//           Outcome {
//             Caption
//             Title
//             Icon {
//               url
//             }
//           }
//           Preview_Image {
//             url
//           }
//           Quote {
//             Quote
//             Source
//           }
//           Realated_Titles {
//             Text
//           }
//           Technology {
//             Text
//           }
//         }
//         Old_Style {
//           Approach
//           Project
//           Website
//           Background {
//             Section_One
//             Section_Two
//             Title
//           }
//           Images {
//             alternativeText
//             caption
//             url
//           }
//           Preview_Image {
//             publicURL
//           }
//           Related_Titles {
//             Text
//           }
//           Specs {
//             Text
//           }
//         }
//       }
//     }
//   }
// `




