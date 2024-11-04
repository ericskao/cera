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

interface EmailStepProps {
  email: string;
  onUpdateEmail: (email: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const EmailStep: React.FC<EmailStepProps> = ({
  email,
  onUpdateEmail,
  onNext,
  onBack,
}) => {
  const [error, setError] = useState("");

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
        <Text style={signupStyles.title}>Let's get you started.</Text>
        <Text style={signupStyles.subtitle}>What's your email?</Text>

        <TextInput
          style={signupStyles.input}
          value={email}
          onChangeText={(text) => {
            onUpdateEmail(text);
            setError("");
          }}
          placeholder="enter email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />

        {error ? <Text style={signupStyles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={[
            signupStyles.nextButton,
            !email && signupStyles.nextButtonDisabled,
          ]}
          onPress={onNext}
          disabled={!email}
        >
          <Text style={signupStyles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EmailStep;
