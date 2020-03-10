import React, { useEffect } from "react";

export const Post = ({ history, location, match }) => {
  useEffect(() => {
    console.log(location);
    //fetch( `api.example.com/posts/${match.params.id}`)
  }, [match.params.id]);

  return (
    <div>
      <h1>Post</h1>
      rendering post {match.params.id}
    </div>
  );
};
