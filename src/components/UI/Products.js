import ProductCard from "./ProductCard";

const Products = ({ allProducts }) => {
  console.log(allProducts);
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-2">
        Featured Products
      </h1>
      <p className="text-center mb-8">Explore & build your Products!</p>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {allProducts.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
