import { addToBuilder } from "@/redux/features/builderSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const CategoryCard = ({ product }) => {
  const { productName, category, price, status, reviews } = product;
  const router = useRouter();
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.builder.selectedCategory);

  const handleAddProduct = (product) => {
    if (product.category === "CPU / Processor") {
      dispatch(addToBuilder({ key: "cpu", data: product }));
      router.push("/pc-builder");
    } else if (product?.category === "RAM") {
      dispatch(addToBuilder({ key: "ram", data: product }));
      router.push("/pc-builder");
    } else if (product?.category === "Motherboard") {
      dispatch(addToBuilder({ key: "motherboard", data: product }));
      router.push("/pc-builder");
    } else if (product?.category === "Monitor") {
      dispatch(addToBuilder({ key: "monitor", data: product }));
      router.push("/pc-builder");
    } else if (product?.category === "Storage Device") {
      dispatch(addToBuilder({ key: "storage", data: product }));
      router.push("/pc-builder");
    } else if (product?.category === "Power Supply Unit") {
      dispatch(addToBuilder({ key: "powersupply", data: product }));
      router.push("/pc-builder");
    } else if (product?.category === "Others") {
      dispatch(addToBuilder({ key: "others", data: product }));
      router.push("/pc-builder");
    }
  };

  return (
    <div className="mb-10 rounded-2xl h-[580px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all">
      <Link href={`/product/${product._id}`} className="w-full">
        <img src={product?.image} alt="product" width={300} height={500} />
        <h1 className="text-xl font-semibold hover:underline">{productName}</h1>
      </Link>
      <h3 className="mt-2 font-semibold">{category}</h3>
      <p className="text-sm mt-2">Availability: {status}</p>
      <p className="text-sm mt-2">Price: {price}$</p>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Rating: {review.rating} / 5</p>
        </div>
      ))}

      {categoryState !== "" && (
        <div className="text-center mt-4">
          <button
            onClick={() => handleAddProduct(product)}
            className="mt-3 btn btn-neutral"
          >
            Add To Builder
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
