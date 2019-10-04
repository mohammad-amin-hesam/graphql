import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const LyricList = props => {
  const { lyrics, mutate } = props;

  const onLike = (id, likes) =>
    mutate({
      variables: { id },
      potimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1
        }
      }
    });

  const renderLyrics = () => {
    return lyrics.map(({ id, content, likes }) => {
      return (
        <li style={{ padding: 15 }} className="collection-item" key={id}>
          {content}
          <i
            className="material-icons"
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => onLike(id, likes)}
          >
            thumb_up
          </i>
          <span
            style={{
              border: "1px solid #999999",
              borderRadius: "50%",
              height: 25,
              width: 25,
              display: "inline-block",
              textAlign: "center",
              float: "right",
              marginRight: 15
            }}
          >
            {likes}
          </span>
        </li>
      );
    });
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
