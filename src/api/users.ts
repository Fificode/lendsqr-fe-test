import { api } from "./axios";

export const fetchUsers = async () => {
  const response = await api.get(
    "https://api.json-generator.com/templates/bLFZ9h4Jvodn/data"
  );

  return response.data;
};
