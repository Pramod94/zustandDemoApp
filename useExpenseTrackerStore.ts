import { create } from "zustand";
import { get } from "lodash";

// Collect and make a note of all the libraries and way it is used 

const initialData = {
    totalAmount: 150000,
    income: 12000,
    expenses: 5000,
};

const expenseTrackerStore = (_setData: any, _getData: any) => ({
  ...initialData,
  actions: {
    updateExpense: (expenseAmt: any) => _setData((store: any) => ({ expenses: store.expenses + expenseAmt }))
  },
});

const useExpenseTrackerStore = create(expenseTrackerStore);

export const useExpenseAmount = () =>
  useExpenseTrackerStore((store) => {
    return get(store, ["expenses"], 0);
  });

  export const useTotalAmout = () => useExpenseTrackerStore((store) => get(store, ['totalAmount'], 0));

  export const useIncomeAmount = () => useExpenseTrackerStore((store) => get(store, ['income'], 0));

  export const useExpenseTrackerActions = () => useExpenseTrackerStore((store) => store.actions)
