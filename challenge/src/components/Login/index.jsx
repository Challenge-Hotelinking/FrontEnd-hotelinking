import { useNavigate } from "react-router-dom";
import Icon from "../../assets/icon.png";
import Form from "./Form";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const navigate = useNavigate();
  const { handleEmailChange, handlePasswordChange, handleLoginSubmit } = useAuth();
  return (
    <div className="h-screen flex flex-col justify-evenly items-center bg-[#fc1323] p-[30px]">
      <div className="flex justify-center items-center">
        <img src={Icon} alt="icono" />
        <h1 className="text-white font-bold text-[40px]">cuponeria</h1>
      </div>
      <Form
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleLoginSubmit}
      />
      <div className="flex flex-col justify-center items-center">
        <p className="text-white font-semibold opacity-[0.6]">
          No tienes una cuenta?
        </p>
        <p
          onClick={() => navigate("/register")}
          className="text-white font-semibold cursor-pointer"
        >
          Inscribirse
        </p>
      </div>
    </div>
  );
};

export default Login;
