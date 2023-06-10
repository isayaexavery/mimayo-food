import Image from "next/image";
import React from "react";

const HeadLinesCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full p-4 bg-black/50 rounded-xl text-white">
          <p
            className="font-bold text-2xl px2
           "
          >
            Sun`s Out , BOGO`s out
          </p>
          <p className="pb-2">Through 8/26</p>
          <button className="border-white bg-white text-black my-2 bottom-4">
            Order Now
          </button>
        </div>
        <Image
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="/food.jpg"
          alt="head"
          width={400}
          height={200}
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p
            className="font-bold text-2xl px2
           p-4"
          >
            Sun`s Out , BOGO`s out
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 bottom-4">
            Order Now
          </button>
        </div>
        <Image
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="/food.jpg"
          width={400}
          alt="head"
          height={200}
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p
            className="font-bold text-2xl px2
           pt-4"
          >
            Sun`s Out , BOGO`s out
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 bottom-4">
            Order Now
          </button>
        </div>
        <Image
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="/food.jpg"
          alt="head"
          width={400}
          height={200}
        />
      </div>
    </div>
  );
};

export default HeadLinesCards;
