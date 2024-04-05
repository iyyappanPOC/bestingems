import Image from "next/image";
import { ExploreArrow } from "@/components/utils/svgIcons";

interface Category {
  title: string;
  img: string;
}

interface CategoriesProps {
  data: Category[];
}

export default function Categories({ data }: CategoriesProps) {
  return (
    <div className="flex flex-wrap mt-5 p-5 gap-5 md:justify-around w-full">
      {data.map((d) => (
        <div
          className="flex flex-auto md:flex-initial flex-col w-48 group"
          key={d.title}
        >
          <div className="flex p-5 justify-center w-full h-full bg-[#F6F4F5]">
            <Image
              className="group-hover:scale-110"
              src={d.img}
              alt={d.title}
              width="200"
              height="230"
            />
          </div>
          <span className="font-thicccboi text-xl text-center p-3">
            {d.title}
          </span>
          <button className="font-thicccboi flex gap-2 items-center justify-center text-category-pink group-hover:scale-110">
            Explore{" "}
            <span className="flex align-middle">
              <ExploreArrow />
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}
