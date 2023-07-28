import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function MealsPlaceholder() {
  return (
    <View style={styles.container}>
      <Feather name="info" size={48} />
      <Text style={styles.text}>Não há refeições adicionadas.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginTop: 45,
    opacity: 0.3
  },

  text: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    color: "#1B1D1E",
  },
});
