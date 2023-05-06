import axios from "axios";
import { toast } from "sonner";

const useCoupon = async (email, nameProduct) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/generateCode",
      { email, nameProduct },
      { withCredentials: true }
    );
    return toast.success(response.data.message,{description:'Ve a tus cupones para Canjearlo'})
  } catch (e) {
    console.log(e);
  }
};

export default useCoupon;
