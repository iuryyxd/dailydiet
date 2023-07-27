import { View, Text, StyleSheet } from "react-native";
import { Option } from "./Option";
import { useState } from "react";

export function Select() {
  const [option, setOption] = useState<string>();

  const handleOption = (option: string) => {
    setOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Está dentro da dieta?</Text>

      <View style={styles.optionsContainer}>
        <Option
          label="Sim"
          color="#639339"
          isSelected={option === "yes"}
          toggleOption={handleOption}
        />
        <Option
          label="Não"
          color="#BF3B44"
          isSelected={option === "no"}
          toggleOption={handleOption}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    gap: 8,
  },

  title: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    color: "#333638",
  },

  optionsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 8,
  },
});
