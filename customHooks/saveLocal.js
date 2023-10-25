import AsyncStorage from "@react-native-async-storage/async-storage";

export function saveLocal(key, data) {
  AsyncStorage.setItem(key, JSON.stringify(data));
}
