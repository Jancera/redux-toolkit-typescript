import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { rootDecrement, rootIncrement } from "../../store/root/actions";

const Home = () => {
  const counter = useAppSelector((store) => store.root.counter);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <Text style={styles.text}>Click into the buttons to increase and decrease the counter</Text>
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
      </View>
      <TextInput style={styles.input} />
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
    width: "50%",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
  },
});

export default Home;
