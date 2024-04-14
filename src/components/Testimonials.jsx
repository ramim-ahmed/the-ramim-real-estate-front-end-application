import imageOne from "../assets/r1.jpg";
import imageTwo from "../assets/r2.jpg";
export default function Testimonials() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="max-w-[1120px] mx-auto my-20 px-3"
    >
      <div>
        <h1 className="text-xl font-medium title-font text-primary">
          Testimonials
        </h1>
        <p>Read our client feedback that the result.</p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10">
        <div className="w-full">
          <div className="h-full bg-gray-100 p-8 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="block w-5 h-5 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>
            <p className="leading-relaxed mb-6 text-gray-700">
              I recently sold a house with THE RAMIM - REAL ESTATE and while
              this can be a very stressful process, I felt 110% confident by
              partnering with THE RAMIM - REAL ESTATE. He was candid, provided
              great feedback, helped explain clearly all details and managed the
              actual sale negotiation brilliantly. In addition, he was extremely
              responsive to every one of my questions, no matter how small. As I
              move forward to now BUY my next house, I am extremely certain THE
              RAMIM - REAL ESTATE will be the right partner to help me navigate
              this process.
            </p>
            <a className="inline-flex items-center">
              <img
                alt="testimonial"
                src={imageOne}
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  Holden Caulfield
                </span>
                <span className="text-gray-500 text-sm">Navana Ltd</span>
              </span>
            </a>
          </div>
        </div>
        <div className="w-full">
          <div className="h-full bg-gray-100 p-8 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="block w-5 h-5 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>
            <p className="leading-relaxed mb-6 text-gray-700">
              My wife and I had a dream of downsizing from our house in Cape
              Elizabeth into a small condo closer to where we work and play in
              Portland. THE RAMIM - REAL ESTATE and his skilled team helped make
              that dream a reality. The sale went smoothly, and we just closed
              on an ideal new place we&rsquo;re excited to call home. Nobody
              knows Portland and the peninsula better than THE RAMIM - REAL
              ESTATE. He really listens to clients and goes the extra mile with
              customer service, too.
            </p>
            <a className="inline-flex items-center">
              <img
                alt="testimonial"
                src={imageTwo}
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  Alper Kamu
                </span>
                <span className="text-gray-500 text-sm">Concord Ltd</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
