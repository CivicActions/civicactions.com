import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import RolloverIcon from "../atoms/RolloverIcon";
import { StaticQuery, graphql } from "gatsby";


const FeaturedClients = () => (

    <StaticQuery
        query = { graphql`
          query ImagesQuery {
            # the source “client-logos” is set in the gatsby-config
            clientLogo: allFile(filter: {sourceInstanceName: {eq: "client-logos"}}) {
                edges {
                    node {
                        childImageSharp {
                            # Specify the image configurations
                            resolutions(width: 67, height: 67) {
                                ...GatsbyImageSharpResolutions_withWebp
                            }
                        }
                    }
                }
            }
          }
        `}

        render ={ data => (
            <>
                <section
                    className = "section section__featured_clients usa-grid">

                    <div
                        className = "section__featured_clients--intro_wrapper">
                        <SectionTitle title = "Featured Clients"/>
                        <div className = "section__featured_clients--intro-text">
                            <p>Donec ullamcorper nulla non metus auctor fringilla.</p>
                        </div>

                    </div>
                    <div
                        className = "rollovericon__group">
                        <RolloverIcon
                            icon = { data.clientLogo.resolutions }
                            icon_rollover_text = ""
                            icon_class = "icon__featured_clients"
                        />
                    </div>
                </section>
            </>
        )}
    />
);

export default FeaturedClients;
