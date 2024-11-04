export type RootStackParamList = {
  // Auth routes
  Auth: undefined;
  SignUp: undefined;
  SignUpForm: {
    type: "artist" | "studio";
  };
  Login: undefined;
  // Protected routes
  Home: undefined;
  Profile: undefined;
  // Add any other routes your app needs
};
