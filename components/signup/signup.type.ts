export interface StepProps {
  onBack?: () => void; // Optional for steps that allow going back
}

export interface PasswordStepProps extends StepProps {
  password: string;
  onUpdatePassword: (password: string) => void;
  onNext: () => void;
}

export interface NameStepProps extends StepProps {
  firstName: string;
  lastName: string;
  onUpdateName: (name: { firstName?: string; lastName?: string }) => void;
  onNext: () => void;
}

export interface UsernameStepProps extends StepProps {
  username: string;
  onUpdateUsername: (username: string) => void;
  onNext: () => void;
}

export interface BirthdayStepProps extends StepProps {
  birthday: {
    month: string;
    day: string;
    year: string;
  };
  onUpdateBirthday: (birthday: {
    month: string;
    day: string;
    year: string;
  }) => void;
  onNext: () => void;
}

export interface CityStepProps extends StepProps {
  city: string;
  onUpdateCity: (city: string) => void;
  onNext: () => void;
}
