import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatisticsProps } from "../@types/navigationProp";

import { StatisticCard } from "../components/StatisticCard";
import {
  getBestSequenceOnDiet,
  getMealsOffDiet,
  getMealsOnDiet,
  getPercentageOnDiet,
  getTotalMeals,
} from "../utils/mealStatistics";

import { useMeal } from "../hooks/useMeal";

export function Statistics({ navigation }: StatisticsProps) {
  const { meals } = useMeal();

  const totalPercentageOnDiet = getPercentageOnDiet(meals);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: totalPercentageOnDiet >= 50 ? "#E5F0DB" : "#F4E6E7",
        },
      ]}
    >
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          style={styles.icon}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={styles.headerTitle}>{totalPercentageOnDiet}%</Text>
        <Text style={styles.headerText}>das refeições dentro da dieta</Text>
      </View>

      <View style={styles.statistics}>
        <Text style={styles.statisticsTitle}>Estatísticas gerais</Text>

        <StatisticCard
          title={getBestSequenceOnDiet(meals)}
          text="melhor sequência de pratos dentro da dieta"
        />
        <StatisticCard
          title={getTotalMeals(meals)}
          text="refeições registradas"
        />

        <View style={styles.cardsDiet}>
          <StatisticCard
            title={getMealsOnDiet(meals)}
            text="refeições dentro da dieta"
            color="#E5F0DB"
          />

          <StatisticCard
            title={getMealsOffDiet(meals)}
            text="refeições fora da dieta"
            color="#F4E6E7"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 14,
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
});
