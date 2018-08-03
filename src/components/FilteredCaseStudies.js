import React, { Component } from "react";

class FilteredCaseStudies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: ''
    }
  }

  render() {
    const{ posts, relatedTags } = this.props;

    const filteredStudies = posts.filter((item) => {
      const{ tags } = item.node.frontmatter;
      return tags.some(v => relatedTags.includes(v));
    });

    const renderStudies = filteredStudies.map((study, index) => {
      const{ title } = study.node.frontmatter;
      return <h2>{ title }</h2>
    });

    return console.log(renderStudies);
  }


}

export default FilteredCaseStudies