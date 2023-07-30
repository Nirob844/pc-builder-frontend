import AllCategory from "@/components/UI/AllCategory";
import Head from "next/head";

const PowerSupply = ({ products }) => {
  products;
  return (
    <div>
      <Head>
        <title>PowerSupply</title>
      </Head>
      <h1 className="mt-5 text-4xl font-bold text-center">PowerSupply</h1>
      <AllCategory allCategory={products} />
    </div>
  );
};

export default PowerSupply;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://pc-bulder-backend.vercel.app/categories?category=Power Supply Unit`
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
