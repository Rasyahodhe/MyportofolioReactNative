import { StyleSheet } from "react-native";
export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonmodel: {
    position: "absolute",
    bottom: 30,
    left: 50,
    right: 50,
    borderRadius: 1000,
    overflow: "hidden",
  },
  containerTittle: {
    height: 200,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    opacity: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tittle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  tittleName: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
});
