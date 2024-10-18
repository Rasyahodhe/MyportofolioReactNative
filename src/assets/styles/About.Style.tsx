import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerHead: {
    height: 350,
    padding: 20,
    borderWidth: 1,
  },
  containerImg: {
    flex: 1,
    borderWidth: 1,
  },
  imgHeader: {
    width: 200,
    height: 250,
  },
  tittleabout: {
    marginTop: 20,
    marginBottom: 0,
    textAlign: "center",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: "aqua",
  },
  textabout: {
    textAlign: "center",
    padding: 10,
  },
});
