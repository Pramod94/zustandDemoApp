import React from "react";
import { NativeBaseProvider } from "native-base";
import { AccountSection } from "./Components/molecules/AccountSection/AccountSection";
import { QueryClient, QueryClientProvider } from "react-query";
import { GitHubDescription } from "./Components/molecules/AccountSection/GitHubStatus";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { DynamicRoutes } from "./Components/organism/DynamicRoutes/DynamicRoutes";

// Create a route with dynamic ids for each section of examples

// https://dev.to/shubhamtiwari909/dynamic-routes-in-react-491g

// check on Redux toolkit

export default function App() {
  const queryClient = new QueryClient();

  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <DynamicRoutes />
        </Router>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
