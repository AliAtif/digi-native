import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { StyleSheet, Text, View} from "react-native";

import List from './components/List'

export default function App() {
  return (
    <View style={styles.container}>
     <List></List>
      <StatusBar style="auto" />
    </View>
  );
}


