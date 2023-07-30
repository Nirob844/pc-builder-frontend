import Products from "@/components/UI/Products";

const AllProduct = ({ allProducts }) => {
  console.log(allProducts);
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold">All Products</h1>
      <Products allProducts={allProducts} />
    </div>
  );
};

export default AllProduct;

export const getStaticProps = async () => {
  const res = await fetch("https://pc-bulder-backend.vercel.app/products");
  const data = await res.json();
  return {
    props: {
      allProducts: data.data,
    },
    revalidate: 10,
  };
};
