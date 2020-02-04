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
      return data.article;
    });
};

export const patchArticleById = (article_id, voteChange) => {
  return axios
    .patch(`https://bond-news.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: voteChange
    })
    .then(({ data }) => {
      return data.article;
    });
};

export const patchCommentById = (comment_id, voteChange) => {
  return axios
    .patch(`https://bond-news.herokuapp.com/api/comments/${comment_id}`, {
      inc_votes: voteChange
    })
    .then(({ data }) => {
      return data.article;
    });
};

export const postCommentByArticleId = (article_id, username, body) => {
  return axios
    .post(
      `https://bond-news.herokuapp.com/api/articles/${article_id}/comments`,
      { username, body }
    )
    .then(({ data }) => {
      console.log(data.comment);
      return data.comment;
    });
};

export const deleteCommentByCommentId = comment_id => {
  return axios.delete(
    `https://bond-news.herokuapp.com/api/comments/${comment_id}`
  );
};

export const getCommentsByArticleId = article_id => {
  return axios
    .get(
      `https://bond-news.herokuapp.com/api/articles/${article_id}/comments?limit=30`
    )
    .then(({ data }) => {
      return data.comments;
    });
};
