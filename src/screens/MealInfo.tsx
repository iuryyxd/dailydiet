import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MealInfoProps } from "../@types/navigationProp";

import { PageHeader } from "../components/PageHeader";
import { MealTag } from "../components/MealTag";
import { Button } from "../components/Button";

import { Feather } from "@expo/vector-icons";
import { DeleteModal } from "../components/DeleteModal";
import dayjs from "dayjs";
import { useMeal } from "../hooks/useMeal";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function MealInfo({ route, navigation }: MealInfoProps) {
  const { meal } = route.params;
  const { meals, setMeals } = useMeal();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible((prev) => !prev);
  };

  const handleDeleteMeal = () => {
    const newMeals = meals.map((mealItem) => {
      mealItem.items = mealItem.items.filter((item) => item.id !== meal.id);
      return mealItem;
    });

    const newMealsFiltered = newMeals.filter(
      (mealItem) => mealItem.items.length > 0
    );

    setMeals(newMealsFiltered);
    AsyncStorage.setItem("meals", JSON.stringify(newMealsFiltered));
    toggleModalVisibility();
    navigation.goBack();
  };

  const handleEditMeal = () => {
    navigation.navigate("EditMeal", {
      meal: {
        id: meal.id,
        name: meal.name,
        description: meal.description,
        date: meal.date,
        time: meal.time,
        isOnDiet: meal.isOnDiet,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Refeição" />

      <DeleteModal
        toggleModalVisibility={toggleModalVisibility}
        handleDeleteMeal={handleDeleteMeal}
        modalVisible={modalVisible}
      />

      <View style={styles.main}>
        <View>
          <Text style={styles.title}>{meal.name}</Text>
          <Text style={styles.text}>{meal.description}</Text>
          <View style={styles.date}>
            <Text style={styles.dateTitle}>Data e hora</Text>
            <Text style={styles.text}>
              {dayjs(meal.date).format("DD/MM/YYYY")} às{" "}
              {dayjs(meal.time).format("HH:mm")}
            </Text>
          </View>

          <MealTag isOnDiet={meal.isOnDiet} />
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            title="Editar refeição"
            type="Filled"
            icon={<Feather name="edit-3" size={18} color="#ffffff" />}
            onPress={handleEditMeal}
          />
          <Button
            title="Excluir refeição"
            type="Outlined"
            icon={<Feather name="trash-2" size={18} color="#1B1D1E" />}
            onPress={toggleModalVisibility}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F0DB",
    position: "relative",
    paddingTop: 14,
  },

  main: {
    flex: 2,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 40,
    marginTop: 24,
    position: "relative",
  },

  title: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 20,
    color: "#1B1D1E",
    marginBottom: 8,
  },

  text: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    color: "#333538",
    marginBottom: 24,
  },

  date: {
    gap: 8,
  },

  dateTitle: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    color: "#1B1D1E",
  },

  buttonsContainer: {
    gap: 8,
  },
});
