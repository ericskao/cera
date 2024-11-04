import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { signupStyles } from "../../styles/signupStyles";
import { UsernameStepProps } from "./signup.type";

const UsernameStep: React.FC<UsernameStepProps> = ({
  username,
  onUpdateUsername,
  onNext,
  onBack,
}) => {
  const [error, setError] = useState("");

  const validateAndProceed = async () => {
    if (username.length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }
    onNext();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={signupStyles.container}
    >
      <View style={signupStyles.header}>
        <TouchableOpacity style={signupStyles.backButton} onPress={onBack}>
          <Ionicons name="chevron-back" size={24} color="#2D2D2D" />
        </TouchableOpacity>
      </View>

      <View style={signupStyles.content}>
        <Text style={signupStyles.title}>
          We're excited for you to join us.
        </Text>
        <Text style={signupStyles.subtitle}>Create a username.</Text>

        <View style={signupStyles.inputContainer}>
          <TextInput
            style={signupStyles.input}
            value={username}
            onChangeText={(text) => {
              onUpdateUsername(text.toLowerCase());
              setError("");
            }}
            placeholder="@username"
            autoCapitalize="none"
          />
        </View>

        {error ? <Text style={signupStyles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={[
            signupStyles.nextButton,
            !username && signupStyles.nextButtonDisabled,
          ]}
          onPress={validateAndProceed}
          disabled={!username}
        >
          <Text style={signupStyles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default UsernameStep;
