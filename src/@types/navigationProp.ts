import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../screens/routes";

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type StatisticsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Statistics"
>;

export type NewMealScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "NewMeal"
>;

export type OnDietScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "OnDiet"
>;
