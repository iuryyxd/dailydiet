import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import dayjs from "dayjs";

interface DateAndTimeInputProps {
  label: string;
  type: string;
}

export function DateAndTimeInput({ label, type }: DateAndTimeInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity>
        <TextInput
          style={styles.input}
          editable={false}
          value={dayjs(new Date()).format(
            `${type === "date" ? "DD/MM/YYYY" : "HH:mm"}`
          )}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 1,
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
    fontSize: 16,
  },
});
