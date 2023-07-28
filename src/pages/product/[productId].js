import ProductDetails from "@/components/UI/ProductDetails";

const ProductPage = ({ product }) => {
  console.log(product);
  return (
    <div>
      <h1>product page</h1>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const paths = products.data.map((product) => ({
    params: { productId: product._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(params);
  const res = await fetch(`http://localhost:5000/product/${params.productId}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      product: data.data,
    },
  };
};
