import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Focus = () => {

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>What would you like to focus on?</Text>
            <TextInput/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //-- fills whole screen
  },
  titleContainer: {
  },
  title: {
      color: "white",
      fontWeight: "bold",
      fontSize: 20
  }
});

export default Focus;