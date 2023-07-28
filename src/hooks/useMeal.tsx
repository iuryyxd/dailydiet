import { useContext } from "react";
import { MealsListContext } from "../contexts/mealsListContext";

export function useMeal() {
  return useContext(MealsListContext);
}
