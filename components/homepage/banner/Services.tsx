import Image from "next/image";

interface Service {
  title: string;
  subTitle: string;
  img: string;
}

interface ServiceProps {
  data: Service[];
}

export default function Services({ data }: ServiceProps) {
  return (
    <div className="flex flex-wrap w-46 p-5 text-center">
      {data.map((d) => (
        <div
          className="lg:flex flex-auto w-2/5 p-2 md:w-1/4 md:items-center"
          key={d.title}
        >
          <div className="flex p-5 justify-center">
            <Image src={d.img} alt={d.title} width="80" height="80" />
          </div>
          <div className="flex flex-col justify-center md:text-left">
            <span className="text-md ">{d.title}</span>
            <span className="text-xs text-slate-500 ">{d.subTitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
