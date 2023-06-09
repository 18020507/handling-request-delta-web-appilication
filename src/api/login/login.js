import { addAuthHeader, api } from "@/utils/api.util";

export const login = async (payload) => {
  const result = await api("post", "/api/v1/login", payload);
  if (result.success) {
    console.log(result.data.access_token)
    localStorage.setItem("access_token", result.data.access_token);
    console.log(localStorage.getItem("access_token"))
    addAuthHeader();
  }
  return result;
};

export const getUserDetail = async () => {
  const result = await api("get", "/api/v1/user_detail");

  return result;
};
