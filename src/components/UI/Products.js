import ProductCard from "./ProductCard";

const Products = ({ allProducts }) => {
  return (
    <div className="mt-5">
      <h1 className="text-center text-2xl font-semibold mb-2">
        Featured Products
      </h1>
      <p className="text-center ">Check & Get Your Desired Product!</p>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {allProducts.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
