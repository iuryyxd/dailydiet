import { View, StyleSheet } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

import { Input } from "./Input";
import { DateAndTimeInput } from "./DateAndTimeInput";
import { Button } from "./Button";
import { Select } from "./Select";

import { formSchema } from "../schemas/formSchema";
import { DataFormHookType, ParamsType } from "../@types/meals";
import dayjs from "dayjs";

interface FormProps {
  buttonLabel: string;
  onRegisterMeal: (data: DataFormHookType) => void;
  mealData?: ParamsType;
}

export function Form({ onRegisterMeal, buttonLabel, mealData }: FormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: mealData?.name ?? "",
      description: mealData?.description ?? "",
      date: mealData?.date ?? String(new Date()),
      time: mealData?.time ?? String(new Date()),
    },
    resolver: yupResolver(formSchema),
  });

  return (
    <View style={styles.form}>
      <View style={{ gap: 24 }}>
        <Input
          label="Nome"
          type="name"
          control={control}
          error={errors.name}
          inputName="name"
          defaultValue={mealData?.name}
        />
        <Input
          label="Descrição"
          multine={true}
          type="desc"
          control={control}
          inputName="description"
          defaultValue={mealData?.description}
        />

        <View style={styles.inputsContainer}>
          <DateAndTimeInput
            label="Data"
            type="date"
            defaultValue={dayjs(mealData?.date).toDate()}
            control={control}
            inputName="date"
          />
          <DateAndTimeInput
            label="Hora"
            type="time"
            defaultValue={dayjs(mealData?.time).toDate()}
            control={control}
            inputName="time"
          />
        </View>

        <Controller
          control={control}
          name="isOnDiet"
          render={({ field: { onChange } }) => (
            <Select
              onChangeValue={onChange}
              error={errors.isOnDiet}
              defaultValue={mealData?.isOnDiet}
            />
          )}
        />
      </View>

      <View>
        <Button
          title={buttonLabel}
          type="Filled"
          onPress={handleSubmit((date) => onRegisterMeal(date))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 2,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 40,
    marginTop: 24,
    position: "relative",
  },

  inputsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 12,
  },
});
