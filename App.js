import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Focus from './src/features/focus/Focus'
import { colors } from './src/utils/colors'
import { spacing } from './src/utils/sizes';

export default function App() {
  const [ focusSubject, setFocusSubject ] = useState(null)


  return (
    <View style={styles.container}>
        {focusSubject ? <Text style={{color: "white"}}>FOCUSING ON: {focusSubject}</Text> : <Focus setFocusSubject={setFocusSubject} />}
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
