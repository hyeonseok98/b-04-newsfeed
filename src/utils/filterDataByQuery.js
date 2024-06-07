export const filterDataByQuery = (data, searchQuery) => {
  if (!data || !searchQuery || data.length === 0) {
    return data;
  }

  const lowerCaseQuery = searchQuery.toLowerCase();

  return data.filter((item) => {
    const title = item.title ? item.title.toLowerCase() : "";
    const description = item.description ? item.description.toLowerCase() : "";
    const genre = item.genre ? item.genre.toLowerCase() : "";
    return title.includes(lowerCaseQuery) || description.includes(lowerCaseQuery) || genre.includes(lowerCaseQuery);
  });
};
