import React, { Component } from "react"
import config from "../../../data/SiteConfig";

class SocialLinks extends Component {
    static getLinkElements() {
        const socialLinks = config.socialLinks;

        return socialLinks.map((link) => (
            <a key = { link.label }
               href = { link.url }
               target = "_blank"
               rel = "external noopener noreferrer"
               className = { link.iconClassName }>
            </a>
        ));
    }
    render() {
        const socialLinks = config.socialLinks;
        if( !socialLinks ) {
            return null;
        }
        return (
            <div className = "social-links">
                { SocialLinks.getLinkElements() }
            </div>
        );
    }
}

export default SocialLinks;