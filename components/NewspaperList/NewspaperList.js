import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Newspaper } from "../Newspaper/Newspaper";
import { Loading } from "../Loading/Loading";

export const NewspaperList = ({ searchTerm }) => {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    try {
      setLoading(true);
      fetch(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setStories(data.hits);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : stories.length > 0 ? (
        stories.map((story, index) => <Newspaper story={story} key={index} />)
      ) : (
        <Text>Sem Resultado</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
