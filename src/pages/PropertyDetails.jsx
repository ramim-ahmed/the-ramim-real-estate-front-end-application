import { Link, useLoaderData } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
import { MdBathtub } from "react-icons/md";
import { FaVectorSquare } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import bookSectionImage from "../assets/book_bg.jpg";
import { Helmet } from "react-helmet-async";
export default function PropertyDetails() {
  const data = useLoaderData();
  const {
    image,
    description,
    status,
    title,
    bed,
    bath,
    facilites,
    area,
    segment_name,
    price,
  } = data || {};
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="bg-[#F6F6FE]"
      >
        <div className="max-w-[1120px] mx-auto py-10">
          <div className="flex items-center space-x-1 text-primary px-3 lg:px-0">
            <MdOutlineArrowBack />
            <Link to="/">Go Back</Link>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-6 bg-white p-6 rounded-md">
            <div className="lg:col-span-8 col-span-12">
              <img
                className="h-[400px] w-full object-cover rounded-md"
                src={image}
                alt=""
              />
            </div>
            <div className="lg:col-span-4 col-span-12 lg:border-l-2 lg:px-4 space-y-3">
              <button className="bg-primary text-white px-7 py-1">
                {status}
              </button>
              <div>
                <p className="text-[12px]">Price Drop</p>
                <p className="text-xl font-semibold">${price}</p>
              </div>
              <h3 className="text-xl font-semibold text-primary">{title}</h3>
              <h4 className="text-base text-blue-600">{segment_name}</h4>
              <div className="bg-[#F6F6FE] p-3 rounded-md flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <FaBed className="w-4 h-4" />
                  <p className="text-sm">{bed} beds</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MdBathtub className="w-4 h-4" />
                  <p className="text-sm">{bath} baths</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaVectorSquare className="w-4 h-4" />
                  <p className="text-sm">{area} sqft</p>
                </div>
              </div>
              <div>
                <p className="text-xl font-medium">Facilities</p>
                <div className="mt-3 space-y-2">
                  {facilites?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-primary"
                    >
                      <CiCircleCheck className="w-5 h-5 text-blue-600" />
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-4 gap-6">
            <div className="lg:col-span-9 col-span-12 bg-white p-6 rounded-md">
              <div>
                <h3 className="text-xl font-medium text-primary">
                  Description The Property
                </h3>
                <p className="text-base text-gray-800 mt-2">{description}</p>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${bookSectionImage})` }}
              className="lg:col-span-3 col-span-12 bg-center bg-no-repeat bg-cover rounded-md p-4 flex justify-center items-center mx-3 lg:mx-0"
            >
              <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Booked Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
