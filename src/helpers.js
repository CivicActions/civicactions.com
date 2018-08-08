export const existy = (obj) => {
  return obj != null;
};

export const filterStudies = (tagList, posts) => {
  posts.filter((item) => {
    const{tags} = item.node.frontmatter;
    return tags.some(v => tagList.includes(v));
  });
};