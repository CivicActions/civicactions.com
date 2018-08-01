import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import IconParagraph from "../atoms/IconParagraph";

const Benefits = () => (
    <section
        className = "section section_benefits usa-grid">

        <SectionTitle title = "Benefits"/>
        <div
            className = "iconparagraphs__group">
            <IconParagraph
                icon = ""
                icon_heading = "Benefits"
                icon_text = ""
                icon_class = "icon__benefits"
            />
            <IconParagraph
                icon = ""
                icon_heading = "Time Off"
                icon_text = ""
                icon_class = "icon__timeoff"
            />
            <IconParagraph
                icon = ""
                icon_heading = "Family"
                icon_text = ""
                icon_class = "icon__family"
            />
            <IconParagraph
                icon = ""
                icon_heading = "Connection"
                icon_text = ""
                icon_class = "icon__connection"
            />
            <IconParagraph
                icon = ""
                icon_heading = "Growth"
                icon_text = ""
                icon_class = "icon__growth"
            />
            <IconParagraph
                icon = ""
                icon_heading = "Commmunity"
                icon_text = ""
                icon_class = ""
            />
        </div>

    </section>

);

export default Benefits;