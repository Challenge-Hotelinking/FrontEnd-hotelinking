import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const SideNav = ({ open }) => {
  const { id, name, email } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <nav
      className={
        open
          ? "gap-20 flex flex-col items-center pt-[50px] h-screen w-[70%] bg-white z-10 absolute duration-[0.7s] shadow-[0px_150px_200px_0_rgba(0,0,0)]"
          : "gap-20 flex flex-col items-center pt-[50px] h-screen w-[70%] bg-white z-10 absolute translate-x-[-1000px] duration-[0.7s]"
      }
      
    >
      <div className="flex flex-col items-center gap-2">
        {id && (
          <span className=" uppercase bg-[#fc1323] text-white rounded-full py-[7px] px-[15px]">
            {name[0]}
          </span>
        )}
        <p className="font-medium">{email}</p>
      </div>
      <div className="cursor-pointer flex items-center gap-2 border border-black py-[5px] px-[10px] rounded-full active:bg-black active:text-white">
        <img
          className="w-[35px]"
          src="https://www.svgrepo.com/download/301680/coupon.svg"
          alt="cupon"
        />
        <p
          onClick={() => navigate("/details")}
          className="font-bold text-[14px]"
        >
          Mis Cupones
        </p>
      </div>
    </nav>
  );
};
export default SideNav;
