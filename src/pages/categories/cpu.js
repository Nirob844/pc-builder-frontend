import AllCategory from "@/components/UI/AllCategory";
import Head from "next/head";

const Cpu = ({ products }) => {
  products;
  return (
    <div>
      <Head>
        <title>Cpu</title>
      </Head>
      <h1 className="mt-5 text-4xl font-bold text-center">Cpu</h1>
      <AllCategory allCategory={products} />
    </div>
  );
};

export default Cpu;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://pc-bulder-backend.vercel.app/categories?category=CPU%20/%20Processor`
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
