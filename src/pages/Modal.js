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
    backgroundColor: "#daa520",
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  vege: {
    fontSize: 45,
    marginBottom: 10,
    marginTop: 10,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    padding: 3,
  },
  text1: {
    fontSize: 25,
    position: "absolute",
    top: 30,
    color: "#fff",
  },
  text2: {
    fontSize: 25,
    color: "#fff",
    position: "absolute",
    bottom: 40,
  },
  close: {
    fontSize: 20,
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#ddd",
    borderRadius: 8,
  },
  closeText: {
    padding: 3,
  },
});

export default function Modal({ onPress, vege1, vege2 }) {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.text1}>今日の食材は...</Text>
        <Text style={styles.vege}>{vege1}</Text>
        <Text style={styles.vege}>{vege2}</Text>
        <Text style={styles.text2}>グッドラック！</Text>
        <TouchableOpacity style={styles.close} onPress={() => onPress(false)}>
          <Text style={styles.closeText}>close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
