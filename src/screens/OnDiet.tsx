import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import OnDietImg from "../../assets/illustration_ondiet.svg";
import { OnDietScreenNavigationProp } from "../@types/navigationProp";

interface OnDietProps {
  navigation: OnDietScreenNavigationProp;
}

export function OnDiet({ navigation }: OnDietProps) {
  
  const handleToggleScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Continue assim!</Text>
      <Text style={styles.desc}>
        Você continua <Text style={styles.bold}>dentro da dieta.</Text> Muito
        bem!
      </Text>
      <OnDietImg />
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
    color: "#639339",
    marginBottom: 8,
  },

  desc: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    color: "#1B1D1E",
    marginBottom: 40,
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
