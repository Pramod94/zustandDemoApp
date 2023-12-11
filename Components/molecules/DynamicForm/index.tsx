import {
  Box,
  Button,
  FormControl,
  Input,
  Radio,
  Select,
  Text,
} from "native-base";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { dynamicForm } from "./form";
import { useExpenseTrackerActions } from "../../../useExpenseTrackerStore";

export const UserDataFields: React.FC<any> = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const { updateUserBasicDetails } = useExpenseTrackerActions();

  const onSubmit = (data: any) => {
    // Validation can be handled with "yup" with various options such as watch (yup method) etc...
    console.log("data", data);
    updateUserBasicDetails(data);
  };

  const renderDyanmicFields = ({ label, displayName, type, options }) => (
    <Box key={label}>
      <FormControl>
        <FormControl.Label>{displayName}</FormControl.Label>
        <Controller
          name={label}
          control={control}
          render={({ field }) => {
            switch (type) {
              case "text":
                return <Input value={field.value} onChange={field.onChange} />;
              case "dropdown":
                return (
                  <Select onValueChange={field.onChange}>
                    {options.map((e) => (
                      <Select.Item label={e} value={e} />
                    ))}
                  </Select>
                );
              // case "radio" : return (<Radio.Group>{

              //     }</Radio.Group>)
              default:
                return null;
            }
          }}
        />
      </FormControl>
    </Box>
  );
  return (
    <Box>
      <Text>User Details</Text>
      <Box>{dynamicForm.map(renderDyanmicFields)}</Box>
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </Box>
  );
};
