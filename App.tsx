import React from "react";
import { NativeBaseProvider } from "native-base";
import { AccountSection } from "./Components/molecules/AccountSection/AccountSection";
import { QueryClient, QueryClientProvider } from "react-query";
import { GitHubDescription } from "./Components/molecules/AccountSection/GitHubStatus";

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