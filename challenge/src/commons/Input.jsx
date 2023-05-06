import React from "react";

const Input = ({ placeholder, type, handle }) => {
  return (
    <>
      <input
        onChange={handle}
        placeholder={placeholder}
        className="text-black font-bold rounded-[10px] py-[15px] px-[16px] w-full outline-none"
        type={type}
      />
    </>
  );
};

export default Input;
