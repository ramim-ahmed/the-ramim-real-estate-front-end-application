export default function AboutUs() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="2000"
      className="text-gray-600 body-font mt-20"
    >
      <div className="grid grid-cols-12 max-w-[1120px] mx-auto py-10 gap-6 px-3">
        <div className="mb-10 md:mb-0 lg:col-span-6 col-span-12">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.pexels.com/photos/280212/pexels-photo-280212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className=" lg:col-span-6 col-span-12 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="font-medium">ABOUT US</p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-4">
            We&rsquo;re on a Mission to Change View of RealEstate Field.
          </h1>
          <p className="mb-8 leading-relaxed">
            One of the fastest-growing real estate businesses in Bangladesh,
            with a fast growth pace, was established in 2016. A government
            agency responsible for coordinating city planners, property sell,
            propety buy.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none  rounded text-lg">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
