import { createContext } from "react";
import { MealType } from "../@types/meals";

interface HandleOpenMealContextData {
  handleOpenMeal: (mealInfo: MealType) => void;
}

export const HandleOpenMealContext = createContext(
  {} as HandleOpenMealContextData
);
