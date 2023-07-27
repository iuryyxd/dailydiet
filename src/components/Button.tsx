import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

type ButtonTypes = "Filled" | "Outlined";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type: ButtonTypes;
  icon?: React.ReactNode;
}

export function Button({ title, type, icon, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: type === "Filled" ? "#333638" : "#fff",
          borderWidth: type === "Outlined" ? 1 : 0,
          borderStyle: "solid",
          borderColor: "#1B1D1E",
        },
      ]}
      activeOpacity={1}
      {...props}
    >
      {icon && icon}
      <Text
        style={[
          styles.buttonText,
          {
            color: type === "Filled" ? "#fff" : "#1B1D1E",
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    flexDirection: "row",
    gap: 16,
  },

  buttonText: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
  },
});
