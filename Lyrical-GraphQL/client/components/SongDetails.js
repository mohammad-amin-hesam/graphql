import React from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const SongDetails = props => {
  const { song, loading } = props.data;

  if (loading) return <div>Loading...</div>;

  if (!song) return <div>404 Not Found!!!</div>;

  return (
    <div>
      <Link to="/" style={{ marginTop: "30px", display: "inline-block" }}>
        Back
      </Link>
      <h3>{song.title}</h3>
      <LyricCreate id={props.params.id} />
      <LyricList lyrics={song.lyrics} />
    </div>
  );
};

export default graphql(fetchSong, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetails);
