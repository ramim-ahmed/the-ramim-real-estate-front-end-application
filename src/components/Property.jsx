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
          className="bg-primary hover:bg-opacity-80 duration-300 hover:duration-300 text-white p-3 w-full rounded-md"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

Property.propTypes = {
  property: PropTypes.object.isRequired,
};
