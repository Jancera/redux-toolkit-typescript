import { View, Text, TextInput, Keyboard } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Button from "../../../../components/Button";
import userApi from "../../../../store/user/apiSlice";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");

  const [addUser, { data, isLoading }] = userApi.useAddUserMutation();

  const handleSave = () => {
    Keyboard.dismiss();
    addUser({
      id: Math.ceil(Math.random() * 100),
      name,
      username,
      email: "teste@teste.com",
    });
    setName("");
    setUserName("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(value) => setName(value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(value) => setUserName(value)}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default CreateUser;
