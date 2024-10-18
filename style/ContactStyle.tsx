import { StyleSheet } from "react-native";

export const ContactStyle = StyleSheet.create({
  tittleCustom: {
    padding: 2,
  },
  containerContact: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    borderWidth: 1,
  },
  containerInput: {
    width: 300,
    borderWidth: 1,
    padding: 10,
    gap: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  containerSocial: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    height: 50,
  },
  valueInput: {
    color: "black",
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 10,
    height: 50,
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "white",
    width: "100%", // Agar input mengisi lebar kontainer
  },
  textArea: {
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 10,
    height: 100,
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "white",
    width: "100%", // Agar area teks mengisi lebar kontainer
  },
  btnSocial: {
    width: 30,
    height: 30,
  },
  btnsendme: {
    backgroundColor: "blue",
    width: 250,
    padding: 5,
    borderRadius: 20,
  },
  btnsendmeText: {
    color: "white",
    textAlign: "center",
  },
});
