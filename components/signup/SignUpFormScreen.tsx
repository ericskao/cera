import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import { supabase } from "../../lib/supabase";
import { RootStackParamList } from "../../types/stack.types";
import BirthdayStep from "./BirthdayStep";
import CityStep from "./CityStep";
import EmailStep from "./EmailStep";
import NameStep from "./NameStep";
import PasswordStep from "./PasswordStep";
import UsernameStep from "./UsernameStep";

export interface SignUpFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  birthday: {
    month: string;
    day: string;
    year: string;
  };
  city: string;
  userType: "artist" | "studio";
}

type SignUpFormScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SignUpForm"
>;

// This interface defines all the data we're collecting
interface SignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  birthday: {
    month: string;
    day: string;
    year: string;
  };
  city: string;
  userType: "artist" | "studio";
}

const SignUpFormScreen: React.FC<SignUpFormScreenProps> = ({
  navigation,
  route,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [signUpData, setSignUpData] = useState<SignUpData>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    username: "",
    birthday: {
      month: "",
      day: "",
      year: "",
    },
    city: "",
    userType: route.params.type,
  });

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((current) => current - 1);
    } else {
      navigation.goBack();
    }
  };

  const handleNext = () => {
    setCurrentStep((current) => current + 1);
  };

  const handleSignUp = async () => {
    try {
      // First create the auth user
      const { error: authError } = await supabase.auth.signUp({
        email: signUpData.email,
        password: signUpData.password,
      });

      if (authError) throw authError;

      // Then create the profile
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          first_name: signUpData.firstName,
          last_name: signUpData.lastName,
          username: signUpData.username,
          birth_date: `${signUpData.birthday.year}-${signUpData.birthday.month}-${signUpData.birthday.day}`,
          city: signUpData.city,
          user_type: signUpData.userType,
        },
      ]);

      if (profileError) throw profileError;

      // Success! The session listener in App.tsx will handle the navigation
    } catch (error) {
      Alert.alert("Error", (error as Error).message);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <EmailStep
            email={signUpData.email}
            onUpdateEmail={(email) =>
              setSignUpData((prev) => ({ ...prev, email }))
            }
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 1:
        return (
          <PasswordStep
            password={signUpData.password}
            onUpdatePassword={(password) =>
              setSignUpData((prev) => ({ ...prev, password }))
            }
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <NameStep
            firstName={signUpData.firstName}
            lastName={signUpData.lastName}
            onUpdateName={(name) =>
              setSignUpData((prev) => ({ ...prev, ...name }))
            }
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <UsernameStep
            username={signUpData.username}
            onUpdateUsername={(username) =>
              setSignUpData((prev) => ({ ...prev, username }))
            }
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <BirthdayStep
            birthday={signUpData.birthday}
            onUpdateBirthday={(birthday) =>
              setSignUpData((prev) => ({ ...prev, birthday }))
            }
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 5:
        return (
          <CityStep
            city={signUpData.city}
            onUpdateCity={(city) =>
              setSignUpData((prev) => ({ ...prev, city }))
            }
            onNext={handleSignUp}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return <View style={{ flex: 1 }}>{renderStep()}</View>;
};

export default SignUpFormScreen;
