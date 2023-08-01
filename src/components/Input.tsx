import { useState } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { View, Text, StyleSheet, TextInput } from "react-native";

interface InputProps {
  label: string;
  multine?: boolean;
  type: string;
  inputName: string;
  control: Control<any>;
  error?: FieldError | undefined;
}

export function Input({
  label,
  multine = false,
  type,
  inputName,
  control,
  error,
}: InputProps) {
  const [focus, setFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setFocus((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        name={inputName}
        control={control}
        render={({ field: { onChange, value } }) => (
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
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {error && <Text style={styles.errorMessage}>{error.message}</Text>}
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

  errorMessage: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    color: "#BF3B44",
  },
});
