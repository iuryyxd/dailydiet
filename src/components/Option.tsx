import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface OptionProps {
  label: string;
  color: string;
  isSelected: boolean;
  toggleOption: (option: string) => void;
}

export function Option({
  label,
  color,
  isSelected,
  toggleOption,
}: OptionProps) {

  const bgColors = {
    Sim: "#E5F0DB",
    Não: "#F4E6E7",
  }

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isSelected ? bgColors[label as keyof typeof bgColors] : "#EFF0F0",
          borderColor: isSelected ? color : "",
          borderWidth: isSelected ? 1 : 0,
          borderStyle: "solid",
        },
      ]}
      onPress={() => toggleOption(label === "Sim" ? "yes" : "no")}
      activeOpacity={1}
    >
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    height: 50,
    borderRadius: 6,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  text: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    color: "#1B1D1E",
  },
});
