import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useState } from "react";
import validateEmail from "../utils/validateEmail";
import useLogin from "./useLogin";
import { setUser } from "../state/user";
import useRegister from "./useRegister";

const useAuth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };
  //-----------LOGIN
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (email.length && password.length > 0) {
      if (!validateEmail(email)) {
        toast("⚠ Cuidado, datos incorrectos!!");
      } else {
        const user = await useLogin(email, password);
        if (user) {
          dispatch(setUser(user));
          navigate("/home");
        }
      }
    } else {
      toast.error("Todos los campos son obligatorios!!");
    }
  };

  //-----------REGISTER
  const handleRegiserSubmit = async (e) => {
    e.preventDefault();
    if (name.length && email.length && password.length > 0) {
      if (!validateEmail(email)) {
        toast("⚠ Cuidado, datos incorrectos!!");
      } else {
        const message = await useRegister(name, email, password);
        if (message) {
          navigate("/");
          toast.success(message);
        }
      }
    } else {
      toast.error("Todos los campos son obligatorios!!");
    }
  };

  return {
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleLoginSubmit,
    handleRegiserSubmit,
  };
};
export default useAuth;
