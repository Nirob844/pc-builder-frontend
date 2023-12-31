import ProductDetails from "@/components/UI/ProductDetails";

const ProductPage = ({ product }) => {
  product;
  return (
    <div>
      <h1>product page</h1>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-bulder-backend.vercel.app/products");
  const products = await res.json();

  const paths = products.data.map((product) => ({
    params: { productId: product._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  params;
  const res = await fetch(
    `https://pc-bulder-backend.vercel.app/product/${params.productId}`
  );
  const data = await res.json();
  data;
  return {
    props: {
      product: data.data,
    },
  };
};
