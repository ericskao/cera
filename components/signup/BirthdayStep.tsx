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
import { BirthdayStepProps } from "./signup.type";

const BirthdayStep: React.FC<BirthdayStepProps> = ({
  birthday,
  onUpdateBirthday,
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
        <Text style={signupStyles.title}>Just a few questions...</Text>
        <Text style={signupStyles.subtitle}>When is your birthday?</Text>

        <View style={signupStyles.birthdayContainer}>
          <TextInput
            style={[signupStyles.birthdayInput, signupStyles.monthInput]}
            value={birthday.month}
            onChangeText={(text) =>
              onUpdateBirthday({ ...birthday, month: text })
            }
            placeholder="MM"
            maxLength={3}
          />
          <TextInput
            style={[signupStyles.birthdayInput, signupStyles.dayInput]}
            value={birthday.day}
            onChangeText={(text) =>
              onUpdateBirthday({ ...birthday, day: text })
            }
            placeholder="DD"
            maxLength={2}
            keyboardType="number-pad"
          />
          <TextInput
            style={[signupStyles.birthdayInput, signupStyles.yearInput]}
            value={birthday.year}
            onChangeText={(text) =>
              onUpdateBirthday({ ...birthday, year: text })
            }
            placeholder="YYYY"
            maxLength={4}
            keyboardType="number-pad"
          />
        </View>

        <Text style={signupStyles.helperText}>
          This is to personalize your experience and will not be visible on your
          profile.
        </Text>

        {error ? <Text style={signupStyles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={[
            signupStyles.nextButton,
            !(birthday.month && birthday.day && birthday.year) &&
              signupStyles.nextButtonDisabled,
          ]}
          onPress={onNext}
          disabled={!(birthday.month && birthday.day && birthday.year)}
        >
          <Text style={signupStyles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default BirthdayStep;
