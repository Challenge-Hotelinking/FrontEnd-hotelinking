import { useSelector } from "react-redux";
import useCoupon from "../hooks/useCoupon";

const Card = ({
  name,
  description,
  img,
  discount,
  code,
  id,
  redeem,
  couponRedeemed,
}) => {
  const userLoged = useSelector((state) => state.user);

  return (
    <div className=" flex flex-col gap-[20px] min-w-full py-[30px] px-[20px] rounded max-w-[400px] shadow-[0_2px_16px_-10px_rgba(0,0,0)]">
      <div className="flex items-center gap-2 ">
        <img
          className="rounded-full w-[70px] h-[60px] object-cover"
          src={img}
          alt=""
        />
        <p className=" text-[13px] font-bold text-green-600 border border-green-600 px-[6px] py-[1px] rounded">
          {`${discount}% OFF`}
        </p>
      </div>
      <p className="font-bold">{name}</p>
      <div className="flex flex-col gap-5 border-t border-neutral-500 border-dashed  py-[10px]">
        <p>{description}</p>
        {code && <p className="text-center text-[20px]">{code?.code}</p>}
        {!code ? (
          <button
            onClick={() => useCoupon(userLoged.email, name)}
            className=" active:bg-black active:text-white cursor-pointer font-medium border border-black w-[140px] py-[5px] px-[10px] rounded-full"
          >
            Generar cupón
          </button>
        ) : (
          <button
          disabled={redeem}
            onClick={() => couponRedeemed(id, userLoged.id)}
            className={
              !redeem
                ? "text-white active:bg-black cursor-pointer font-medium bg-green-500 w-full py-[5px] px-[10px] rounded-full"
                : "text-white active:bg-black cursor-pointer font-medium bg-green-500 w-full py-[5px] px-[10px] rounded-full opacity-[0.5]"
            }
          >
            {redeem ? "Codigo canjeado" : "Canjear código"}
          </button>
        )}
      </div>
    </div>
  );
};
export default Card;
