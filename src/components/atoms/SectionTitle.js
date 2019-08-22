import React from "react"

const SectionTitle = props => {
  const { title, subtitle, children } = props
  const sectionSubtitle = subtitle ? (
    <p className="section__subtitle">{subtitle}</p>
  ) : (
    ``
  )
  return (
    <div className="section__title--wrapper">
      <h2 className="section__title">{title}</h2>
      {sectionSubtitle}
      {children}
    </div>
  )
}

export default SectionTitle
