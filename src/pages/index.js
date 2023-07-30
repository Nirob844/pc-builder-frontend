import Banner from "@/components/UI/Banner";
import Categories from "@/components/UI/Categories";
import Products from "@/components/UI/Products";
import Head from "next/head";

const HomePage = ({ allProducts }) => {
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
      <Banner />
      <Products allProducts={allProducts} />
      <Categories />
    </div>
  );
};

export default HomePage;

export const shuffleArray = (array) => {
  const shuffledArray = array.slice(); // Create a copy of the original array.
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  const allProducts = data.data;

  // Shuffle the array of products to get a random order.
  const shuffledProducts = shuffleArray(allProducts);

  // Select the first 6 products from the shuffled array to get 6 random products.
  const randomProducts = shuffledProducts.slice(0, 6);
  randomProducts;
  return {
    props: {
      allProducts: randomProducts,
    },
    revalidate: 10,
  };
};
