import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { vegetables } from "../vegetables/vegetables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    width: 300,
    height: 300,
  },
});

export default function Modal({ onPress, vege1, vege2 }) {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text>{vege1}</Text>
        <Text>{vege2}</Text>
        <TouchableOpacity onPress={() => onPress(false)}>
          <Text>close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
