import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const signupStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: 20,
  },

  // Header styles
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  skipButton: {
    padding: 8,
  },
  skipText: {
    color: "#666666",
    fontSize: 16,
  },

  // Typography
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2D2D2D",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 24,
  },
  helperText: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginTop: 8,
  },
  errorText: {
    color: "#FF3B30",
    fontSize: 14,
    marginBottom: 8,
  },

  // Input styles
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    padding: 16,
    fontSize: 16,
    marginBottom: 8,
  },
  inputContainer: {
    position: "relative",
    marginBottom: 16,
  },

  // Password input specific
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -12 }],
  },

  // Birthday input specific
  birthdayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  birthdayInput: {
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    padding: 16,
    fontSize: 16,
    textAlign: "center",
  },
  monthInput: {
    width: "30%",
  },
  dayInput: {
    width: "25%",
  },
  yearInput: {
    width: "35%",
  },

  // Button styles
  nextButton: {
    backgroundColor: "#2D2D2D",
    borderRadius: 25,
    padding: 16,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
  },
  nextButtonDisabled: {
    backgroundColor: "#CCCCCC",
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
