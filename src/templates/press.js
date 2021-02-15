import React from "react"
import { graphql, useStaticQuery} from "gatsby"
import Link from "gatsby-link"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import PressTeaser from "./../components/PressTeaser"

// TODO: Implement previous and next links to paginate the press pages

const Press = (props) => {
  const data = useStaticQuery(query);
  // const NavLink = props => {
  //   if (!props.test) {
  //     return <Link to={props.url}>{props.text}</Link>
  //   } else {
  //     return <span>{props.text}</span>
  //   }
  // }
  return (
    <GeneralLayout
      heroTitle="Press"
      heroSubtitle=""
      urlObject={props.location}
    >
      <section className="section">
        <div className="usa-grid text-container">
        <ul className="press__list">
        {data.allStrapiPress.nodes.map((node,i)=>{
          return <div key={i}> 
              <PressTeaser 
              publication={node.Publication}
              date={node.Date}
              title={node.Title}
              body={node.Body}
              link_text={node.Link_Text}
              link={node.Link}
              /> 
          </div>
        })} 
        </ul>
        {/* <div className="prev-next-links">
          <div className="previous">
            <NavLink test={first} url={previousUrl} text="Previous" />
          </div>
          <div className="next">
            <NavLink test={last} url={nextUrl} text="Next" />
          </div>
        </div> */}
        </div>
      </section>
    </GeneralLayout>
  );
};

export default Press

export const query = graphql`
  {
    allStrapiPress {
      nodes {
        Body
        Date
        Link
        Link_Text
        Path
        Publication
        Title
      }
    }
  }
`

