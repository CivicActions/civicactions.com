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
                icon_text = "We support your health and well-being by providing 100% company paid medical, disability, and life insurance, plus a generous 401k program."
                icon_class = "icon__benefits"
            />
            <IconParagraph
                icon = ""
                icon_heading = "Time Off"
                icon_text = "CivicActions' open vacation policy allows team members to take paid time off as needed to feel balanced, productive, and healthy."
                icon_class = "icon__timeoff"
            />
            <IconParagraph
                icon = ""
                icon_heading = "Family"
                icon_text = "We love families! All new parents enjoy paid leave, and we support each other in the ever-shifting responsibilities of work-at-home families."
                icon_class = "icon__family"
            />
            <IconParagraph
                icon = ""
                icon_heading = "Connection"
                icon_text = "As a primarily remote team, we develop relationships at our annual company retreat, in addition to virtual all-hands calls where people can relax and connect."
                icon_class = "icon__connection"
            />
            <IconParagraph
                icon = ""
                icon_heading = "Growth"
                icon_text = "We provide an annual stipend to cover professional development opportunities and encourage intra-team learning and co-working."
                icon_class = "icon__growth"
            />
            <IconParagraph
                icon = ""
                icon_heading = "Commmunity"
                icon_text = "We are 'open by default' - so your contributions here will be under public license for the benefit of all. We also encourage you to spend 5% of your working time giving bak to a community you care about."
                icon_class = "icon__community"
            />
        </div>

    </section>

);

export default Benefits;