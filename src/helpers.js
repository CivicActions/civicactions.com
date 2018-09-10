export const existy = (obj) => {
  return obj != null;
};

export const filterPostsByTitle = (posts, titles) => {
  const items = titles.map((t) => {
    return posts.filter((p) => {
      return (p.title === t);
    })[0];
  });
  return items.filter((item) => {return existy(item)});
};

export const filterStudies = (tagList, posts) => {
  posts.filter((item) => {
    const{tags} = item.node.frontmatter;
    return tags.some(v => tagList.includes(v));
  });
};
