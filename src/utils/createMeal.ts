import dayjs from "dayjs";
import { randomUUID } from "expo-crypto";
import { DataFormHookType, mealsType } from "../@types/meals";

export const existsMealsWithTheSameDate = (meals: mealsType[], date: Date) => {
  return meals.some((meal) => {
    return dayjs(meal.date).isSame(dayjs(date), "day");
  });
};

export const createMeal = (meals: mealsType[], meal: DataFormHookType) => {
  if (existsMealsWithTheSameDate(meals, meal.date)) {
    const newMeals = meals.map((item) => {
      if (dayjs(meal.date).isSame(dayjs(item.date), "day")) {
        item.items = [
          {
            id: randomUUID(),
            date: meal.date,
            time: meal.time,
            description: meal.description,
            isOnDiet: meal.isOnDiet,
            name: meal.name,
          },
          ...item.items,
        ];
      }

      return item;
    });

    return newMeals;
  } else {
    const newMeal = {
      date: meal.date,
      items: [
        {
          id: randomUUID(),
          date: meal.date,
          time: meal.time,
          description: meal.description,
          isOnDiet: meal.isOnDiet,
          name: meal.name,
        },
      ],
    };

    const newMeals = [...meals, newMeal];
    newMeals.sort((a, b) => (dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1));

    return newMeals;
  }
};
