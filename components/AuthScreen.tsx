import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../types/stack.types";

type AuthScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Auth">;
};

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.headerContainer}>
          <Text style={styles.logo}>CERA</Text>
          <Text style={styles.tagline}>glaze inspiration & discovery</Text>
        </View>

        {/* Glaze Grid */}
        <View style={styles.glazeGrid}>
          {Array(16)
            .fill(0)
            .map((_, index) => (
              <View
                key={index}
                style={[
                  styles.glazeTile,
                  { backgroundColor: getRandomGlazeColor() },
                ]}
              />
            ))}
        </View>

        {/* Community Text */}
        <Text style={styles.communityText}>
          to & from the ceramist community
        </Text>

        {/* Auth Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.signUpButton]}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.signUpButtonText}>Sign-Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginButtonText}>Log-in</Text>
          </TouchableOpacity>
        </View>

        {/* Terms Text */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By tapping on "Get Started", you agree to our{"\n"}
            <Text style={styles.link}>Terms</Text> and{" "}
            <Text style={styles.link}>Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const getRandomGlazeColor = () => {
  const colors = [
    "rgba(139, 69, 19, 0.9)", // Dark brown
    "rgba(160, 82, 45, 0.9)", // Sienna
    "rgba(205, 133, 63, 0.9)", // Peru
    "rgba(210, 180, 140, 0.9)", // Tan
  ];
  return colors[Math.floor(Math.random() * colors.length)];
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
    paddingTop: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    fontSize: 48,
    fontWeight: "700",
    color: "#2D2D2D",
    marginBottom: 8,
    includeFontPadding: false,
    textAlign: "center",
  },
  tagline: {
    fontSize: 18,
    color: "#666666",
    textAlign: "center",
    includeFontPadding: false,
  },
  glazeGrid: {
    width: "100%",
    aspectRatio: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 32,
  },
  glazeTile: {
    width: "25%",
    height: undefined,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  communityText: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 30,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  signUpButton: {
    backgroundColor: "#2D2D2D",
  },
  loginButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#2D2D2D",
  },
  signUpButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  loginButtonText: {
    color: "#2D2D2D",
    fontSize: 16,
    fontWeight: "600",
  },
  termsContainer: {
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 20,
  },
  termsText: {
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
    lineHeight: 18,
  },
  link: {
    textDecorationLine: "underline",
  },
});

export default AuthScreen;
