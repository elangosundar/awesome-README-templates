export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5);
  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
}

export const getCategoryList = (data) => {
  const categoriesTags = [];
  data.forEach(category => {
      category.node.frontmatter.categories.forEach((cat) => {
          categoriesTags.push(cat);
      })
  })

  const uniqueCategory = [];
  categoriesTags.map(category => {
      uniqueCategory[category] = uniqueCategory[category] ? uniqueCategory[category] + 1 : 1;
  });

  return uniqueCategory;
}
