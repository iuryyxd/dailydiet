import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NewMealProps } from "../@types/navigationProp";
import { DataFormHookType } from "../@types/meals";

import { createMeal } from "../utils/createMeal";
import { useMeal } from "../hooks/useMeal";

import { PageHeader } from "../components/PageHeader";
import { Form } from "../components/Form";

export function NewMeal({ navigation }: NewMealProps) {
  const { meals, setMeals } = useMeal();

  const handleRegisterMeal = async (data: DataFormHookType) => {
    const newMeals = createMeal(meals, data);

    setMeals(newMeals);
    AsyncStorage.setItem("meals", JSON.stringify(newMeals));

    navigation.navigate("Feedback", {
      isOnDiet: data.isOnDiet,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Nova refeição" />

      <Form
        buttonLabel="Cadastrar refeição"
        onRegisterMeal={handleRegisterMeal}
      />
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
