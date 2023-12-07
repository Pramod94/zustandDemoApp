import React from "react";
import { NativeBaseProvider } from "native-base";
import { AccountSection } from "./Components/molecules/AccountSection/AccountSection";
import { QueryClient, QueryClientProvider } from "react-query";
import { GitHubDescription } from "./Components/molecules/AccountSection/GitHubStatus";


// Create a route with dynamic ids for each section of examples

// check on Redux toolkit

export default function App() {
  const queryClient = new QueryClient();
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
      <AccountSection />
      <GitHubDescription />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}