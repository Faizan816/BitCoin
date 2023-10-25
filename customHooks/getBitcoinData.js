import axios from "axios";

export function getBitcoinData(url) {
  return axios.get(url);
}
