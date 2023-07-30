import CategoryCard from "./CategoriesCard";

const AllCategory = ({ allCategory }) => {
  return (
    <div className="mt-5">
      <h1 className="text-center text-2xl font-semibold mb-2">
        Category wise product
      </h1>
      <p className="text-center mb-8">Explore & build your Category!</p>
      <div className="col-span-9 grid lg:grid-cols-3 gap-5  sm:grid-cols-2 p-10 w-[80%] mx-auto">
        {allCategory.map((product) => (
          <CategoryCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
