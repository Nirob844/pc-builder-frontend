import Products from "@/components/UI/Products";

const Cpu = ({ products }) => {
  products;
  return (
    <div>
      <h1 className="mt-5 text-4xl font-bold text-center">Cpu</h1>
      <Products allProducts={products} />
    </div>
  );
};

export default Cpu;

export const getStaticProps = async () => {
  const res = await fetch(
    `http://localhost:5000/categories?category=CPU%20/%20Processor`
  );
  const data = await res.json();
  data;
  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};
