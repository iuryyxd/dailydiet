import { mealsType } from "../@types/meals";

export const getPercentageOnDiet = (meals: mealsType[]) => {
  if (meals.length === 0) return 0;

  const totalMeals = meals.reduce((acc, curr) => acc + curr.items.length, 0);
  const totalOnDiet = meals.reduce((acc, curr) => {
    const onDiet = curr.items.filter((item) => item.isOnDiet);
    return acc + onDiet.length;
  }, 0);
  return Number(((totalOnDiet / totalMeals) * 100).toFixed(2));
};

export const getTotalMeals = (meals: mealsType[]) => {
  return meals.reduce((acc, curr) => acc + curr.items.length, 0);
};

export const getBestSequenceOnDiet = (meals: mealsType[]) => {
  if (meals.length === 0) return 0;

  const onDiet = meals.map((meal) => {
    const onDiet = meal.items.filter((item) => item.isOnDiet);
    return onDiet.length;
  });
  const maxOnDiet = Math.max(...onDiet);
  return maxOnDiet;
};

export const getMealsOnDiet = (meals: mealsType[]) => {
  if (meals.length === 0) return 0;

  const totalOnDiet = meals.reduce((acc, curr) => {
    const onDiet = curr.items.filter((item) => item.isOnDiet);
    return acc + onDiet.length;
  }, 0);

  return totalOnDiet;
};

export const getMealsOffDiet = (meals: mealsType[]) => {
  if (meals.length === 0) return 0;

  const totalOnDiet = meals.reduce((acc, curr) => {
    const onDiet = curr.items.filter((item) => !item.isOnDiet);
    return acc + onDiet.length;
  }, 0);

  return totalOnDiet;
};
