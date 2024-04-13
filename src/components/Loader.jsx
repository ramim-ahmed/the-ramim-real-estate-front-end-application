import { HashLoader } from "react-spinners";
import PropTypes from "prop-types";
export default function Loader({ title }) {
  return (
    <div className="min-h-screen flex justify-center items-center w-full">
      <div>
        <div className="flex justify-center">
          <HashLoader color="#36d7b7" size={80} />
        </div>
        {title && (
          <h2 className="text-xl font-bold mt-2 text-center">{title}</h2>
        )}
      </div>
    </div>
  );
}

Loader.propTypes = {
  title: PropTypes.string,
};
