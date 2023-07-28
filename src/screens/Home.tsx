import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { HomeProps } from "../@types/navigationProp";
import { HandleOpenMealContext } from "../contexts/handleOpenMealContext";

import { HomeHeader } from "../components/HomeHeader";
import { Percentage } from "../components/Percentage";
import { Meals } from "../components/Meals";

export function Home({ navigation }: HomeProps) {
  function handleOpenStatistics() {
    navigation.navigate("Statistics");
  }

  function handleOpenNewMeal() {
    navigation.navigate("NewMeal");
  }

  function handleOpenMeal() {
    navigation.navigate("MealInfo");
  }

  return (
    <HandleOpenMealContext.Provider value={{ handleOpenMeal }}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeHeader />
          <Percentage handleOpenStatistics={handleOpenStatistics} />
          <Meals handleOpenNewMeal={handleOpenNewMeal} />
        </ScrollView>
      </SafeAreaView>
    </HandleOpenMealContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 37,
  },
});
