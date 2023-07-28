import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Meal } from "./Meal";
import MealsPlaceholder from "./MealsPlaceholder";
import { useMeal } from "../hooks/useMeal";

interface MealsProps {
  handleOpenNewMeal: () => void;
}

export function Meals({ handleOpenNewMeal }: MealsProps) {
  const { meals } = useMeal();

  return (
    <View style={styles.container}>
      {/* Add Meal */}
      <View style={styles.addMeal}>
        <Text style={styles.title}>Refeições</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={1}
          onPress={handleOpenNewMeal}
        >
          <Feather name="plus" style={styles.icon} />
          <Text style={styles.buttonText}>Nova refeição</Text>
        </TouchableOpacity>
      </View>

      {/* Meals List */}

      <View style={styles.meals}>
        {meals.length === 0 ? (
          <MealsPlaceholder />
        ) : (
          meals.map((item, i) => (
            <Meal title={item.date} list={item.items} key={i} />
          ))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "100%",
  },

  addMeal: {
    gap: 8,
  },

  title: {
    fontFamily: "NunitoSans_400Regular",
    color: "#1B1D1E",
    fontSize: 16,
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#333638",
    borderRadius: 6,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  buttonText: {
    fontFamily: "NunitoSans_700Bold",
    color: "#fff",
    fontSize: 14,
  },

  icon: {
    color: "#fff",
    fontSize: 18,
  },

  meals: {
    marginTop: 32,
    marginBottom: 32,
    gap: 32,
  },
});
