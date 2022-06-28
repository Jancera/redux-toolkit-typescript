import React from "react";
import { ActivityIndicator, Modal, Text, View } from "react-native";
import Button from "../../components/Button";

import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import {
  counterDecrement,
  counterIncrement,
  counterIncrementByAmount,
  counterReset,
} from "../../store/counter/actions";
import {
  counterIncrementAsync,
  counterIncrementIfOdd,
} from "../../store/counter/thunks";
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
            dispatch(counterIncrement());
          }}
        />
        <Button
          title="Decrease"
          onPress={() => {
            dispatch(counterDecrement());
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
            dispatch(counterIncrementByAmount(5));
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
            dispatch(counterReset());
          }}
        />
      </View>
    </View>
  );
};

export default Home;
