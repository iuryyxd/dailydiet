import { View, Text, StyleSheet } from "react-native";

interface MealTagProps {
  isOnDiet: boolean;
}

export function MealTag({ isOnDiet }: MealTagProps) {
  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.dot,
          { backgroundColor: isOnDiet ? "#639339" : "BF3B44" },
        ]}
      />
      <Text style={styles.text}>
        {isOnDiet ? "dentro da dieta" : "fora da dieta"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 144,
    height: 34,
    borderRadius: 1000,
    backgroundColor: "#EFF0F0",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  text: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 14,
    color: "#1B1D1E",
  },
});
