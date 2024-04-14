export default function Statistic() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="2000"
      className="text-gray-600 body-font px-3"
    >
      <div className="max-w-[1120px] py-10 mx-auto">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 text-center gap-6">
          <div className="w-full">
            <div className="border-2 border-gray-100 px-4 py-6 rounded-lg">
              <h2 className="title-font font-bold text-4xl text-primary">
                20+
              </h2>
              <p className="leading-relaxed">Year In The Industry.</p>
            </div>
          </div>
          <div className="w-full">
            <div className="border-2 border-gray-100 px-4 py-6 rounded-lg">
              <h2 className="title-font font-bold text-4xl text-primary">
                90%
              </h2>
              <p className="leading-relaxed">Customer Satisfaction</p>
            </div>
          </div>
          <div className="w-full">
            <div className="border-2 border-gray-100 px-4 py-6 rounded-lg">
              <h2 className="title-font font-bold text-4xl text-primary">
                10K
              </h2>
              <p className="leading-relaxed">Properties Sold</p>
            </div>
          </div>
          <div className="w-full">
            <div className="border-2 border-gray-100 px-4 py-6 rounded-lg">
              <h2 className="title-font font-bold text-4xl text-primary">
                50+
              </h2>
              <p className="leading-relaxed">Country Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
