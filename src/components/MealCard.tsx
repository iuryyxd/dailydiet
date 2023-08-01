import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HandleOpenMealContext } from "../contexts/handleOpenMealContext";
import dayjs from "dayjs";
import { MealType } from "../@types/meals";

interface MealCard {
  data: MealType;
}

export function MealCard({ data }: MealCard) {
  const { handleOpenMeal } = useContext(HandleOpenMealContext);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => {
        handleOpenMeal(data);
      }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.time}>{dayjs(data.date).format("HH:mm")}</Text>
        <View style={styles.divider} />
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {data.name}
        </Text>
      </View>

      <View style={data.isOnDiet ? styles.dotGreen : styles.dotRed} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 49,
    borderWidth: 1,
    borderColor: "#DDDEDF",
    borderStyle: "solid",
    borderRadius: 6,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },

  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  time: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 12,
    color: "#1B1D1E",
  },

  divider: {
    width: 0,
    height: 14,
    borderWidth: 1,
    borderColor: "#B9BBBC",
    borderStyle: "solid",
  },

  title: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    color: "#333638",
    width: 190,
  },

  dotRed: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#F3BABD",
  },

  dotGreen: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#CBE4B4",
  },
});
