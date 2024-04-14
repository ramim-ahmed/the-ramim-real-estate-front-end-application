export const fetchProperties = async () => {
  const res = await fetch("https://mock-json-server-apis.vercel.app/estate");
  const data = await res.json();
  return data;
};

export const fetchPropertyDetailsById = async (id) => {
  const res = await fetch(
    `https://mock-json-server-apis.vercel.app/estate/${id}`
  );
  const data = await res.json();
  return data;
};
