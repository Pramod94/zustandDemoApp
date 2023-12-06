import { Box, Button, HStack, Input, VStack } from "native-base";
import { TotalBalance } from "../../atoms/TotalBalance";
import React, { useState } from "react";
import { AmountOverview } from "../../atoms/AmountOverview";
import { AddBtn } from "../../atoms/AddBtn";
import {
  useExpenseAmount,
  useTotalAmout,
  useIncomeAmount,
  useExpenseTrackerActions,
} from "../../../useExpenseTrackerStore";

const AccountDetails = () => {
  const expenses = useExpenseAmount();
  const income = useIncomeAmount();
  const totalAmount = useTotalAmout();

  const [expense, setExpense] = useState(0);

 const { updateExpense } = useExpenseTrackerActions();

  return (
    <VStack space={8}>
      <TotalBalance amount={totalAmount} />
      <HStack space={4} flexWrap={"wrap"}>
        <AmountOverview type={"Income"} amount={income} />
        <AmountOverview type={"Expenses"} amount={expenses} />
      </HStack>
      <Input
        type="text"
        placeholder="add your expense"
        onChange={(e) => {
          //@ts-ignore
          setExpense(Number(e.target?.value));
        }}
      />
      {/* <AddBtn /> */}
      <Button onPress={() => updateExpense(expense)}>Add</Button>
    </VStack>
  );
};

export const AccountSection = React.memo(AccountDetails);
