import React from "react";
import {
  ActivityIndicator,
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import {
  rootDecrement,
  rootIncrement,
  rootIncrementByAmount,
  rootReset,
} from "../../store/root/actions";
import {
  rootIncrementAsync,
  rootIncrementIfOdd,
} from "../../store/root/thunks";

const Home = () => {
  const { counter, loading } = useAppSelector((store) => store.root);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={loading}
        onRequestClose={() => console.log("Request close")}
      >
        <View style={styles.modalContainer}>
          <ActivityIndicator size={60} color="white" />
        </View>
      </Modal>
      <Text style={styles.counter}>{counter}</Text>
      <Text style={styles.text}>
        Click into the buttons to increase and decrease the counter
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="increase"
          onPress={() => {
            dispatch(rootIncrement());
          }}
        />
        <Button
          title="decrease"
          onPress={() => {
            dispatch(rootDecrement());
          }}
        />
        <Button
          title="async"
          onPress={() => {
            dispatch(rootIncrementAsync(2));
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="  by five  "
          onPress={() => {
            dispatch(rootIncrementByAmount(5));
          }}
        />
        <Button
          title="   if odd   "
          onPress={() => {
            dispatch(rootIncrementIfOdd(3));
          }}
        />
        <Button
          title="clear"
          onPress={() => {
            dispatch(rootReset());
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  },
  text: {
    width: "70%",
    textAlign: "center",
    fontSize: 18,
    margin: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    marginTop: 10,
    justifyContent: "space-around",
  },
});

export default Home;
