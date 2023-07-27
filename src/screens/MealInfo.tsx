import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MealInfoProps } from "../@types/navigationProp";

import { PageHeader } from "../components/PageHeader";
import { MealTag } from "../components/MealTag";
import { Button } from "../components/Button";

import { Feather } from "@expo/vector-icons";

export function MealInfo({ route }: MealInfoProps) {
  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Refeição" />
      <View style={styles.main}>
        <View>
          <Text style={styles.title}>Sanduíche</Text>
          <Text style={styles.text}>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Text>
          <View style={styles.date}>
            <Text style={styles.dateTitle}>Data e hora</Text>
            <Text style={styles.text}>12/08/2022 às 16:00</Text>
          </View>

          <MealTag isOnDiet />
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            title="Editar refeição"
            type="Filled"
            icon={<Feather name="edit-3" size={18} color="#ffffff" />}
          />
          <Button
            title="Excluir refeição"
            type="Outlined"
            icon={<Feather name="trash-2" size={18} color="#1B1D1E" />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E5F0DB",
    position: "relative",
    paddingTop: 14,
  },

  main: {
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

  title: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 20,
    color: "#1B1D1E",
    marginBottom: 8,
  },

  text: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    color: "#333538",
    marginBottom: 24,
  },

  date: {
    gap: 8,
  },

  dateTitle: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    color: "#1B1D1E",
  },

  buttonsContainer: {
    gap: 8,
  },
});
