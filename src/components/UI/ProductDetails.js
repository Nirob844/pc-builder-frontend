import Head from "next/head";

const ProductDetails = ({ product }) => {
  const {
    productName,
    image,
    category,
    price,
    status,
    reviews,
    keyFeatures,
    description,
  } = product;

  return (
    <div className="my-10 flex flex-col md:flex-row max-w-7xl mx-auto items-center border-b border-gray-300 w-[80%]">
      <Head>
        <title>ProductDetails</title>
      </Head>
      <div className="mr-5 w-full md:w-[50%] h-[600px]">
        <img src={image} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="ml-5 w-full md:w-[50%] space-y-3">
        <h1 className="text-3xl font-semibold">{productName}</h1>
        <h3 className="mt-2 font-semibold text-blue-400">{category}</h3>
        <button className="btn btn-sm text-green-400"> {status}</button>
        <br />
        <button className="btn btn-sm text-red-400">{price}$</button>
        <p className="text-sm mt-2">Rating: {reviews?.rating} / 5</p>
        <p className="text-sm mt-2">Description: {description}</p>
        <div className="mt-3">
          <h3 className="font-semibold">Key Features:</h3>
          {Object.entries(keyFeatures).map(([key, value]) => (
            <p key={key}>{`${key}: ${value}`}</p>
          ))}
        </div>
        <div className="mt-3">
          <h3 className="font-semibold">Reviews:</h3>
          {reviews.map((review) => (
            <div key={review.id} className="mt-2">
              <p>User: {review.user}</p>
              <p>Rating: {review.rating} / 5</p>
              <p>Comment: {review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
