import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import dayjs from "dayjs";

interface DateAndTimeInputProps {
  label: string;
  type: string;
}

let width = (Dimensions.get("window").width / 2) - 30;

export function DateAndTimeInput({ label, type }: DateAndTimeInputProps) {
  let inputValue;

  if (type === "date") {
    inputValue = "27/08/2021";
  } else {
    inputValue = "06:50";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity>
        <TextInput style={styles.input} editable={false} value={inputValue} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    gap: 6,
  },

  label: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    color: "#333638",
  },

  input: {
    height: 48,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDDEDF",
    borderStyle: "solid",
    borderRadius: 6,
    paddingHorizontal: 12,

    color: "#1B1D1E",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 14,
  },
});
