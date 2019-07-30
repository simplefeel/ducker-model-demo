import axios from "axios";
import cardModel from "../model/card.model.js";

const getCardModel = async function() {
  const res = await axios.get("/api/index");
  return cardModel.parse(res.data);
};
export default getCardModel;
