import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../@types/navigationProp";

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  const { navigate } = useNavigation<StackNavigation>();

  const handleNavigateToHome = () => {
    navigate("Home");
  };

  return (
    <View style={styles.header}>
      <Feather
        name="arrow-left"
        style={styles.icon}
        onPress={handleNavigateToHome}
      />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
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
});
