import axios from "axios";
import { useSelector } from "react-redux";

export default function useAxiosConfig() {
  const URL = "http://localhost:8080/api";

  const AUTH_TOKEN =
    useSelector((state) => state.authentication.token) ||
    JSON.parse(localStorage.getItem("token"));

  console.log(AUTH_TOKEN);

  axios.defaults.baseURL = URL;
  axios.defaults.headers.common["Authorization"] = AUTH_TOKEN
    ? `Bearer ${AUTH_TOKEN}`
    : "";
}
