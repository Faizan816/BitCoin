import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchData } from "./fetchData";

export async function loadData(update) {
  let data = await AsyncStorage.getItem("bitcoinData");

  if (!data || update) {
    data = fetchData();
  }

  return data;
}
