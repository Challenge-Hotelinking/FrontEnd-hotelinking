import { useEffect, useState } from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import Main from "./Main";
import useProducts from "../../hooks/useProducts";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await useProducts();
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <section className={open ? "overflow-hidden h-screen" : ""}>
      <Header open={open} setOpen={setOpen} />
      <SideNav open={open} />
      <Main products={products} />
    </section>
  );
};

export default Home;
