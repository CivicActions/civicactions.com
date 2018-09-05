import React, { Component } from "react";

import CaseStudyTeaser from './../components/CaseStudyTeaser';

const defaultProps = {
  tags: []
};

class FilteredCaseStudies extends Component {
  static defaultProps = defaultProps;
  constructor(props) {
    super(props);
    this.state = {
      tag: ['All']
    };
  }

  handleClick(e) {
      let text = e.target.value;
      let tags = defaultProps.tags;
      let index = tags.indexOf(text);

      if(index === -1) {
        tags.push(text);
        e.target.classList.add('active');
        document.querySelector('[ value = "All" ]').classList.remove('active');
      } else {
        tags.splice(index, 1);
        e.target.classList.remove('active');
      }

      if(tags.length === 0) {
          tags = ['All'];
          document.querySelector('[ value = "All" ]').classList.add('active');
      }

      this.setState({tag: tags});
  }

  render() {
    const{ posts, allTags } = this.props;

    // The filtered tags are initially set to "All" to display all case studies on page load
    // If a tag is clicked the case studies get filtered
    const filteredStudies = this.state.tag[0] === 'All' ? posts :
      posts.filter((item) => {
      const{ tags } = item.node.frontmatter;
      return tags.some(v => this.state.tag.includes(v));
    });

    let studyTeasers = filteredStudies.map((item, index) => {
      const { title, client_name, preview_image, path } = item.node.frontmatter;
      let image = preview_image !== null ? preview_image.childImageSharp.fixed : null;

      return (
        <CaseStudyTeaser
          title = { title }
          image = { image }
          client_name = { client_name }
          link = { path }
          key = { index }
        />
      )
    });

    const renderStudies = filteredStudies.length === 0 ?
      `There are no case studies tagged ${ this.state.tag }` : studyTeasers;

    const filterTags = allTags.map((tag, index) => {
      return (
        <button className = "tags" onClick={ this.handleClick.bind(this)} value = { tag }>
          { tag }
        </button>
      )
    });

    return (
      <div>
        <section className = "section usa-grid section__tag-filters">
          <h4>Filter by: </h4>
          { filterTags }
        </section>

        <section className = "section usa-grid section__case-studies">
          { renderStudies }
        </section>
      </div>

  )
  }


}

export default FilteredCaseStudies