import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { signupStyles } from "../../styles/signupStyles";
import { CityStepProps } from "./signup.type";

const CityStep: React.FC<CityStepProps> = ({
  city,
  onUpdateCity,
  onNext,
  onBack,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={signupStyles.container}
    >
      <View style={signupStyles.header}>
        <TouchableOpacity style={signupStyles.backButton} onPress={onBack}>
          <Ionicons name="chevron-back" size={24} color="#2D2D2D" />
        </TouchableOpacity>
        <TouchableOpacity style={signupStyles.skipButton}>
          <Text style={signupStyles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={signupStyles.content}>
        <Text style={signupStyles.title}>Where are you joining from?</Text>
        <Text style={signupStyles.subtitle}>Select a city</Text>

        <View style={signupStyles.inputContainer}>
          <TextInput
            style={signupStyles.input}
            value={city}
            onChangeText={onUpdateCity}
            placeholder="enter city"
          />
        </View>

        <Text style={signupStyles.helperText}>
          This is to personalize your experience. You can change visibility
          settings in your profile.
        </Text>

        <TouchableOpacity
          style={[
            signupStyles.nextButton,
            !city && signupStyles.nextButtonDisabled,
          ]}
          onPress={onNext}
          disabled={!city}
        >
          <Text style={signupStyles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CityStep;
