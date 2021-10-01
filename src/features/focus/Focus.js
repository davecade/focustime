import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors'

const Focus = ({ setFocusSubject }) => {
  const [ addedSubject, setAddedSubject ] = useState(null)

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>What would you like to Focus on?</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                onSubmitEditing={({nativeEvent}) => {
                  setAddedSubject(nativeEvent.text)
                }}
              />
              <RoundedButton title="+" onPress={() => setFocusSubject(addedSubject)} />
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
    padding: spacing.md,
    justifyContent: "center"
  },
  title: {
      color: colors.white,
      fontWeight: "bold",
      fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  }
});

export default Focus;