export const fetchProperties = async () => {
  const res = await fetch("http://localhost:9000/estate");
  const data = await res.json();
  return data;
};
