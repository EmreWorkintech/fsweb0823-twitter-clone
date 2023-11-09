import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://6540a96145bedb25bfc247b4.mockapi.io/api/",
    headers: token
      ? {
          authorization: `Bearer ${token}`,
        }
      : {},
  });
};
