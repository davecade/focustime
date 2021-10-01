import React, { useState } from 'react';
import {  View, StyleSheet } from 'react-native';
import Focus from './src/features/focus/Focus'
import { colors } from './src/utils/colors'
import { spacing } from './src/utils/sizes';
import { Timer } from './src/features/timer/timer'

export default function App() {
  const [ focusSubject, setFocusSubject ] = useState("Studying")


  return (
    <View style={styles.container}>
        {focusSubject ? <Timer focusSubject={focusSubject} /> : <Focus setFocusSubject={setFocusSubject} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //-- fiills whole screen
    backgroundColor: colors.darkBlue,
    alignItems: "center",
    marginTop: spacing.lg
  },
});
