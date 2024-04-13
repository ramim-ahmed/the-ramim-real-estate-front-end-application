import PropTypes from "prop-types";
import Property from "./Property";
export default function Properties({ data }) {
  return (
    <div className="max-w-[1120px] mx-auto my-20 px-3">
      <div>
        <h1 className="text-primary font-medium text-xl">
          Explore Our Latest Properties
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
          {data.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}

Properties.propTypes = {
  data: PropTypes.array.isRequired,
};
