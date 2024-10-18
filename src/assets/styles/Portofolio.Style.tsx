import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    padding: 10,
    paddingTop: 0,
  },
  subcontainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    padding: 20,
  },
  timecreate: {
    textAlign: "center",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactlogocontainer: {
    flex: 1,
    paddingTop: 40,
  },
  reactLogo: {
    width: "auto",
    height: "auto",
    aspectRatio: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  reactlogoimg: {
    paddingTop: 20,
    width: 150,
    height: 150,
  },
  textTittle: {
    textAlign: "center",
    fontWeight: "bold",
    padding: 2,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: "aqua",
  },
  textteck: {
    color: "lightgray",
    fontSize: 11,
    textAlign: "center",
    width: 230,
  },
  textkind: {
    fontStyle: "italic",
    fontSize: 11,
  },
  imagecustom: {
    width: "100%",
    height: 150,
    aspectRatio: 2,
  },
  subtittlecustom: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 19,
    paddingTop: 10,
  },
  btngit: {
    width: 250,
    color: "white",
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 20,
  },
  btngitText: {
    textAlign: "center",
  },
});
