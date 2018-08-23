import React from 'react';
import { graphql } from 'gatsby';

import GeneralLayout from './../components/layouts/GeneralLayout';

const PrivacyPolicy = ({ data }) => {

    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    const { subtitle, title } = frontmatter;

    return (
        <GeneralLayout
            heroTitle = { title }
            heroSubtitle = { subtitle }
        >

        <section className = "section">
            <div className = "usa-grid">
                <div className = "text-container" dangerouslySetInnerHTML= {{ __html: html }} />
            </div>
        </section>

        </GeneralLayout>
    )

};

export default PrivacyPolicy;

export const privacyPolicyQuery = graphql`
    query privacyPolicy {
        markdownRemark(frontmatter: { title: { eq: "Privacy Policy" } } ) {
            html
            frontmatter {
                title
                subtitle
            }
        }
    }
`;