import AllCategory from "@/components/UI/AllCategory";

const Others = ({ products }) => {
  products;
  return (
    <div>
      <h1 className="mt-5 text-4xl font-bold text-center">Others</h1>
      <AllCategory allCategory={products} />
    </div>
  );
};

export default Others;

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:5000/categories?category=Others`);
  const data = await res.json();
  data;
  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};
