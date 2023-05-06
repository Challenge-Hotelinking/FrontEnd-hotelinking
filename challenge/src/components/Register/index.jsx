import React from "react";
import Form from "../Login/Form";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { handleNameChange, handleRegiserSubmit, handleEmailChange, handlePasswordChange } = useAuth();
  return (
    <div className="h-screen flex flex-col justify-evenly items-center bg-[#fc1323] p-[30px]">
      <h1 className="text-white font-bold text-[40px]">Registro</h1>
      <Form
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleRegiserSubmit}
      />
    </div>
  );
};

export default Register;
