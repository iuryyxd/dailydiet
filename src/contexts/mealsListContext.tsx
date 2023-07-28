import { createContext } from "react";
import { mealsType } from "../@types/meals";

interface mealsListContextType {
  meals: mealsType[];
  setMeals: (meals: mealsType[]) => void;
}

export const MealsListContext = createContext({} as mealsListContextType);

