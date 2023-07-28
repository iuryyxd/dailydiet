import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EditMealProps } from "../@types/navigationProp";

import { PageHeader } from "../components/PageHeader";
import { Form } from "../components/Form";

export function EditMeal({ navigation }: EditMealProps) {
  const handleRegisterMeal = (isOnDiet: boolean | undefined) => {
    navigation.navigate("Feedback", {
      isOnDiet: isOnDiet,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Editar refeição" />
      <Form
        buttonLabel="Salvar alterações"
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
});
