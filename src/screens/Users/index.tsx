import { Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import List from "./components/List";
import CreateUser from "./CreateUser";

const Users = () => {
  return (
    <View style={styles.container}>
      <CreateUser />
      <List />
    </View>
  );
};

export default Users;
