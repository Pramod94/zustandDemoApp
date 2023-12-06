import { HStack, VStack, Text } from "native-base";
import React from "react";

interface AmountSectionProps {
  type: string;
  amount: number;
}

const AmountSection = ({ type, amount }: AmountSectionProps) => (
  <HStack
    p={5}
    backgroundColor={type === "Income" ? "green.400" : "red.400"}
    space={5}
    borderRadius={50}
  >
    <img src="" alt="amt image" />
    <VStack space={1}>
      <Text>{type}</Text>
      <Text fontSize={30} fontWeight={600}>
        {`₹ ${amount}`}
      </Text>
    </VStack>
  </HStack>
);

export const AmountOverview = React.memo(AmountSection);
