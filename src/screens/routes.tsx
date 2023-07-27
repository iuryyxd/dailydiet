import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home";
import { Statistics } from "./Statistics";
import { NewMeal } from "./NewMeal";

export type RootStackParamList = {
  Home: undefined;
  Statistics: undefined;
  NewMeal: undefined;
};

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
    </Stack.Navigator>
  );
}
