import React from "react";
import { useQuery } from "react-query";
import { getComments } from "../../Api";

export const PostComments: React.FC<any> = ({ postId }) => {
  // With the below code, comments won't be fetched for different posts, Since query key "comments" remains same.

  //   const { data } = useQuery("comments", () => getComments(postId));

  // Now the comments will be cached with postId along with query key comments, So that no new api call
  //   for the same postId of the comments
  const { data, error } = useQuery(["comments", postId], () =>
    getComments(postId)
  );

  if (error) return null;

  return (
    <>
      {data && (
        <div>
          <h1>Comments:</h1>
          {Array.isArray(data) &&
            data.length > 0 &&
            data.map((ele: any) => (
              <p>
                Name: {ele?.name} , Email: {ele?.email}
              </p>
            ))}
        </div>
      )}
    </>
  );
};
