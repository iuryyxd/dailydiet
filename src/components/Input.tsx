import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

interface InputProps {
  label: string;
  multine?: boolean;
  type: string;
}

export function Input({ label, multine = false, type }: InputProps) {
  const [focus, setFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setFocus((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: focus ? "#5C6265" : "#DDDEDF",
            height: type === "desc" ? 120 : 48,
            textAlignVertical: type === "desc" ? "top" : "center",
            paddingVertical: type === "desc" ? 12 : 0,
          },
        ]}
        inputMode="text"
        multiline={multine}
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },

  label: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    color: "#333638",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 6,
    paddingHorizontal: 12,

    color: "#1B1D1E",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
  },
});
