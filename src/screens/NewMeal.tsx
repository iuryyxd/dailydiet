import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { NewMealProps } from "../@types/navigationProp";
import { PageHeader } from "../components/PageHeader";
import { Form } from "../components/Form";

export function NewMeal({ navigation }: NewMealProps) {
  const handleRegisterMeal = (isOnDiet: boolean | undefined) => {
    navigation.navigate("Feedback", {
      isOnDiet: isOnDiet,
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
