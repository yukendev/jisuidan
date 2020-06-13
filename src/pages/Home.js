import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Modal } from "react-native";
import MyModal from "./Modal";
import { vegetables } from "../vegetables/vegetables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

let vege1 = "";
let vege2 = "";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const selectVege = () => {
    vege1 = vegetables[Math.floor(Math.random() * vegetables.length)];
    while (1) {
      vege2 = vegetables[Math.floor(Math.random() * vegetables.length)];
      if (vege1 !== vege2) {
        break;
      }
    }
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Text>home</Text>
      <TouchableOpacity onPress={() => selectVege()}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <MyModal onPress={setModalVisible} vege1={vege1} vege2={vege2} />
      </Modal>
    </View>
  );
}
