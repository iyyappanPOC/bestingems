import Banner from "@/components/homepage/banner/Banner";
import Services from "@/components/homepage/banner/Services";
import Categories from "@/components/homepage/categories/Categories";
import CategoryDetails from "@/components/homepage/categories/CategoryDetails";
import { categories, categoryList, services, topPicks } from "./constants";
import TopPicks from "@/components/homepage/categories/TopPicks";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services data={services} />
      <hr className="bg-gray-300 h-0.5" />
      <Categories data={categories} />
      <hr className="m-auto bg-gray-300 w-11/12 h-0.5" />
      <TopPicks data={topPicks} />
      {categoryList.map((ctg) => (
        <CategoryDetails data={ctg} key={ctg.title} />
      ))}
    </div>
  );
}
