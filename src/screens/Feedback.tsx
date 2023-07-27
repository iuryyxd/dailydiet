import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import OnDietImg from "../../assets/illustration_ondiet.svg";
import OffDietImg from "../../assets/illustration_offdiet.svg";

import { messages } from "../utils/feedbackMessages";
import { FeedbackProps } from "../@types/navigationProp";

export function Feedback({ navigation, route }: FeedbackProps) {
  const { isOnDiet } = route.params;
  const { color, bold, title, message1, message2 } =
    messages[String(isOnDiet) as keyof typeof messages];

  const handleToggleScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: color }]}>{title}</Text>
      <Text style={styles.desc}>
        {message1}
        <Text style={styles.bold}>{bold}</Text>
        {message2}
      </Text>
      {isOnDiet ? <OnDietImg /> : <OffDietImg />}
      <TouchableOpacity
        activeOpacity={1}
        style={styles.button}
        onPress={handleToggleScreen}
      >
        <Text style={styles.buttonText}>Ir para a página inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 24,
    marginBottom: 8,
  },

  desc: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    color: "#1B1D1E",
    marginBottom: 40,
    textAlign: "center",
  },

  bold: {
    fontFamily: "NunitoSans_700Bold",
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 32,
    borderRadius: 6,
    backgroundColor: "#333638",
  },

  buttonText: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    color: "#fff",
  },
});
