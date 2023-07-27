import { View, Text, StyleSheet } from "react-native";

interface MealCard {
  time: string;
  title: string;
  isOnDiet: boolean;
}

export function MealCard({ time, title, isOnDiet }: MealCard) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.divider} />
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </View>

      <View style={isOnDiet ? styles.dotGreen : styles.dotRed} />
    </View>
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

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },

  textContainer: {
    display: "flex",
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
    width: 190
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
