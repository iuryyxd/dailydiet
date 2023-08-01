import { View, Text, StyleSheet } from "react-native";
import { Option } from "./Option";
import { useEffect, useState } from "react";
import { FieldError } from "react-hook-form";

interface SelectProps {
  onChangeValue: (value: boolean) => void;
  error?: FieldError | undefined;
}

export function Select({ error, onChangeValue }: SelectProps) {
  const [option, setOption] = useState<boolean>();

  const handleOption = (option: boolean) => {
    setOption(option);
  };

  const handleOnChangeValue = (value: boolean) => {
    onChangeValue(value);
  };

  useEffect(() => {
    handleOnChangeValue(option!);
  }, [option]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Está dentro da dieta?</Text>

      <View style={styles.optionsContainer}>
        <Option
          label="Sim"
          color="#639339"
          isSelected={option!}
          toggleOption={handleOption}
        />
        <Option
          label="Não"
          color="#BF3B44"
          isSelected={option! === false}
          toggleOption={handleOption}
        />
      </View>

      {error && <Text style={styles.errorMessage}>{error.message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
  },

  title: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    color: "#333638",
  },

  optionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 8,
  },

  errorMessage: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    color: "#BF3B44",
  },
});
