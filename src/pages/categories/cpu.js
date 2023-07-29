import Products from "@/components/UI/Products";

const Cpu = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h1>cpu...............</h1>
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
  console.log(data);
  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};
