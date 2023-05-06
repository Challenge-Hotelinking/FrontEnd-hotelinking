import axios from "axios";
import { toast } from "sonner";

const useRegister = async (name, email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/register",
      {
        name,
        email,
        password,
      },
      { withCredentials: true }
    );
    return response.data.message
  } catch (e) {
    console.log(e);
  }
};

export default useRegister;
