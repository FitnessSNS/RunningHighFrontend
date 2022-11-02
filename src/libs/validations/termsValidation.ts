import * as yup from "yup";

export const termsValidation = yup.object({
  all: yup.boolean().oneOf([true]),
  service: yup.boolean().oneOf([true]),
  infoGet: yup.boolean().oneOf([true]),
  infoHandle: yup.boolean().oneOf([true]),
  location: yup.boolean().oneOf([true]),
});
