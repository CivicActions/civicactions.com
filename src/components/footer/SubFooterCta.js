import React from "react"
import Link from "gatsby-link"

import right_arrow from "./../../files/icons/right-arrow-white.svg"

const SubFooterCta = ({ title, link_text, link_url }) => (
  <div className="subfooter-cta">
    <div className="subfooter-cta__title">{title}</div>
    <Link
      className="subfooter-cta__link"
      to={link_url}
      style={{ backgroundImage: `url(` + right_arrow + `)` }}
    >
      {link_text}
    </Link>
  </div>
)

export default SubFooterCta
