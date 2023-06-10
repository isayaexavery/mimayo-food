import Food from "@/components/Food";
import HeadLinesCards from "@/components/HeadLinesCards";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1640px] mx-auto p-4">
        <div></div>
        <div className="max-h-[500px] relative">
          <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex-col justify-center ">
            <h1 className="px-4 text-4xl sm:text-5xl lg:text-7xl font-bold">
              The <span className="text-orange-500"> Best</span>
            </h1>
            <h1 className="px-4 text-4xl sm:text-5xl lg:text-7xl font-bold">
              Foods <span className="text-orange-500">Foods</span>{" "}
            </h1>
          </div>
          <Image
            className="w-full max-h-[500px] object-cover "
            src="/food.jpg"
            alt="food"
            width={1640}
            height={200}
          />
        </div>
        <HeadLinesCards />
        <Food />
      </div>
    </div>
  );
}
