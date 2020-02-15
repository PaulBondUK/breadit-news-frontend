import React from "react";

export default function SortArticles(props) {
  const { selectedOption, sortArticlesBy } = props;
  return (
    <label className="sorting-articles-container">
      <p className="sorting-articles-text">Sort By</p>
      <select
        className="sorting-articles-dropdown"
        value={selectedOption}
        onChange={event => sortArticlesBy(event)}
      >
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="Most Votes">Most Votes</option>
        <option value="Fewest Votes">Fewest Votes</option>
        <option value="Most Comments">Most Comments</option>
        <option value="Fewest Comments">Fewest Comments</option>
      </select>
    </label>
  );
}
