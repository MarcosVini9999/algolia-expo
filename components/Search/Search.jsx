import { StyleSheet, TextInput, View, Button } from "react-native";
import React from "react";

export const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setInputValue} value={inputValue} />
      <Button title="Search" color="#230f2b" onPress={() => onSearch(inputValue)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "15%",
  },
  input: {
    width: "70%",
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ebebbc",
    color: "#230f2b",
  },
});
