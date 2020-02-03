import React, { Component } from "react";
import * as api from "../../Api";
import SingleArticleCard from "./SingleArticleCard";

export default class SingleArticlePage extends Component {
  state = { articleData: [] };

  render() {
    const { articleData } = this.state;
    return (
      <div>
        <SingleArticleCard article={articleData} />
      </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(articleData => {
      this.setState({ articleData });
    });
  }
}
