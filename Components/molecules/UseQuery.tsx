import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { PostMethosPosts, getPosts } from "../../Api";

// for more info on react query follow below doc

// https://medium.com/@naveenmarasinghe/introduction-to-react-query-db451dadb036

export const AllPosts = () => {
  const client = useQueryClient();
  const { isLoading, data, error } = useQuery("posts", () => getPosts);

  // Instead of handling loading and error in component try to fetch from zustand store
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error fetching doc</div>;

  return (
    <>
      {data && (
        <div>
          <h1>Data : </h1>
        </div>
      )}
    </>
  );
};
