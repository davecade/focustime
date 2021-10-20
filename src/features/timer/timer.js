import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native"
import { colors } from '../../utils/colors'
import { spacing } from '../../utils/sizes'
import { Countdown } from '../../components/countdown'
import { RoundedButton } from '../../components/RoundedButton'
import { ProgressBar } from "react-native-paper";



export const Timer = ({ focusSubject }) => {
    const [ timerStarted, setTimerStarted ] = useState(false)
    const [ progress, setProgress ] = useState(1)

    return (
        <View style={styles.container}>
            <View style={styles.countdownContainer}>
                <Countdown timerStarted={timerStarted} setTimerStarted={setTimerStarted} setProgress={setProgress}  />
            </View>
            
            <Text style={styles.title}>{"We are focusing on:"}</Text>
            <Text style={styles.task}>{focusSubject}</Text>

            <ProgressBar
                progress={progress}
                style={styles.progressBar}
            />

            <View style={styles.buttonContainer}>
                {
                    timerStarted ?
                    <RoundedButton title="pause" size={100} onPress={() => setTimerStarted(false)} />
                    :
                    <RoundedButton title="start" size={100} onPress={() => setTimerStarted(true)} />
                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: spacing.lg,
        alignItems: "center"
    },
    title: {
        color: colors.white,
        textAlign: 'center'
    },
    task: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    countdownContainer: {
        flex: .5,
        justifyContent: 'center'
    },
    buttonContainer: {
        marginTop: 40
    },
    progressBar: {
        height: 10,
        marginTop: 20,
        width: 250
    }
})