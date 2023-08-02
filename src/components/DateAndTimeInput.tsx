import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import dayjs from "dayjs";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Control, Controller } from "react-hook-form";

interface DateAndTimeInputProps {
  label: string;
  type: string;
  defaultValue?: Date;
  control: Control<any>;
  inputName: string;
}

let width = Dimensions.get("window").width / 2 - 30;

export function DateAndTimeInput({
  label,
  type,
  defaultValue,
  control,
  inputName,
}: DateAndTimeInputProps) {
  const [date, setDate] = useState<Date>(defaultValue ?? new Date());
  const [showPickerModal, setShowPickerModal] = useState<boolean>(false);

  const togglePickerModal = () => {
    setShowPickerModal((prev) => !prev);
  };

  const toggleValue = (event: DateTimePickerEvent, date?: Date) => {
    if (event?.type === "set") {
      setDate(date!);
    }
  };

  let inputValue = dayjs(date).format(type === "date" ? "DD/MM/YYYY" : "HH:mm");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      {showPickerModal && (
        <Controller
          control={control}
          name={inputName}
          render={({ field: { onChange, value } }) => (
            <DateTimePicker
              locale="pt-BR"
              value={value}
              mode={type === "date" ? "date" : "time"}
              onChange={(event, date) => {
                togglePickerModal();
                toggleValue(event, date);
                onChange(date);
              }}
              maximumDate={new Date()}
            />
          )}
        />
      )}

      <TouchableOpacity onPress={togglePickerModal}>
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
