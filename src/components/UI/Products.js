import ProductCard from "./ProductCard";

const Products = ({ allProducts }) => {
  console.log(allProducts);
  return (
    <div>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {allProducts.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
