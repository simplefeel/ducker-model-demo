import axios from "axios";

const getCardData = function() {
  return axios.get("/api/index");
};

export default getCardData;
