import axios from "axios";

export function callSite() {
  const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  };
  return axios
    .get("/api/site", config)
    .then(response => response.data)
    .catch(error => {
      throw error.response || error;
    });
}

