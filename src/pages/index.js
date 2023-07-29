import Products from "@/components/UI/Products";
import Head from "next/head";

const HomePage = ({ allProducts }) => {
  const Categories = [
    "CPU / Processor",
    "Motherboard",
    "RAM",
    "Power Supply Unit",
    "Storage Device",
    "Monitor",
    "Others",
  ];
  return (
    <div className="">
      <Head>
        <title>Pc-Builder</title>
        <meta
          name="description"
          content="This is pc builder  made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className={styles.homeContainer}>
        <div className="bg-white p-2 rounded">
          <h1 className="text-center text-4xl">Categories</h1>
          <div className="mt-2">
            {/* {Categories?.map((category, i) => {
              return (
                <div key={i} className="flex items-center mb-[8px]">
                  <input
                    onChange={() => setSelectCategory(category)}
                    className="h-[18px] w-[18px]"
                    id={category}
                    type="radio"
                    name="category"
                  />
                  <label className="text-[14px] ml-3" htmlFor={category}>
                    {category}
                  </label>
                </div>
              );
            })} 
            {Categories.map((category, i) => {
              return (
                <button className="btn btn-ghost w-full" key={i}>
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <h1>product</h1>
        </div>
      </div> */}
      <Products allProducts={allProducts} />
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products"); // --> json server
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allProducts: data.data,
    },
    revalidate: 10,
  };
};
