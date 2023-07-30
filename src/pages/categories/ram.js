import AllCategory from "@/components/UI/AllCategory";

const Ram = ({ products }) => {
  products;
  return (
    <div>
      <h1 className="mt-5 text-4xl font-bold text-center">Ram</h1>
      <AllCategory allCategory={products} />
    </div>
  );
};

export default Ram;

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:5000/categories?category=RAM`);
  const data = await res.json();
  data;
  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};
