import { IoArrowForwardCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export default function Property({ property }) {
  const navigate = useNavigate();
  const { id, image, title, location, price, area, bed, bath, status } =
    property || {};
  const handleDetailsPage = () => {
    navigate(`/property-details/${id}`);
  };
  return (
    <div className="border rounded-md">
      <div className="relative">
        <img className="w-full rounded-t" src={image} alt="" />
        <p className="absolute top-5 left-5 bg-primary text-white px-4 rounded-md py-1 bg-opacity-50">
          {status}
        </p>
      </div>
      <div className="p-4 space-y-3">
        <p>${price}</p>
        <h2 className="text-xl font-medium text-primary">{title}</h2>
        <p>{location}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 text-gray-600">
            <IoArrowForwardCircleOutline className="h-5 w-5" />
            <p>{bed}</p>
            <p>Beds</p>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <IoArrowForwardCircleOutline className="w-5 h-5" />
            <p>{bath}</p>
            <p>Baths</p>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <IoArrowForwardCircleOutline className="w-5 h-5" />
            <p>{area}</p>
            <p>sqft</p>
          </div>
        </div>
        <button
          onClick={handleDetailsPage}
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary rounded hover:bg-white group w-full"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-center group-hover:text-left  transition-colors text-white duration-300 ease-in-out group-hover:text-white">
            View Details
          </span>
        </button>
      </div>
    </div>
  );
}

Property.propTypes = {
  property: PropTypes.object.isRequired,
};
