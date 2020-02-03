import axios from "axios";

export const getArticles = page => {
  return axios
    .get("https://bond-news.herokuapp.com/api/articles", { p: page })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = article_id => {
  return axios
    .get(`https://bond-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      console.log(data.article);
      return data.article;
    });
};

export const patchArticleById = (article_id, vote) => {
  return axios
    .patch(`https://bond-news.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: vote
    })
    .then(response => {
      console.log(response);
    });
};
