import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../types/stack.types";

type SignUpScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "SignUp">;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>CERA</Text>
        <Text style={styles.subtitle}>Sign Up for an account.</Text>

        <Text style={styles.question}>Which best describes you?</Text>

        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate("SignUpForm", { type: "artist" })}
        >
          <View style={[styles.optionBox, { backgroundColor: "#4A4A4A" }]}>
            <Text style={styles.optionText}>Artist</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate("SignUpForm", { type: "studio" })}
        >
          <View style={[styles.optionBox, { backgroundColor: "#8B4513" }]}>
            <Text style={styles.optionText}>Studio</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    fontSize: 48,
    fontWeight: "700",
    color: "#2D2D2D",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 60,
  },
  question: {
    fontSize: 18,
    color: "#666666",
    marginBottom: 10,
  },
  optionButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 14,
  },
  optionBox: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  optionText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "600",
  },
  loginLink: {
    position: "absolute",
    bottom: 40,
  },
  loginText: {
    fontSize: 16,
    color: "#666666",
    textDecorationLine: "underline",
  },
});

export default SignUpScreen;
