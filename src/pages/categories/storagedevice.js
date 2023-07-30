import AllCategory from "@/components/UI/AllCategory";
import Head from "next/head";

const StoreDevice = ({ products }) => {
  products;
  return (
    <div>
      <Head>
        <title>StoreDevice</title>
      </Head>
      <h1 className="mt-5 text-4xl font-bold text-center">StoreDevice</h1>
      <AllCategory allCategory={products} />
    </div>
  );
};

export default StoreDevice;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://pc-bulder-backend.vercel.app/categories?category=Storage Device`
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
