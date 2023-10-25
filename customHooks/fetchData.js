import { saveLocal } from "./saveLocal";
import { getBitcoinData } from "./getBitcoinData";

export async function fetchData() {
  let response = await getBitcoinData(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  saveLocal("bitcoinData", response.data);

  return JSON.stringify(response.data);
}
