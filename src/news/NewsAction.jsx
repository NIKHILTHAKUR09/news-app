let datestring
export const fetchNews = async (topic) => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2024-08-06&sortBy=publishedAt&apiKey=743ae7e83a4749beb09af3d455dd4e25`
  );
  const data = await response.json();
  return data.articles;
};
