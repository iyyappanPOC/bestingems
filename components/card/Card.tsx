import Image from "next/image";
import Arrow from "./Arrow";
import View from "./View";
import Like from "./Like";

export default function Card({ data }: any) {
  const { code, name, price, actualPrice, offer, img } = data;
  return (
    <div className="flex flex-col gap-2 w-56 m-auto group">
      <div className="relative border border-slate-300 h-full">
        <Arrow />
        <Image
          src={img}
          alt="product"
          width="230"
          height="230"
          className="object-contain"
        />
        <div className="absolute flex bottom-4 right-0  gap-2 mr-3">
          <View />
          <Like />
        </div>
      </div>
      <span className="font-thicccboi text-xs font-light text-[#6F6F79]">
        {code}
      </span>
      <span className="font-thicccboi text-sm h-16">{name}</span>
      <div className="font-thicccboi flex gap-3 items-center">
        <span className="text-base">{price}</span>
        <span className="font-thicccboi font-light text-xs line-through text-[#666666]">
          {actualPrice}
        </span>
        <span className="text-category-pink text-sm">{offer}</span>
      </div>
      <button className="relative flex items-center justify-center font-thicccboi bg-[#252525] h-9 text-white text-sm rounded-sm hover:bg-category-pink group/btn">
        <span className="transition transform translate-x-0 ease-in group-hover/btn:visible group-hover/btn:-translate-x-2 mr-2">
          Add to Cart
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute w-4 h-4 transition transform delay-100 translate-x-10 ease-in-out invisible group-hover/btn:visible group-hover/btn:translate-x-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </button>
    </div>
  );
}
