import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "../components/Header";
import { Percentage } from "../components/Percentage";
import { Meals } from "../components/Meals";

import { HomeScreenNavigationProp } from "../@types/navigationProp";

interface HomeProps {
  navigation: HomeScreenNavigationProp;
};

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
