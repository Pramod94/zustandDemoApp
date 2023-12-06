import React from "react";
import { useQuery } from "react-query";
import { GitHubApi } from "../../../../Api";

export const GitHubDescription = () => {
  const { isLoading, data, error } = useQuery("githubRepos", () => GitHubApi);

  // Instead of handling loading and error in component try to fetch from zustand store
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error fetching doc</div>;

  return (
    <>
      {data && (
        <div>
          <h1>{data?.name}</h1>
        </div>
      )}
    </>
  );
};
