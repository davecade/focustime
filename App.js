import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Focus from './src/features/focus/Focus'

export default function App() {
  const [ focusSubject, setFocusSubject ] = useState("Dave")


  return (
    <View style={styles.container}>
        {focusSubject ? <Focus /> : <Text>None</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //-- fiills whole screen
    backgroundColor: '#252250',
    alignItems: "center",
    marginTop: 25
  },
});
