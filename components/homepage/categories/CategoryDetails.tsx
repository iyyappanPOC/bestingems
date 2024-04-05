import Card from "@/components/card/Card";
import { ButtonArrow, LeftArrow, RightArrow } from "./Arrows";

interface Product {
  code: string;
  name: string;
  price: string;
  actualPrice: string;
  offer: string;
  img: string;
}

interface CategoryDetails {
  title: string;
  desc: string;
  buttonDesc: string;
  products: Product[];
}

interface CategoryDetailsProps {
  data: CategoryDetails;
}

export default function CategoryDetails({ data }: CategoryDetailsProps) {
  const { title, desc, buttonDesc, products } = data;

  return (
    <div className="relative flex flex-col w-full">
      <div className="group/ctg flex flex-col mt-10 items-center">
        <div className="text-[38px] px-5 font-thicccboi font-semibold text-center">
          {title}
        </div>
        <div className="mt-2 w-full px-5 md:w-1/2 text-xl font-thicccboi font-medium text-center text-[#6F6F79]">
          {desc}
        </div>
        <div className="flex w-11/12 mt-3 overflow-x-scroll lg:overflow-x-hidden overscroll-auto">
          <LeftArrow />
          <RightArrow />
          <div className="flex flex-auto gap-5 p-5">
            {products.map((product) => (
              <Card data={product} key={product.code} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <div className="cursor-pointer flex gap-3 items-center justify-center w-11/12 md:w-3/5 border px-16 sm:px-30 py-4 text-xl font-thicccboi font-medium">
          {buttonDesc}
          <ButtonArrow />
        </div>
      </div>
      <hr className="mt-16 mx-auto bg-gray-300 w-11/12 h-0.5" />
    </div>
  );
}
