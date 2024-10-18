import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8, // Check for compatibility; use margin if necessary
  },
  imgskill: {
    height: 80,
    width: 80,
    backgroundColor: "white",
    borderRadius: 10,
  },
  containerHead: {
    flex: 1,
    paddingTop: 40,
  },
  containerHeadimg: {
    width: "auto",
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
  },
  containerHeadtitle: {
    marginTop: 20,
    textAlign: "center",
    padding: 2,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: "aqua",
  },
  containerimgSkiil: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  imglogo: {
    width: 150,
    height: 150,
  },
});
