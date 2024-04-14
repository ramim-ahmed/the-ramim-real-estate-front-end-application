import imageOne from "../assets/w1.jpg";
import imageTwo from "../assets/w2.jpg";
export default function WhyChoose() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="bg-primary bg-opacity-5 p-20 mt-20"
    >
      <div className="max-w-[1120px] mx-auto grid grid-cols-12">
        <div className="lg:col-span-6 col-span-12">
          <div className="lg:pr-4">
            <h1 className="text-xl font-medium text-primary">
              Why Choose Us ?
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className=" mt-8 space-y-10">
              <div className="bg-gray-100 rounded flex h-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-8 h-8 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <div>
                  <h4 className="text-base font-medium">
                    Excellent Communication
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam, quidem?
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded flex h-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-8 h-8 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <div>
                  <h4 className="text-base font-medium">
                    Excellent Communication
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam, quidem?
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded flex h-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-8 h-8 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <div>
                  <h4 className="text-base font-medium">
                    Excellent Communication
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam, quidem?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 mt-10 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div className="bg-primary text-white p-16 rounded-md">
                <h1 className="text-xl font-medium">10,000+</h1>
                <p>Properties Sold</p>
              </div>
            </div>
            <div>
              <img className="h-full w-full rounded-md" src={imageOne} alt="" />
            </div>
          </div>
          <div className="w-full mt-4">
            <img
              className="w-full h-60 object-cover rounded-md"
              src={imageTwo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
