import React, { useState, useEffect } from 'react';
import {  View, StyleSheet } from 'react-native';
import Focus from './src/features/focus/Focus'
import FocusHistory from './src/features/focus/FocusHistory';
import { colors } from './src/utils/colors'
import { spacing } from './src/utils/sizes';
import { Timer } from './src/features/timer/timer'


export default function App() {
  const [ focusSubject, setFocusSubject ] = useState("")
  const [ focusHistory, setFocusHistory ] = useState("")

  const addFocusHistorySubjectWithState = (status) => {
    setFocusHistory([...focusHistory, { subject: focusSubject, status: status }])
  }

  const onClear = () => {

  }

  return (
    <View style={styles.container}>
        {focusSubject ? 
          <Timer
            setFocusSubject={setFocusSubject}
            focusSubject={focusSubject}
            addFocusHistorySubjectWithState={addFocusHistorySubjectWithState}
          /> :
          <>
            <Focus
              setFocusSubject={setFocusSubject ? setFocusSubject : null}
              addFocusHistorySubjectWithState={addFocusHistorySubjectWithState}  
            />
            <FocusHistory focusHistory={focusHistory} onClear={onClear} />
          </>
        }
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
