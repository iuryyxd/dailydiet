import { View, Text, StyleSheet } from "react-native";
import { MealCard } from "./MealCard";

interface Meal {
  title: string;
  list: Array<{
    title: string;
    time: string;
    isOnDiet: boolean;
  }>;
}

export function Meal({ title, list }: Meal) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.mealCardsContainer}>
        {list.map((item) => (
          <MealCard
            isOnDiet={item.isOnDiet}
            time={item.time}
            title={item.title}
            key={item.title}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 8,
  },

  title: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 18,
    color: "#1B1D1E",
  },

  mealCardsContainer: {
    display: "flex",
    gap: 8
  },
});
