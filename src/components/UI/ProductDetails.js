const ProductDetails = ({ product }) => {
  const { productName, image, category, price, status, reviews, description } =
    product;
  return (
    <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 w-[80%]">
      <div className="w-[50%]">
        <img src={image} alt="" />
      </div>
      <div className="w-[50%] space-y-3">
        <h1 className="text-3xl font-semibold">{productName}</h1>
        <h3 className="mt-2 font-semibold">Category: {category}</h3>
        <p className="text-sm mt-2">Availability: {status}</p>
        <p className="text-sm mt-2">Price: {price}$</p>
        <p className="text-sm mt-2">Rating: {reviews?.rating}5</p>
        <p className="text-sm mt-2">Description: {description}5</p>
        <button className=" mt-3 btn btn-neutral">Pc-Build</button>
      </div>
    </div>
  );
};

export default ProductDetails;
