import PropTypes from "prop-types";
export default function ServiceItem({ title, icon, buttonbg }) {
  return (
    <div className="border rounded-md border-opacity-10 border-primary p-8 flex flex-col items-center justify-center">
      <div>
        <img className="bg-gray-200 p-3 rounded-md" src={icon} alt="" />
      </div>
      <div className="space-y-5 mt-5">
        <h1 className=" font-medium text-xl text-primary text-center">
          {title}
        </h1>
        <p className="text-center text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci
          iure praesentium perferendis! Perspiciatis temporibus aliquid
          dignissimos eveniet dicta quod.
        </p>
        <div className="flex justify-center">
          <button
            className={`border border-primary px-7 py-1 rounded-md font-medium text-center ${
              buttonbg ? "bg-primary text-white" : ""
            }`}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  buttonbg: PropTypes.bool,
};
