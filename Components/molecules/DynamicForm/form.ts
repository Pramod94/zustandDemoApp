export const dynamicForm = [
    {
        label: 'firstName',
      displayName: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      defaultValue: "",
      rules: {
        required: true,
      },
    },
    {
      label: "lastName",
      displayName: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      defaultValue: "",
      rules: {
        required: true,
      },
    },
    {
        label: "email",
        displayName: "Email",
        type: "text",
        placeholder: "Enter your email id",
        defaultValue: "",
        rules: {
          required: true,
        },
      },
 {
      label: "gender",
      displayName: "Gender",
      type: "radio",
      options: ["male", "female"],
      defaultValue: "",
      rules: {
        required: true,
      },
    },
    {
      label: "profession",
      displayName: "Profession",
      type: "dropdown",
      options: ["Front-end Developer", "Back-end Developer", "Devops Engineer"],
      defaultValue: "",
      rules: {
        required: true,
      },
    },
    {
      type: "checkbox",
      label: "",
      checkboxLabel: "I hereby agree to the terms.",
      defaultValue: false,
      rules: {
        required: true,
      },
    },
];