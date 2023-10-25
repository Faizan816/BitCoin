import AsyncStorage from "@react-native-async-storage/async-storage";
import { getBitcoinData } from "./getBitcoinData";

export async function checkUpdate() {
  const oldData = await AsyncStorage.getItem("bitcoinData");
  const newReponse = await getBitcoinData(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const newData = JSON.stringify(newReponse.data);
  if (newData === oldData) {
    return false;
  }
  return true;
}
