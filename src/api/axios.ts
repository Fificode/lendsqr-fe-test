

import axios from "axios";

export const api = axios.create({
  headers: {
    "Content-Type": "application/json",
   Authorization: `Bearer ${import.meta.env.VITE_JSON_GEN_TOKEN}`
  },
});
