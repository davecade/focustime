import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

const Focus = () => {

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>What would you like to Focus on?</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.textInput}/>
              <RoundedButton title="+" />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center"
  },
  title: {
      color: "white",
      fontWeight: "bold",
      fontSize: 24,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  }
});

export default Focus;