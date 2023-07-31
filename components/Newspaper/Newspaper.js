import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Linking } from "react-native";

export const Newspaper = ({ story }) => {
  return (
    <View style={styles.container}>
      {story ? (
        <View>
          <Text>{story.title ? story.title : "No title"}</Text>
          <Text>Autor: {story.author}</Text>
          <Text
            style={{ color: "#f21d41", textDecorationLine: "underline" }}
            onPress={() => Linking.openURL(story.url ? story.url : story.story_url)}
          >
            Link
          </Text>
        </View>
      ) : null}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 1,
    position: "relative",
    margin: 5,
    padding: 5,
    backgroundColor: "#82b3ae",
    color: "#230f2b",
  },
});
