import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import "./src/lib/dayjs";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { Routes } from "./src/screens/routes";
import { NavigationContainer } from "@react-navigation/native";
import { MealsListContext } from "./src/contexts/mealsListContext";
import { mealsType } from "./src/@types/meals";

preventAutoHideAsync();

export default function App() {
  const [meals, setMeals] = useState<mealsType[]>([]);

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    const getData = async () => {
      const value = await AsyncStorage.getItem("meals");
      if (value === null) AsyncStorage.setItem("meals", JSON.stringify([]));

      setMeals(value !== null ? JSON.parse(value) : []);
    };

    getData();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MealsListContext.Provider value={{ meals, setMeals }}>
      <NavigationContainer onReady={onLayoutRootView}>
        <Routes />
        <StatusBar style="auto" />
      </NavigationContainer>
    </MealsListContext.Provider>
  );
}
