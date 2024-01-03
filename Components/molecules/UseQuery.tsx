import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPosts } from "../../Api";
import { PostComments } from "./PostComments";
import { Box, Button, HStack, Text } from "native-base";

// for more info on react query follow below doc

// https://medium.com/@naveenmarasinghe/introduction-to-react-query-db451dadb036

export const AllPosts = () => {
  const client = useQueryClient();

  const [postId, setPostId] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const nextPage = page + 1;
    if (nextPage <= 10) {
      // This will prefecth the data, in this case next page data is prefetched
      // Hence giving the smooth experience to the user
      client.prefetchQuery(["posts", nextPage], () => getPosts(nextPage));
    }
  }, [page, client]);

  const { isLoading, data, isError } = useQuery(
    ["posts", page],
    () => getPosts(page),
    {
      staleTime: 2000,
      // This will help to keep the previous data when prefetched
      keepPreviousData: true,
    }
  );
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error fetching doc</div>;

  return (
    <>
      {data && (
        <div>
          <h1>Data : </h1>
          <ul>
            {Array.isArray(data) &&
              data?.map((ele: any) => (
                <li
                  onClick={() => setPostId(ele.id)}
                  style={{ cursor: "pointer" }}
                >
                  Id : {ele.id} Title : {ele.title}
                </li>
              ))}
          </ul>
        </div>
      )}

      <HStack justifyContent={"space-between"}>
        <Button
          onPress={() => setPage((prev) => prev - 1)}
          // disabled={page === 1 ? true : false}
          isDisabled={page === 1}
        >
          Previous Page
        </Button>
        <Box m={2} p={2} backgroundColor={"amber.700"} shadow={"9"}>
          <Text color={"white"} fontSize={16} fontWeight={500}>
            Current Page {page}
          </Text>
        </Box>

        <Button
          isDisabled={page === 10}
          onPress={() => setPage((prev) => prev + 1)}
        >
          Next Page
        </Button>
      </HStack>
      {postId && <PostComments postId={postId} />}
    </>
  );
};
