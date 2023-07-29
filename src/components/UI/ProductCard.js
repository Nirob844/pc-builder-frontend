import Link from "next/link";

const ProductCard = ({ product }) => {
  const { productName, category, price, status, reviews } = product;

  return (
    <div className="mb-10 rounded-2xl h-[580px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all">
      <Link href={`/product/${product._id}`} className="w-full">
        <img src={product?.image} alt="product" width={300} height={500} />
        <h1 className="text-xl font-semibold">{productName}</h1>
      </Link>
      <h3 className="mt-2 font-semibold">{category}</h3>
      <p className="text-sm mt-2">Availability: {status}</p>
      <p className="text-sm mt-2">Price: {price}$</p>
      <p className="text-sm mt-2">Rating: {reviews?.rating}5</p>
      <button className=" mt-3 btn btn-neutral">Add To Build</button>
    </div>
  );
};

export default ProductCard;
