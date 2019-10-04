import React, { Fragment } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";
import gql from "graphql-tag";

const SongList = props => {
  const onSongDelete = id => {
    props.mutate({ variables: { id } }).then(() => {
      props.data.refetch();
    });
  };

  const renderSongs = () => {
    if (props.data.loading) return <div>Loading...</div>;
    return props.data.songs.map(({ id, title }) => {
      return (
        <li className="collection-item" key={id}>
          <Link to={`/songs/${id}`}>{title}</Link>
          <i
            style={{ float: "right", cursor: "pointer" }}
            className="material-icons"
            onClick={() => onSongDelete(id)}
          >
            delete
          </i>
        </li>
      );
    });
  };

  return (
    <Fragment>
      <ul className="collection">{renderSongs()}</ul>
      <Link
        to="/songs/new"
        className="btn-floating btn-large red right"
        style={{ position: "fixed", bottom: 30, right: 30 }}
      >
        <i className="material-icons">add</i>
      </Link>
    </Fragment>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
