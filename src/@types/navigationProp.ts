import { NavigationProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Statistics: undefined;
  NewMeal: undefined;
  Feedback: {
    isOnDiet: boolean | undefined;
  };
  MealInfo: undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export type StatisticsProps = NativeStackScreenProps<
  RootStackParamList,
  "Statistics"
>;

export type NewMealProps = NativeStackScreenProps<
  RootStackParamList,
  "NewMeal"
>;

export type FeedbackProps = NativeStackScreenProps<
  RootStackParamList,
  "Feedback"
>;

export type MealInfoProps = NativeStackScreenProps<
  RootStackParamList,
  "MealInfo"
>;
