import React from "react";
import { View, ActivityIndicator } from "react-native";

import { useAuth } from "../contexts/auth";

import AuthRoutes from "../routes/auth.routes";
import AppRoutes from "../routes/app.routes";

import LottieView from "lottie-react-native";

const Routes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <LottieView source={require("../../assets/logo.json")} loop autoPlay />
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
