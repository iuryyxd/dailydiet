import { createContext } from "react";

interface HandleOpenMealContextData {
  handleOpenMeal: () => void;
}

export const HandleOpenMealContext = createContext(
  {} as HandleOpenMealContextData
);
