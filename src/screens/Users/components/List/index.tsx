import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import userApi from "../../../../store/user/apiSlice";
import DeleteButton from "../DeleteButton";
import LoadingModal from "../../../Home/components/LoadingModal";

const List = () => {
  const { data, error, isError, isLoading } = userApi.useGetUsersQuery();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingModal isLoading={isLoading} />
      ) : (
        <FlatList
          data={data}
          style={styles.list}
          renderItem={({ item }) => {
            return (
              <View style={styles.listItem}>
                <View style={styles.textContainer}>
                  <Text style={styles.listItemTitle}>Name: {item.name}</Text>
                  <Text>Username: {item.username}</Text>
                </View>
                <DeleteButton id={item.id} />
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default List;
