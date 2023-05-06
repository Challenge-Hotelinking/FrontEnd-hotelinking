import axios from "axios";
import React from "react";
import { toast } from "sonner";

const useLogin = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/login",
      { email, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    toast.error(error.response.data.error);
  }
};

export default useLogin;
