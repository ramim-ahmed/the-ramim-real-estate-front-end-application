import PropTypes from "prop-types";
export default function AgentItem({ name, img }) {
  return (
    <div className="border p-3 rounded-md">
      <div>
        <img className="w-full h-72 object-cover rounded-md" src={img} alt="" />
      </div>
      <div className="space-y-1 mt-2">
        <h1 className="text-xl font-medium">{name}</h1>
        <p>Real Estate Broker</p>
        <p>AgentID: TR0125441001</p>
        <div className="mt-2">
          <button className="bg-primary text-white px-4 text-sm rounded-3xl">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

AgentItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.node,
};
