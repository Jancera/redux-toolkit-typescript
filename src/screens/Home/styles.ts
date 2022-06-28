import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141414",
  },
  modal: {},
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  counter: {
    fontSize: 42,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    width: "70%",
    textAlign: "center",
    fontSize: 18,
    margin: 10,
    color: "white",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    marginTop: 10,
    justifyContent: "space-around",
  },
});
