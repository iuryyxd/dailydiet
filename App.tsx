import { useCallback, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import "./src/lib/dayjs";

import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { Routes } from "./src/screens/routes";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

preventAutoHideAsync();

export default function App() {
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

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Routes />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
