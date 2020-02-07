import React from "react";

export default function SortArticles(props) {
  const { selectedOption, sortArticlesBy } = props;
  return (
    <label>
      Sorting Articles By
      <select value={selectedOption} onChange={event => sortArticlesBy(event)}>
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
