import React from "react"
import { graphql,useStaticQuery } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import TeaserGrid from "./../components/TeaserGrid"
import GlobalQuotesSlider from "./../components/organisms/GlobalQuoteSlider"
import ImageBand from "./../components/organisms/ImageBand"
import SectionTitle from "./../components/atoms/SectionTitle"

const Team = (props) => {
  const data = useStaticQuery(query);
  console.log(data);
  return (
    <GeneralLayout
      heroTitle="Our Team"
      heroSubtitle="We are a fun loving, open-hearted group of civic technology professionals committed to making life better for our clients and each other."
      urlObject={props.location}
    >
      {data.allStrapiStaffProfile.nodes.map((node,i)=>{
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
      })} 
    </GeneralLayout>
  );
};

export default Team

export const query = graphql`
  {
    allStrapiStaffProfile {
      nodes {
        Quote {
          client
          quote
        }
        role
        pronunciation
        personal_pronouns
        name
        location
        image {
          absolutePath
        }
        body
        audio {
          absolutePath
        }
        Specialties {
          text
        }
        Social {
          title
          link
        }
        id
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
//     markdownRemark(frontmatter: { title: { eq: "Our Team" } }) {
//       frontmatter {
//         image_band {
//           childImageSharp {
//             resize(quality: 50) {
//               src
//             }
//           }
//         }
//         subtitle
//         title
//         quotes_title
//         quotes {
//           author
//           image {
//             childImageSharp {
//               fixed(width: 264, height: 264) {
//                 ...GatsbyImageSharpFixed_withWebp_noBase64
//               }
//             }
//           }
//           text
//         }
//       }
//     }
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

