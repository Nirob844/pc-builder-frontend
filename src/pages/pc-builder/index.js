import { removeToBuilder, selectCategory } from "@/redux/features/builderSlice";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PcBuilder = () => {
  const [buildCompleted, setBuildCompleted] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const categories = [
    {
      title: "CPU",
      image: "/images/cpu.png",
      href: "/categories/cpu",
    },
    {
      title: "Motherboard",
      image: "/images/motherboard.png",
      href: "/categories/motherboard",
    },
    {
      title: "RAM",
      image: "/images/ram.png",
      href: "/categories/ram",
    },

    {
      title: "Monitor",
      image: "/images/monitor1.png",
      href: "/categories/monitor",
    },
    {
      title: "Power Supply Unit",
      image: "/images/power1.png",
      href: "/categories/power-supply",
    },
    {
      title: "Storage Device",
      image: "/images/storage.png",
      href: "/categories/storagedevice",
    },

    {
      title: "Others",
      image: "/images/others.png",
      href: "/categories/others",
    },
  ];

  const handleChooseClick = (redirectUri, title) => {
    router.push(redirectUri);
    dispatch(selectCategory(title));
  };

  const builderState = useSelector((state) => state.builder.selectedProducts);

  const showChoosedProduct = (category) => {
    if (category === "CPU") {
      return builderState["cpu"];
    } else if (category === "RAM") {
      return builderState["ram"];
    } else if (category === "Monitor") {
      return builderState["monitor"];
    } else if (category === "Motherboard") {
      return builderState["motherboard"];
    } else if (category === "Storage Device") {
      return builderState["storage"];
    } else if (category === "Power Supply Unit") {
      return builderState["powersupply"];
    } else if (category === "Others") {
      return builderState["others"];
    }
  };

  const handleCompleteBuild = () => {
    dispatch(
      removeToBuilder({
        cpu: null,
        ram: null,
        monitor: null,
        storage: null,
        motherboard: null,
        powersupply: null,
        others: null,
      })
    );
    setBuildCompleted(true); // Set the buildCompleted state to true
  };

  return (
    <div>
      <Head>
        <title>pc build</title>
      </Head>

      <div className="w-11/12 mx-auto pb-12 ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="md:text-2xl text-[16px] font-semibold mb-2">
              Choose Products
            </h1>
            <p className="md:text-[16px] text-[14px] mb-8">
              PC Builder - Build Your Dream PC!
            </p>
          </div>
          {Object.entries(builderState).every(
            ([key, value]) => key === "others" || value !== null
          ) ? (
            <button
              onClick={handleCompleteBuild}
              type="button"
              className="btn btn-success"
            >
              Complete Build
            </button>
          ) : (
            <button disabled type="button" className="btn btn-success">
              Complete Build
            </button>
          )}
          {buildCompleted && (
            <div className="alert alert-success " role="alert">
              Build Completed Successfully!
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 gap-8">
          {categories?.map((category, i) => (
            <div
              key={i}
              className="flex md:flex-row flex-col md:items-center items-start justify-between border border-gray-200 rounded-[10px] md:px-10 px-4 py-3"
            >
              <div className="md:w-[240px] w-auto">
                <div className="flex items-center mb-2">
                  <Image
                    src={category?.image}
                    height={50}
                    width={50}
                    alt="CategoryImage"
                  />
                  <h3 className="md:text-[18px] text-[16px] font-[500] ml-4">
                    {category?.title !== "Others"
                      ? category?.title
                      : `${category?.title} (Optional)`}
                  </h3>
                </div>
              </div>
              <div className="md:w-[300px] w-auto">
                {showChoosedProduct(category?.title) && (
                  <div className="flex items-center mt-2">
                    <img
                      src={showChoosedProduct(category?.title)?.image}
                      className="md:h-[60px] h-[150px] md:w-[60px] w-[150px] rounded-[16px]"
                    />
                    <div className="md:text-[16px] text-[14px] ml-[15px]">
                      <h3 className="font-[600]">
                        {showChoosedProduct(category?.title)?.productName}
                      </h3>
                      <h4>
                        Price: {showChoosedProduct(category?.title)?.price}
                      </h4>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() =>
                  handleChooseClick(category?.href, category?.title)
                }
                type="button"
                className={`btn ${
                  showChoosedProduct(category?.title)
                    ? "btn btn-primary"
                    : "btn btn-warning"
                } focus:outline-none`}
              >
                {showChoosedProduct(category?.title) ? "Change" : "Choose"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PcBuilder;
