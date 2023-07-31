import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Linking } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { rate } from "../../stores/features/ratingSlicer";
import StarRating from "react-native-star-rating";

export const Newspaper = ({ story }) => {
  const dispatch = useDispatch();
  const newspapers = useSelector((state) => state.rateNewspaper);
  const result = newspapers.filter((newspaper) => newspaper.objectID === story.objectID);

  const handleRate = (objectID, stars) => {
    dispatch(
      rate({
        objectID,
        stars,
      })
    );
  };

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
          <StarRating
            maxStars={5}
            rating={result.length ? result[0].stars : 0}
            selectedStar={(stars) => handleRate(story.objectID, stars)}
          />
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
