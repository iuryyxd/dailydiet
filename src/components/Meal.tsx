import { View, Text, StyleSheet } from "react-native";
import { MealCard } from "./MealCard";
import dayjs from "dayjs";
import { mealsType } from "../@types/meals";

export function Meal({ date, items }: mealsType) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dayjs(date).format("DD.MM.YYYY")}</Text>
      <View style={styles.mealCardsContainer}>
        {items.map((item) => (
          <MealCard data={item} key={item.name} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },

  title: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 18,
    color: "#1B1D1E",
  },

  mealCardsContainer: {
    gap: 8,
  },
});
