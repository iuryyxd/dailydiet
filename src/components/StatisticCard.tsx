import { View, Text, StyleSheet } from "react-native";

export function StatisticCard({
  title,
  text,
  color,
}: {
  title: number;
  text: string;
  color?: string;
}) {
  return (
    <View
      style={[
        styles.statisticsCard,
        {
          backgroundColor: color ? color : "#EFF0F0",
          height: !color ? 89 : 107,
          flex: color ? 1 : 0,
        },
      ]}
    >
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={[styles.cardText, { width: color ? 125 : "auto" }]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statisticsCard: {
    width: "100%",
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 24,
    color: "#1B1D1E",
    textAlign: "center",
  },

  cardText: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 14,
    color: "#333638",
    textAlign: "center",
  },
});
