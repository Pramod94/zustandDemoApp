import { Box } from "native-base";
import React, { memo } from "react";
import { UserDataFields } from "./DynamicForm";

// Create a JSON to create a dynamic form to get the profile details
export const ProfileInfo: React.FC<any> = memo(({ info }) => {
  console.log("info", info);
  return (
    <>
      <h2>Profile details</h2>
      <ul>
        {Object.entries(info).map(([key, value]) => {
          if (typeof value !== "object") {
            return <li>{`${key} : ${value}`}</li>;
          }
        })}
      </ul>
      <Box m={10}>
        <UserDataFields />
      </Box>
    </>
  );
});
