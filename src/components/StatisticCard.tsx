import { View, Text, StyleSheet } from "react-native";

export function StatisticCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <View style={styles.statisticsCard}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statisticsCard: {
    width: "100%",
    height: 89,
    backgroundColor: "#EFF0F0",
    borderRadius: 8,
    marginBottom: 12,
    display: "flex",
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
