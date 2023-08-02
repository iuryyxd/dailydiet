import * as yup from "yup";

export const formSchema = yup
  .object({
    name: yup
      .string()
      .required("Este campo é obrigatório")
      .min(3, "O nome deve ter no mínimo 3 caracteres"),
    description: yup.string().optional(),
    date: yup.string().required(),
    time: yup.string().required(),
    isOnDiet: yup.boolean().required("Este campo é obrigatório"),
  })
  .required();
