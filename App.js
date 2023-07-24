import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NewspaperList } from "./components/NewspaperList/NewspaperList";
import { useDebounce } from "./hooks/useDebounce";
import React from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  return (
    <View style={styles.container}>
      <Text>App</Text>
      <TextInput style={styles.input} onChangeText={setSearchTerm} value={searchTerm} />
      <NewspaperList searchTerm={debouncedSearch} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
