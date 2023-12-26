import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Box, Text } from "native-base";
import { RenderComponent } from "./RenderComponent";

export const DynamicRoutes = () => {
  // This could be list of items recieved from API
  const dynamicRoutes = [
    {
      id: "account_details",
      text: "Account Details",
    },
    {
      id: "github_details",
      text: "Github Details",
    },
    {
      id: "user_profile",
      text: "User Details",
    },
    {
      id: "all_posts",
      text: "Posts",
    },
  ];

  return (
    <>
      <Box justifyContent={"center"} alignItems={"center"}>
        {dynamicRoutes.map(({ id, text }) => (
          <Box m={2} p={2} backgroundColor={"cyan.500"} shadow={"9"}>
            <Link to={`details/${id}`}>
              <Text color={"white"} fontSize={16} fontWeight={500}>
                {text}
              </Text>
            </Link>
          </Box>
        ))}
      </Box>
      <Routes>
        {/* eleId will be replaced with the id added to Link component */}
        <Route path="details/:eleId" element={<RenderComponent />} />
      </Routes>
    </>
  );
};
