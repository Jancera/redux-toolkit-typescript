import { View, Text, Modal, ActivityIndicator } from "react-native";
import React from "react";
import styles from "./styles";

const LoadingModal = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <Modal
      style={styles.modal}
      animationType="slide"
      transparent={true}
      visible={isLoading}
      onRequestClose={() => console.log("Request close")}
    >
      <View style={styles.modalContainer}>
        <ActivityIndicator size={60} color="#5fc4e3" />
      </View>
    </Modal>
  );
};

export default LoadingModal;
