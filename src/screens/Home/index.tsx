import React from "react";
import { ActivityIndicator, Modal, Text, View } from "react-native";
import Button from "../../components/Button";
import { counterSlice } from "../../store/counter/slice";
import { counterIncrementAsync } from "../../store/counter/thunks/counterIncrementAsync";
import counterIncrementIfOdd from "../../store/counter/thunks/counterIncrementIfOdd";

import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";

import { styles } from "./styles";

const Home = () => {
  const { counter, loading } = useAppSelector((store) => store.counter);
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
          <ActivityIndicator size={60} color="#5fc4e3" />
        </View>
      </Modal>
      <Text style={styles.counter}>{counter}</Text>
      <Text style={styles.text}>
        Click into the buttons to increase and decrease the counter
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Increase"
          onPress={() => {
            dispatch(counterSlice.actions.counterIncrement());
          }}
        />
        <Button
          title="Decrease"
          onPress={() => {
            dispatch(counterSlice.actions.counterDecrement());
          }}
        />
        <Button
          title="Async"
          onPress={() => {
            dispatch(counterIncrementAsync(2));
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="By five"
          onPress={() => {
            dispatch(counterSlice.actions.counterIncrementByAmount(5));
          }}
        />
        <Button
          title="If odd"
          onPress={() => {
            dispatch(counterIncrementIfOdd(3));
          }}
        />
        <Button
          title="Clear"
          onPress={() => {
            dispatch(counterSlice.actions.counterReset());
          }}
        />
      </View>
    </View>
  );
};

export default Home;
