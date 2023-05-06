import React from "react";
import { useLocation } from "react-router-dom";
import Input from "../../commons/Input";
import Btn from "../../commons/Btn";

const Form = ({
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
  handleNameChange,
}) => {
  const location = useLocation();
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center flex-col gap-5 w-full max-w-[400px]"
    >
      {location.pathname === "/register" && (
        <Input placeholder={"Nombre"} type={"text"} handle={handleNameChange} />
      )}
      <Input placeholder={"Email"} type={"email"} handle={handleEmailChange} />
      <Input
        placeholder={"Password"}
        type={"password"}
        handle={handlePasswordChange}
      />
      <Btn
        name={location.pathname === "/register" ? "Inscribirse" : "Acceder"}
        handle={handleSubmit}
      />
    </form>
  );
};

export default Form;
