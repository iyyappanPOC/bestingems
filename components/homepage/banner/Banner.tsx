import Image from "next/image";
import { allura, inter, lato } from "@/components/utils/fontUtils";
import Timer from "../../Timer";
import { Ring } from "../../utils/svgIcons";

export default function Banner() {
  return (
    <div className="flex flex-col lg:flex lg:flex-row">
      <div className="order-2 flex w-full h-40 p-5 lg:flex-col lg:order-1 gap-5 items-center justify-center lg:w-3/12 lg:h-auto bg-[#E4E4E4]">
        <div className="h-36 lg:w-full lg:h-40">
          <Image
            className="w-auto h-full m-auto"
            src="/images/diamond-engagement-ring.png"
            alt="Diamond Engagement Ring"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col">
          <div className="gap-3 mb-3 text-center">
            <div className="flex flex-row gap-2 items-center justify-center">
              <Ring />
              <span>Engagement Rings</span>
            </div>
            <span className={`text-xs mt-2 ${lato.className}`}>
              Start the journey toward finding your perfect ring
            </span>
          </div>
          <Timer />
        </div>
      </div>

      <div className="order-1 flex flex-col w-full lg:order-2 lg:flex lg:flex-row lg:w-9/12 h-4/5 bg-gradient-to-r from-[#191511] to-[#282624]">
        <div className="order-2 flex justify-center sm:justify-center  mx-10 lg:mr-0 lg:w-3/6 lg:order-1 lg:items-end">
          <Image
            className="flex justify-center sm:w-auto lg:h-[90%]"
            src="/images/removal.png"
            alt="Girl"
            width="518"
            height="528"
          />
        </div>
        <div className="order-1 flex flex-col my-10 items-center lg:order-2 lg:gap-3 lg:items-start lg:justify-center text-white">
          <span className={`text-4xl sm:text-6xl ${allura.className}`}>
            Valentines Day
          </span>
          <span
            className={`text-center text-xs sm:text-sm lg:text-left font-light ${inter.className}`}
          >
            Enjoy the added benefit of obtaining free shipping <br />
            within the United States
          </span>
          <button
            className={`mt-2 w-36 border-2 border-white p-2 ${lato.className}`}
          >
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
}
