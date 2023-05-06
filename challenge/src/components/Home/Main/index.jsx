import Card from "../../../commons/Card";
const Main = ({ products }) => {
  return (
    <main className="flex flex-col justify-center items-center py-[30px] px-[30px]">
      <h3 className="text-[18px] text-center font-semibold">
        Cupones de descuento en +2000 tiendas!
      </h3>
      <p className="text-[12px]">
        Los mejores cupones de descuentos para economizar!
      </p>
      <article className="flex flex-col gap-5 mt-[40px]">
        {products?.map(({ id, name, description, img, discount }) => {
          return (
            <Card
              key={id}
              name={name}
              description={description}
              img={img}
              discount={discount}
            />
          );
        })}
      </article>
    </main>
  );
};
export default Main;
