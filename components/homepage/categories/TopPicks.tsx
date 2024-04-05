import Card from "@/components/card/Card";
import { LeftArrow, RightArrow } from "./Arrows";
import Image from "next/image";

interface Product {
  code: string;
  name: string;
  price: string;
  actualPrice: string;
  offer: string;
  img: string;
}

interface TopPicks {
  title: string;
  desc: string;
  products: Product[];
}

interface TopPicksProps {
  data: TopPicks;
}

export default function TopPicks({ data }: TopPicksProps) {
  const { title, desc, products } = data;

  return (
    <div className="relative flex flex-col w-full">
      <div className="group/ctg flex flex-col mt-10 items-center">
        <div className="text-[38px] px-5 font-thicccboi font-semibold text-center">
          {title}
        </div>
        <div className="mt-2 w-full px-5 md:w-1/2 text-xl font-thicccboi font-medium text-center text-[#6F6F79]">
          {desc}
        </div>

        <div className="flex flex-col w-11/12 mt-7 lg:flex-row">
          <div className="relative flex px-5 md:w-11/12 lg:w-[38%] h-[396px] m-auto justify-center">
            <div className="absolute flex flex-col gap-3 text-white z-50 top-48 left-10 sm:left-44 md:left-52 lg:top-5 lg:left-10 text-center md:text-left">
              <span className="font-beVietnam text-3xl capitalize font-semibold	w-72">
                Discount on all Gemstones
              </span>
              <span className="font-gantari text-base font-normal">
                Get 10% Discount on All the Gemstones
              </span>
            </div>
            <Image
              className="rounded-xl scale-x-[-1]"
              src="/images/topPicks.png"
              alt="product"
              width="800"
              height="150"
            />
          </div>
          <div className="flex w-11/12 lg:w-[62%] mt-3 overflow-x-scroll  overscroll-auto">
            <LeftArrow />
            <RightArrow />
            <div className="flex flex-auto gap-5 p-5">
              {products.map((product) => (
                <Card data={product} key={product.code} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-16 mx-auto bg-gray-300 w-11/12 h-0.5" />
    </div>
  );
}
