import Image from "next/image";
import Link from "next/link";

const Categories = () => {
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

  return (
    <div className="mb-10 w-11/12 mx-auto py-12 ">
      <h1 className="text-center text-2xl font-semibold mb-2">
        Featured Category
      </h1>
      <p className="text-center mb-8">
        Get Your Desired Product from Featured Category!
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 justify-between">
        {categories?.map((category, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-[10px] overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all"
          >
            <Link href={category?.href}>
              <div className="text-center">
                <Image
                  src={category?.image}
                  width={100}
                  height={100}
                  alt="card image"
                  className="mx-auto pt-4"
                />
                <p className="text-center mt-3 text-sm font-medium">
                  {category?.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
