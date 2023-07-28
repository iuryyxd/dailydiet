import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { NewMealProps } from "../@types/navigationProp";
import { Input } from "../components/Input";
import { DateAndTimeInput } from "../components/DateAndTimeInput";
import { Select } from "../components/Select";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { Button } from "../components/Button";

export function NewMeal({ navigation }: NewMealProps) {
  const [isOnDiet, setIsOnDiet] = useState<boolean>();

  const handleToggleDiet = (option: boolean) => {
    setIsOnDiet(option);
  };

  const handleRegisterMeal = () => {
    navigation.navigate("Feedback", {
      isOnDiet: isOnDiet,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Nova refeição" />

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
            title="Cadastrar refeição"
            type="Filled"
            onPress={handleRegisterMeal}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDEDF",
    position: "relative",
    paddingTop: 14,
  },

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
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 12,
  },
});
