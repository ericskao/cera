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

interface PasswordStepProps {
  password: string;
  onUpdatePassword: (password: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const PasswordStep: React.FC<PasswordStepProps> = ({
  password,
  onUpdatePassword,
  onNext,
  onBack,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const validateAndProceed = () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
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
        <TouchableOpacity style={signupStyles.backButton}>
          <Ionicons
            name="chevron-back"
            size={24}
            onPress={onBack}
            color="#2D2D2D"
          />
        </TouchableOpacity>
      </View>

      <View style={signupStyles.content}>
        <Text style={signupStyles.title}>Let's get you started.</Text>
        <Text style={signupStyles.subtitle}>Now, set a password</Text>

        <View style={signupStyles.passwordContainer}>
          <TextInput
            style={signupStyles.input}
            value={password}
            onChangeText={(text) => {
              onUpdatePassword(text);
              setError("");
            }}
            placeholder="8 characters or more"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={signupStyles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="#666666"
            />
          </TouchableOpacity>
        </View>

        {error ? <Text style={signupStyles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={[
            signupStyles.nextButton,
            !password && signupStyles.nextButtonDisabled,
          ]}
          onPress={validateAndProceed}
          disabled={!password}
        >
          <Text style={signupStyles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PasswordStep;
