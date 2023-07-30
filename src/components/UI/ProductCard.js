import Link from "next/link";

const ProductCard = ({ product }) => {
  const { productName, category, price, status, reviews } = product;
  return (
    <div className=" rounded-2xl h-[450px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all">
      <Link href={`/product/${product._id}`} className="w-full">
        <img
          className="w-[300px] h-[250px]"
          src={product?.image}
          alt="product"
        />
        <h1 className="mt-3 text-xl font-semibold hover:underline">
          {productName}
        </h1>
      </Link>
      <h3 className="text-blue-500 font-semibold">{category}</h3>
      <p className="text-sm mt-2 text-green-500"> {status}</p>
      <p className="text-sm mt-2 text-red-400"> {price}$</p>
      {reviews.map((review) => (
        <div key={review.id}>
          <p className="text-sky-700">Rating: {review.rating} / 5</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
