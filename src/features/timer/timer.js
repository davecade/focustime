import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native"
import { colors } from '../../utils/colors'
import { spacing } from '../../utils/sizes'
import { Countdown } from '../../components/countdown'
import { RoundedButton } from '../../components/RoundedButton'
import { ProgressBar } from "react-native-paper";
import Timing from './timing'



export const Timer = ({ focusSubject }) => {
    const [ time, setTime ] = useState(.1)
    const [ timerStarted, setTimerStarted ] = useState(false)
    const [ progress, setProgress ] = useState(1)

    const handleTimerClick = time => {
        setTime(time)
        setProgress(1)
        setTimerStarted(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.countdownContainer}>
                <Countdown minutes={time} timerStarted={timerStarted} setTimerStarted={setTimerStarted} setProgress={setProgress}  />
            </View>
            
            <Text style={styles.title}>{"We are focusing on:"}</Text>
            <Text style={styles.task}>{focusSubject}</Text>

            <ProgressBar
                progress={progress}
                style={styles.progressBar}
            />

            <View style={styles.timingContainer}>
                <Timing
                    title={"10"}
                    style={{marginLeft: 10, marginRight: 10}}
                    onPress={() => handleTimerClick(10)}
                />

                <Timing
                    title={"15"}
                    style={{marginLeft: 10, marginRight: 10}}
                    onPress={() => handleTimerClick(15)}
                />

                <Timing
                    title={"20"}
                    style={{marginLeft: 10, marginRight: 10}}
                    onPress={() => handleTimerClick(20)}
                />
            </View>

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
        marginBottom: 20,
        width: 250
    },
    timingContainer: {
        display: 'flex',
        flexDirection: 'row',
    }
})