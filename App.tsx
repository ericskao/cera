import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthScreen from "./components/AuthScreen";
import LoginScreen from "./components/LoginScreen";
import SignUpFormScreen from "./components/signup/SignUpFormScreen";
import SignUpScreen from "./components/SignUpScreen";
import { useAuth } from "./hooks/useAuth";
import { RootStackParamList } from "./types/stack.types";
// import SignUpScreen from "./screens/SignUpScreen";
// import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const { session, loading } = useAuth();

  // if (loading) {
  //   return <LoadingScreen />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUpForm" component={SignUpFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
