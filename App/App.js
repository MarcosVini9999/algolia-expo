import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NewspaperList } from "../components/NewspaperList/NewspaperList";
import { Search } from "../components/Search/Search";
import React from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <View style={styles.container}>
      <Search onSearch={setSearchTerm} />
      <NewspaperList searchTerm={searchTerm} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bce3c5",
    height: "100%",
    width: "100%",
  },
});
