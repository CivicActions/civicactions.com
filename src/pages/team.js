import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import TeaserGrid from "./../components/TeaserGrid"
import GlobalQuotesSlider from "./../components/organisms/GlobalQuoteSlider"
import ImageBand from "./../components/organisms/ImageBand"
import SectionTitle from "./../components/atoms/SectionTitle"

const Team = props => {
  const data = useStaticQuery(query)
  const teamTeasers = data.allStrapiStaffProfile.nodes.map((node, i) => {
    return (
      <TeaserGrid
        image={node.Image}
        name={node.Name}
        link={node.Path}
        published={node.Path}
        title={node.Role}
      />
    )
  })
  return (
    <GeneralLayout
      heroTitle="Our Team"
      heroSubtitle="We are a fun loving, open-hearted group of civic technology professionals committed to making life better for our clients and each other."
      urlObject={props.location}
    >
      <section className="section usa-grid section__teaser-grid">
        {teamTeasers}
      </section>
      <section className="section section__triple-quotes neutral-hex-bg team">
        <div className="usa-grid">
          <SectionTitle title="Our Perspectives" />
          <div className="blockquotes__list">
            <GlobalQuotesSlider quotes={[]} />
          </div>
        </div>
      </section>
      {/* {data.allStrapiStaffProfile.nodes.map((node,i)=>{
          return <div key={i}>
            <TeaserGrid
                  image={node.Image}
                  name="BLAH"
                  link="/blah"
                  published='/blah'
                  title="Engineering"
                />
           </div>
        return <div key={i}>
            <Img sizes={node.Image.childImageSharp.fixed} />
            <div><b>id: </b>id: {node.id}</div> 
            <div><b>Name: </b>{node.Name}</div> 
            <div><b>Pronunciation: </b>{node.Pronunciation}</div> 
            <div><b>Personal_Pronouns: </b>{node.Personal_Pronouns}</div> 
            <div><b>Role: </b>{node.Role}</div> 
            <div><b>Path: </b>{node.Path}</div> 
            <div><b>Location: </b>{node.Location}</div> 
            <div><b>Quote: </b>{node.Quote}</div> 
            <div><b>Social Links</b></div>
            {node.Social.map((social,i)=>{
              return <div key={i} style={{display: "inline-block"}}>
                 <div><b>index: </b>{i}</div> 
                 <div><b>Title: </b>{social.Title}</div> 
                 <div><b>Url: </b>{social.Url}</div> 
              </div>
            })}
            <div><b>Specialties</b></div>
            {node.Specialty.map((specialty,i)=>{
              return <div key={i} style={{display: "inline-block"}}>
                 <div><b>index: </b>{i}</div> 
                 <div><b>Specialty: </b>{specialty.Specialty}</div> 
              </div>
            })}
            <div><b>Body: </b>{node.Body}</div> 
            <div><b>Image: </b>{node.Image.publicURL}</div> 
            <div><b>Audio: </b>{node.Audio?.publicURL}</div> 
            <div><br></br></div>
            <div><br></br></div>
        </div>
      })}  */}
    </GeneralLayout>
  )
}

export default Team

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
            fixed(height: 150, width: 150) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
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

// OLD CODE TO BE USED AS REFERENCE WHILE BUILDING CURRENT

// class Team extends React.Component {
//   render() {
//     const { markdownRemark, allMarkdownRemark } = this.props.data
//     const team = allMarkdownRemark.edges

//     const {
//       image_band,
//       quotes,
//       quotes_title,
//       title,
//       subtitle,
//     } = markdownRemark.frontmatter

//     const teamTeasers = team.map((item, index) => {
//       const { image, name, path, published, role } = item.node.frontmatter
//       return (
//         <TeaserGrid
//           image={image}
//           name={name}
//           link={path}
//           published={published}
//           title={role}
//         />
//       )
//     })

//     return (
//       <GeneralLayout
//         heroTitle={title}
//         heroSubtitle={subtitle}
//         urlObject={this.props.location}
//       >
//         <section className="section usa-grid section__teaser-grid">
//           {teamTeasers}
//         </section>

//         <section className="section section__triple-quotes neutral-hex-bg team">
//           <div className="usa-grid">
//             <SectionTitle title={quotes_title} />
//             <div className="blockquotes__list">
//               <GlobalQuotesSlider quotes={quotes} />
//             </div>
//           </div>
//         </section>

//         <section className="feed__image--wrapper">
//           <ImageBand imageArray={image_band} />
//         </section>
//       </GeneralLayout>
//     )
//   }
// }

// export default Team

// export const t = graphql`
//   {
// markdownRemark(frontmatter: { title: { eq: "Our Team" } }) {
//   frontmatter {
//     image_band {
//       childImageSharp {
//         resize(quality: 50) {
//           src
//         }
//       }
//     }
//     subtitle
//     title
//     quotes_title
//     quotes {
//       author
//       image {
//         childImageSharp {
//           fixed(width: 264, height: 264) {
//             ...GatsbyImageSharpFixed_withWebp_noBase64
//           }
//         }
//       }
//       text
//     }
//   }
// }
//     allMarkdownRemark(
//       filter: { frontmatter: { type: { eq: "team" } } }
//       sort: { fields: [frontmatter___manager, frontmatter___name], order: ASC }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             name
//             image {
//               childImageSharp {
//                 fixed(width: 250, height: 250) {
//                   ...GatsbyImageSharpFixed_withWebp_noBase64
//                 }
//               }
//             }
//             path
//             published
//             manager
//             role
//             title
//           }
//         }
//       }
//     }
//   }
// `
