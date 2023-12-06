import { Text, VStack } from "native-base";
import React from "react";

interface AccountBalanceProps {
  amount: number;
}

const AccountBalance = ({ amount }: AccountBalanceProps) => (
  <VStack justifyContent={"center"} alignItems={"center"}>
    <Text fontSize={14} color={'gray.500'} fontWeight={500}>
      Account Balance
    </Text>
    <Text fontSize={50} fontWeight={600}>
    {`₹ ${amount}`}
    </Text>
  </VStack>
);

export const TotalBalance = React.memo(AccountBalance);
