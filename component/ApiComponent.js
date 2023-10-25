import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { loadData } from "../customHooks/loadData";
import { checkUpdate } from "../customHooks/checkUpdate";

export default function ApiComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const update = checkUpdate();
    populate(update);
  }, []);

  async function populate(update) {
    setData([await loadData(update)]);
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ padding: 20 }}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
