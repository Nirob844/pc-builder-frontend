import Products from "@/components/UI/Products";

const MotherBoard = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h1 className="mt-5 text-4xl font-bold text-center">MotherBoard</h1>
      <Products allProducts={products} />
    </div>
  );
};

export default MotherBoard;

export const getStaticProps = async () => {
  const res = await fetch(
    `http://localhost:5000/categories?category=Motherboard`
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
