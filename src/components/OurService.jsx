import ServiceItem from "./ServiceItem";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
export default function OurService() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="max-w-[1120px] mx-auto py-10 px-3"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-medium text-primary">
            Discover Our Services
          </h1>
          <p>We are commited provide best services.</p>
        </div>
        <p className="text-primary font-medium border-b border-primary cursor-pointer">
          See All Service
        </p>
      </div>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceItem
          title="Sell A Property"
          icon={s1}
          description="Selling a property can be a stressful event at any time. When the property is rented, everyone should understand their rights and responsibilities."
        />
        <ServiceItem
          title="Buying A Property"
          icon={s2}
          buttonbg
          description="Buying a property can be a stressful event at any time. When the property is buy, everyone should understand their rights and responsibilities and target."
        />
        <ServiceItem
          title="Rent A Property"
          icon={s3}
          description="Residential property is property zoned specifically for living or dwelling for individuals or households; it may include standalone single-family dwellings to large, multi-unit apartment buildings."
        />
      </div>
    </div>
  );
}
