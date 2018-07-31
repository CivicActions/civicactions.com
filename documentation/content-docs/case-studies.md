## Case Studies
To create a case study, go to the `src/content/case-studies` directory, copy an existing case-study .md file and give it a case study name.
If the file name has multiple words, they should be separated with hyphens eg: `globalnet-platform.md`.

#### FrontMatter
Frontmatter can also be referred to as metadata. They help determine the content for a page. Case studies have the following frontmatter:
  * title
  * type
  * path
  * client_name
  * project
  * website
  * tags
  * specs
  
**Title**: This is the main large title that goes in the banner region.
**Type**: This is a required field and it determines how the page will be displayed. It should be set to `case-study` for case study pages.
**Path**: This is a required field and sets the path in which the case study page will be displayed. It should always be `/case-study/case-study-name`.
**client_name**: This is the client name displayed in the banner region above the Case study title.
**project**: This is the project name and it is displayed under the banner region, with the tech specs.
**website**: This is the URL to the project website.
**tags**: These are the tags associated with the case study.
**specs**: These are the specs that go in the tech-specs region.

The Page content goes below the Front matter. It should go below the triple-hyphen divider that seperates the frontmatter from the rest of the content.
You can put text, Markdown shrotcuts and regular HTML in the page content section.


