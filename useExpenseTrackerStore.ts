import { create } from "zustand";
import { get } from "lodash";

// Collect and make a note of all the libraries and way it is used 

const initialData = {
    totalAmount: 150000,
    income: 12000,
    expenses: 5000,
    userProfile: {
      name: 'Dev',
      email: 'abc@test.com',
      phone: 123456789,
      address: {
        street: '',
        area: '',
        companyDetails: {
          name: '',
          location: ''
        }
      },
    }
};

const expenseTrackerStore = (_setData: any, _getData: any) => ({
  ...initialData,
  actions: {
    updateExpense: (expenseAmt: any) => _setData((store: any) => ({ expenses: store.expenses + expenseAmt })),

    // make use of produce from immer
    // updateUserBasicDetails: ({ name, email, phone, ...rest }) =>  
  },
});

const useExpenseTrackerStore = create(expenseTrackerStore);

export const useExpenseAmount = () =>
  useExpenseTrackerStore((store) => {
    return get(store, ["expenses"], 0);
  });

  export const useTotalAmout = () => useExpenseTrackerStore((store) => get(store, ['totalAmount'], 0));

  export const useIncomeAmount = () => useExpenseTrackerStore((store) => get(store, ['income'], 0));

  export const useExpenseTrackerActions = () => useExpenseTrackerStore((store) => store.actions);

  export const useProfileInfo = () => useExpenseTrackerStore(store => store.userProfile);
