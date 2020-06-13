import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import MyModal from "./Modal";
import { vegetables } from "../vegetables/vegetables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1.0,
  },
  text: {
    fontSize: 45,
    color: "#fff",
  },
  button: {
    backgroundColor: "#556b2f",
    padding: 19,
    borderRadius: 9,
  },
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
  safeArea: {
    backgroundColor: "khaki",
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
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../../assets/food-1898194_1920.jpg")}
        style={styles.image}
      >
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => selectVege()}
          >
            <Text style={styles.text}>自炊する</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <MyModal onPress={setModalVisible} vege1={vege1} vege2={vege2} />
          </Modal>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
