import { useNavigate } from "react-router-dom";
import UseAnimations from "react-useanimations";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import arrow from "react-useanimations/lib/arrowDown";
import useAllCoupons from "../../hooks/useAllCoupons";
import Card from "../../commons/Card";
import { toast } from "sonner";
import useChangeState from "../../hooks/useChangeState";
const Details = () => {
  const [productsWithCode, setProductsWithCode] = useState([]);
  const { id } = useSelector((state) => state.user);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await useAllCoupons(id);
      setProductsWithCode(data);
    };
    fetchData();
  }, []);

  const couponRedeemed = (id, idUser) => {
    useChangeState(id, idUser);
    toast.success("Codigo canjeado con éxito!!", {
      description: "Disfrute de su descuento",
    });
  };
  return (
    <div className="p-[15px]">
      <div className="bg-white">
        <UseAnimations
          className=" cursor-pointer rotate-[90deg]"
          onClick={() => navigate("/home")}
          size={45}
          animation={arrow}
        />
      </div>
      <div className="flex justify-center">
        {productsWithCode?.length > 0 ? (
          <div className="flex flex-col mt-[50px] gap-[30px] max-w-[400px]">
            {productsWithCode?.map(
              ({ id, name, img, discount, description, code }) => {
                return (
                  <Card
                    key={id}
                    name={name}
                    img={img}
                    discount={discount}
                    description={description}
                    code={code}
                    id={code?.id}
                    redeem={code?.redeem}
                    couponRedeemed={couponRedeemed}
                  />
                );
              }
            )}
          </div>
        ) : (
          <p className="text-center mt-[80%]">Ningun cupón generado</p>
        )}
      </div>
    </div>
  );
};

export default Details;
