const ENDPOINT = "https://hacker-news.firebaseio.com/v0";

export const getTopStories = async (page: number, limit: number) => {
  const response = await fetch(`${ENDPOINT}/topstories.json`);
  const json = await response.json();
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const ids = json.slice(startIndex, endIndex);

  return ids;
};

export const getItemInfo = async (id: number) => {
  const response = await fetch(`${ENDPOINT}/item/${id}.json`);
  return await response.json();
};
