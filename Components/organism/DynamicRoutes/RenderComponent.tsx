import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { AccountSection } from "../../molecules/AccountSection/AccountSection";
import { GitHubDescription } from "../../molecules/AccountSection/GitHubStatus";
import { useProfileInfo } from "../../../useExpenseTrackerStore";
import { ProfileInfo } from "../../molecules/ProfileInfo";

export const RenderComponent = () => {
  // eleId will fetch the id from the parameter which is passed from Link
  const { eleId } = useParams();

  const userBasicData = useProfileInfo();

  return (
    <>
      {eleId === "account_details" ? <AccountSection /> : null}
      {eleId === "github_details" ? <GitHubDescription /> : null}
      {eleId === "user_profile" ? <ProfileInfo info={userBasicData} /> : null}
    </>
  );
};
