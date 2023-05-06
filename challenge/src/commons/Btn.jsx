import React from "react";

const Btn = ({ name, handle }) => {
  return (
    <button
      onSubmit={handle}
      className="bg-[#fccc24] w-full py-[10px] px-[40px] rounded-[10px] mt-[30px] font-medium"
      type="submit"
    >
      {name}
    </button>
  );
};

export default Btn;
