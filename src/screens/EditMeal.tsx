import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { EditMealProps } from "../@types/navigationProp";
import { DataFormHookType } from "../@types/meals";

import { PageHeader } from "../components/PageHeader";
import { Form } from "../components/Form";
import dayjs from "dayjs";
import { useMeal } from "../hooks/useMeal";
import { createMeal } from "../utils/createMeal";
import { getPercentageOnDiet } from "../utils/mealStatistics";

export function EditMeal({ route, navigation }: EditMealProps) {
  const { meals, setMeals } = useMeal();
  const { meal } = route.params;

  const totalPercentageOnDiet = getPercentageOnDiet(meals);

  const handleRegisterMeal = (data: DataFormHookType) => {
    if (dayjs(meal.date).isSame(data.date)) {
      const newMeals = meals.map((mealItem) => {
        mealItem.items.map((item) => {
          if (item.id === meal.id) {
            item.name = data.name;
            item.description = data.description;
            item.date = data.date;
            item.time = data.time;
            item.isOnDiet = data.isOnDiet;
          }

          return item;
        });

        return mealItem;
      });

      setMeals(newMeals);
    } else {
      const newMeals = meals.map((mealItem) => {
        mealItem.items = mealItem.items.filter((item) => item.id !== meal.id);
        return mealItem;
      });

      const newMealsFiltered = newMeals.filter(
        (mealItem) => mealItem.items.length > 0
      );

      setMeals(createMeal(newMealsFiltered, data));
    }

    navigation.navigate("Feedback", {
      isOnDiet: data.isOnDiet,
    });
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: totalPercentageOnDiet >= 50 ? "#E5F0DB" : "#F4E6E7",
        },
      ]}
    >
      <PageHeader title="Editar refeição" />
      <Form
        buttonLabel="Salvar alterações"
        onRegisterMeal={handleRegisterMeal}
        mealData={meal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingTop: 14,
  },
});
