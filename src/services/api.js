import axios from "axios";

const api = axios.create({
  baseURL: "https://d880b98b-34dc-4424-91f3-5bd0eedc6abf.mock.pstmn.io",
});

const postLogin = async (email, senha) => {
  const response = await api.post("login", { email, senha });
  return response;
};

export { postLogin };
