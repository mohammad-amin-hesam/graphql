import React, { useState } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetchSongs";

const SongCreate = props => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props
      .mutate({ variables: { title }, refetchQueries: [{ query }] })
      .then(hashHistory.push("/"));
  };

  return (
    <div>
      <Link to="/" style={{ marginTop: "30px", display: "inline-block" }}>
        Back
      </Link>
      <h3>Create a New Song</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Song Title:</label>
        <input
          type="text"
          onChange={event => setTitle(event.target.value)}
          value={title}
        />
      </form>
    </div>
  );
};

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
