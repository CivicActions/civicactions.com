import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import RolloverIcon from "../atoms/RolloverIcon";

const FeaturedClients = () => (
    <section
        className = "section section_featured_clients usa-grid">

        <SectionTitle title = "Featured Clients"/>
        <div className = "section__featured_clients--intro-text">
            <p>Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>

        <div
            className = "rollovericons_group">
            <RolloverIcon
                icon = ""
                icon_rollover_text = ""
                icon_class = ""
            />
        </div>
    </section>
);

export default FeaturedClients;