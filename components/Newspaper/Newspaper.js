import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const Newspaper = ({ story }) => {
  return (
    <View style={styles.container}>
      {story.title || story.story_title ? (
        <View>
          <Text>{story.title ? story.title : story.story_title}</Text>

          <Text>Autor: {story.author}</Text>
        </View>
      ) : null}
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
