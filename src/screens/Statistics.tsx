import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatisticsProps } from "../@types/navigationProp";

import { StatisticCard } from "../components/StatisticCard";

export function Statistics({ navigation }: StatisticsProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          style={styles.icon}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={styles.headerTitle}>90,86%</Text>
        <Text style={styles.headerText}>das refeições dentro da dieta</Text>
      </View>

      <View style={styles.statistics}>
        <Text style={styles.statisticsTitle}>Estatísticas gerais</Text>

        <StatisticCard
          title="22"
          text="melhor sequência de pratos dentro da dieta"
        />
        <StatisticCard title="109" text="refeições registradas" />

        <View style={styles.cardsDiet}>
          <View style={styles.cardOnDiet}>
            <Text style={styles.cardTitle}>99</Text>
            <Text style={styles.cardText}>refeições dentro da dieta</Text>
          </View>

          <View style={styles.cardOffDiet}>
            <Text style={styles.cardTitle}>10</Text>
            <Text style={styles.cardText}>refeições fora da dieta</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E5F0DB",
    paddingTop: 14
  },

  header: {
    width: "100%",
    height: 102,
    borderRadius: 8,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontFamily: "NunitoSans_700Bold",
    color: "#1B1D1E",
    fontSize: 32,
  },

  headerText: {
    fontFamily: "NunitoSans_400Regular",
    color: "#333638",
    fontSize: 14,
  },

  icon: {
    fontSize: 24,
    color: "#639339",
    position: "absolute",
    left: 24,
    top: 12,
  },

  statistics: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
  },

  statisticsTitle: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    color: "#1B1D1E",
    marginTop: 32,
    marginBottom: 23,
    textAlign: "center",
  },

  cardsDiet: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 12,
  },

  cardOnDiet: {
    flex: 1,
    height: 107,
    backgroundColor: "#E5F0DB",
    borderRadius: 8,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  cardOffDiet: {
    flex: 1,
    height: 107,
    backgroundColor: "#F4E6E7",
    borderRadius: 8,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  cardTitle: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 24,
    color: "#1B1D1E",
    textAlign: "center",
  },

  cardText: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 14,
    color: "#333638",
    textAlign: "center",
    width: 125,
  },
});
