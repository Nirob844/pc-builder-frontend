import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <div className="mx-auto my-20">
        <div className="flex justify-between items-center ">
          <div className="w-1/2 sm:ml-5 lg:ml-20">
            <h1 className="text-6xl font-black  mb-2">
              PC-Stall <br />
            </h1>

            <div className=" mt-10">
              <p className="text-4xl my-2">Build your dream PC</p>
              <p className="text-xl my-2">
                Choose the best components and create your custom PC.
              </p>
              <p>
                Leading Computer, Laptop & Gaming PC Retail & Online Shop in
                Bangladesh
              </p>
            </div>
            <Link href="/pc-builder">
              <button className="mt-5 btn btn-outline">Pc-Builder</button>
            </Link>
          </div>
          <div className="w-1/2">
            <img
              className=" w-[90%] h-[300px] rounded-[14px]"
              src="https://i.ytimg.com/vi/QfwEF6whnnQ/maxresdefault.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
