export const existy = obj => obj != null

export const filterPostsByTitle = (posts, titles) => {
  const items = titles.map(t => posts.filter(p => p.title === t)[0])
  return items.filter(item => existy(item))
}

export const filterStudies = (tagList, posts) => {
  posts.filter(item => {
    const { tags } = item.node.frontmatter
    return tags.some(v => tagList.includes(v))
  })
}

export const getFirstName = (firstName, fullName) => {
  if (existy(firstName)) {
    return firstName
  } else if (existy(fullName)) {
    return fullName.split(` `)[0]
  } else {
    return null
  }
}
