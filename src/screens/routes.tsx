import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../@types/navigationProp";

import { Home } from "./Home";
import { Statistics } from "./Statistics";
import { NewMeal } from "./NewMeal";
import { Feedback } from "./Feedback";

const Stack = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="NewMeal" component={NewMeal} />
      <Stack.Screen name="Feedback" component={Feedback} />
    </Stack.Navigator>
  );
}
