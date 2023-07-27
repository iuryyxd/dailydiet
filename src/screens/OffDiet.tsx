import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import OffDietImg from "../../assets/illustration_offdiet.svg";
import { OffDietScreenNavigationProp } from "../@types/navigationProp";

interface OffDietProps {
  navigation: OffDietScreenNavigationProp;
}

export function OffDiet({ navigation }: OffDietProps) {
  const handleToggleScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Que pena!</Text>
      <Text style={styles.desc}>
        Você <Text style={styles.bold}>saiu da dieta</Text> dessa vez, mas
        continue se esforçando e não desista!
      </Text>
      <OffDietImg />
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
    color: "#BF3B44",
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
