const yaml = require('js-yaml')
const remark = require('remark')
const remarkHTML = require('remark-html')

const MarkdownYamlType = new yaml.Type('!md', {
      kind: 'scalar',
      construct: data => remark().use(remarkHTML).processSync(data).toString(),
})

const MARKDOWN_SCHEMA = yaml.Schema.create(MarkdownYamlType)

module.exports = doc => yaml.safeLoad(doc, { schema: MARKDOWN_SCHEMA })
