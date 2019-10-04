import React, { useState } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const LyricCreate = props => {
  const [txt, setTxt] = useState("");

  const handleChange = e => {
    const { value } = e.target;
    setTxt(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props
      .mutate({
        variables: {
          songId: props.id,
          content: txt
        }
      })
      .then(() => {
        setTxt("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Add a Lyric</label>
      <input type="text" value={txt} onChange={handleChange} />
    </form>
  );
};

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
