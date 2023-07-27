import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

interface PercentageProps {
  handleOpenStatistics: () => void;
}

export function Percentage({ handleOpenStatistics }: PercentageProps) {
  return (
    <View style={styles.container}>
      <Feather name="arrow-up-right" style={styles.icon} onPress={handleOpenStatistics} />
      <Text style={styles.title}>90,86%</Text>
      <Text style={styles.text}>das refeições dentro da dieta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 102,
    backgroundColor: "#E5F0DB",
    borderRadius: 8,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },

  title: {
    fontFamily: "NunitoSans_700Bold",
    color: "#1B1D1E",
    fontSize: 32,
  },

  text: {
    fontFamily: "NunitoSans_400Regular",
    color: "#333638",
    fontSize: 14,
  },

  icon: {
    fontSize: 24,
    color: "#639339",
    position: "absolute",
    right: 8,
    top: 8,
  },
});
