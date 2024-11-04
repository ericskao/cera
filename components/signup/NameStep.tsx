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
import { NameStepProps } from "./signup.type";

const NameStep: React.FC<NameStepProps> = ({
  firstName,
  lastName,
  onUpdateName,
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
      </View>

      <View style={signupStyles.content}>
        <Text style={signupStyles.title}>It's so lovely to meet you.</Text>
        <Text style={signupStyles.subtitle}>What's your name?</Text>

        <View style={signupStyles.inputContainer}>
          <TextInput
            style={signupStyles.input}
            value={firstName}
            onChangeText={(text) => onUpdateName({ firstName: text })}
            placeholder="First Name"
            autoCapitalize="words"
          />
        </View>

        <View style={signupStyles.inputContainer}>
          <TextInput
            style={signupStyles.input}
            value={lastName}
            onChangeText={(text) => onUpdateName({ lastName: text })}
            placeholder="Last Name"
            autoCapitalize="words"
          />
        </View>

        <TouchableOpacity
          style={[
            signupStyles.nextButton,
            !(firstName && lastName) && signupStyles.nextButtonDisabled,
          ]}
          onPress={onNext}
          disabled={!(firstName && lastName)}
        >
          <Text style={signupStyles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NameStep;
