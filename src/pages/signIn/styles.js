import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #f9f8e7;
  height: 100%;
  width: 100%;
  padding-top: 40px;
`;

const Box = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #eeac6d;
  width: 100%;
  height: 80%;
  border-top-right-radius: 80px;
`;

const BoxAnimation = styled.View`
  width: 200px;
  height: 20%;
  align-items: center;
  justify-content: center;
  background-color: #f9f8e7;
  margin-top: 20px;
`;

const Logo = styled.Image`
  height: 30%;
  width: 300px;
`;

const Input = styled.TextInput`
  padding-horizontal: 20px;
  padding-vertical: 15px;
  border-radius: 5px;
  background-color: #fff;
  align-self: stretch;
  margin-bottom: 15px;
  margin-horizontal: 20px;
  font-size: 16px;
`;

const ErrorMessage = styled.Text`
  text-align: center;
  color: #ce2029;
  font-size: 16px;
  margin-bottom: 15px;
  margin-horizontal: 20px;
`;

const Button = styled.TouchableHighlight`
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  align-self: stretch;
  margin: 15px;
  margin-horizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #eeac6d;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  margin-top: 20px;
`;

const SignUpLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
  BoxAnimation,
  Box,
};
