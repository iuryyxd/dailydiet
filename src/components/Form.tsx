import { View, Text } from "react-native";
import { Input } from "./Input";
import { DateAndTimeInput } from "./DateAndTimeInput";
import { Button } from "./Button";
import { Select } from "./Select";
import { useState } from "react";
import { StyleSheet } from "react-native";

interface FormProps {
  buttonLabel: string;
  onRegisterMeal: (isOnDiet: boolean | undefined) => void;
}

export function Form({ onRegisterMeal, buttonLabel }: FormProps) {
  const [isOnDiet, setIsOnDiet] = useState<boolean>();

  const handleToggleDiet = (option: boolean) => {
    setIsOnDiet(option);
  };

  return (
    <View style={styles.form}>
      <View style={{ gap: 24 }}>
        <Input label="Nome" type="name" />
        <Input label="Descrição" multine={true} type="desc" />

        <View style={styles.inputsContainer}>
          <DateAndTimeInput label="Data" type="date" />
          <DateAndTimeInput label="Hora" type="time" />
        </View>

        <Select handleToggleDiet={handleToggleDiet} />
      </View>

      <View>
        <Button
          title={buttonLabel}
          type="Filled"
          onPress={() => onRegisterMeal(isOnDiet)}
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
