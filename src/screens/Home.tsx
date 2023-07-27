import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeProps } from "../@types/navigationProp";

import { Header } from "../components/Header";
import { Percentage } from "../components/Percentage";
import { Meals } from "../components/Meals";

export function Home({ navigation }: HomeProps) {

  function handleOpenStatistics() {
    navigation.navigate("Statistics");
  }

  function handleOpenNewMeal() {
    navigation.navigate("NewMeal");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Percentage handleOpenStatistics={handleOpenStatistics} />
        <Meals handleOpenNewMeal={handleOpenNewMeal} />
      </ScrollView>
    </SafeAreaView>
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
