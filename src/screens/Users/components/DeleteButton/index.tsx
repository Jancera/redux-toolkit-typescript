import { Button } from "react-native";
import React from "react";
import userApi from "../../../../store/user/apiSlice";

const DeleteButton = ({ id }: { id: number }) => {
  const [useDelete, { isLoading }] = userApi.useDeleteUserMutation();

  const handleOnPress = () => {
    useDelete(id);
  };

  return <Button title="Delete" onPress={handleOnPress} />;
};

export default DeleteButton;
