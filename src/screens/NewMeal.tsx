import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { NewMealProps } from "../@types/navigationProp";
import { Input } from "../components/Input";
import { DateAndTimeInput } from "../components/DateAndTimeInput";
import { Select } from "../components/Select";
import { useState } from "react";

export function NewMeal({ navigation }: NewMealProps) {
  const [isOnDiet, setIsOnDiet] = useState<boolean>();

  const handleToggleDiet = (option: boolean) => {
    setIsOnDiet(option);
  };

  const handleRegisterMeal = () => {
    navigation.navigate("Feedback", {
      isOnDiet,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          style={styles.icon}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={styles.headerTitle}>Nova refeição</Text>
      </View>

      <View style={styles.form}>
        <Input label="Nome" type="name" />
        <Input label="Descrição" multine={true} type="desc" />

        <View style={styles.inputsContainer}>
          <DateAndTimeInput label="Data" type="date" />
          <DateAndTimeInput label="Hora" type="time" />
        </View>

        <Select handleToggleDiet={handleToggleDiet} />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={1}
          onPress={handleRegisterMeal}
        >
          <Text style={styles.buttonText}>Cadastrar refeição</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#DDDEDF",
    position: "relative",
  },

  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    position: "relative",
  },

  headerTitle: {
    fontFamily: "NunitoSans_700Bold",
    color: "#1B1D1E",
    fontSize: 18,
  },

  icon: {
    fontSize: 24,
    color: "#333638",
    position: "absolute",
    left: 24,
    top: 3,
  },

  form: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
    paddingTop: 40,
    marginTop: 24,

    display: "flex",
    gap: 24,
    position: "relative",
  },

  inputsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 12,
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#333638",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,

    position: "absolute",
    bottom: 70,
    left: 24,
  },

  buttonText: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    color: "#fff",
  },
});
