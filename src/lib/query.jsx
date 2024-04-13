export const fetchProperties = async () => {
  const res = await fetch("http://localhost:9000/estate");
  const data = await res.json();
  return data;
};

export const fetchPropertyDetailsById = async (id) => {
  const res = await fetch(`http://localhost:9000/estate/${id}`);
  const data = await res.json();
  return data;
};
