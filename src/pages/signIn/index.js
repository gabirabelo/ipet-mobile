import React, { useState } from "react";
import { StatusBar, View } from "react-native";
import { useAuth } from "../../contexts/auth";
import LottieView from "lottie-react-native";

import {
  Container,
  Input,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
  ErrorMessage,
  BoxAnimation,
  Box,
} from "./styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { signIn } = useAuth();

  function handleSign() {
    if (email.length === 0 || password.length === 0) {
      setError(true);
    } else signIn(email, password);
  }

  return (
    <Container>
      <BoxAnimation>
        <LottieView
          source={require("../../../assets/banner.json")}
          loop
          autoPlay
        />
      </BoxAnimation>

      <Box>
        <Input
          placeholder="Endereço de e-mail"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          value={password}
          required
          onChangeText={(text) => setPassword(text)}
        />
        {error && <ErrorMessage>Todos os campos são obrigátorios</ErrorMessage>}
        <Button>
          <ButtonText onPress={handleSign}>Entrar</ButtonText>
        </Button>
        <SignUpLink>
          <SignUpLinkText>Cadastre-se</SignUpLinkText>
        </SignUpLink>
      </Box>
    </Container>
  );
};

export default SignIn;
