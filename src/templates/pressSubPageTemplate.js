// Template for displaying press sub-page content.

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Markdown from "react-markdown";
import GeneralLayout from "./../components/layouts/GeneralLayout"

export default function Template({ _, location }) {
  const data = useStaticQuery(query);
  let pressRelease = {};
  data.allStrapiPressRelease.nodes.map((node,i)=>{
    if(node.Path == "/press/"+window.location.href.split('/')[4]){
      pressRelease = node;
    }
  });
  return (
    <GeneralLayout
      heroTitle={pressRelease.Title}
      heroClass="press-sub-page__hero"
      pageTitle={`CivicActions | ${pressRelease.Title}`}
      path=""
      urlObject={location}
    >
      <div className="text-container section">
        <Markdown source={pressRelease.Body} escapeHtml={false}/>
      </div>
    </GeneralLayout>
  )
}


export const query = graphql`
  {
    allStrapiPressRelease {
      nodes {
        Title
        Path
        Body
      }
    }
  }
`





// export default function Template({ data, location }) {
//   const { markdownRemark } = data
//   const { frontmatter, html } = markdownRemark
//   const { title } = frontmatter

//   return (
//     <GeneralLayout
//       heroTitle={title}
//       heroClass="press-sub-page__hero"
//       pageTitle={`CivicActions | ${title}`}
//       path={frontmatter.path}
//       urlObject={location}
//     >
//       <div className="text-container section">
//         <div dangerouslySetInnerHTML={{ __html: html }} />
//       </div>
//     </GeneralLayout>
//   )
// }

// // Query for team member markdown content. This rarely needs to be changed
// export const pressSubPageQuery = graphql`
//   query PressByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//         title
//       }
//     }
//   }
// `