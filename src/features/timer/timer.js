import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Vibration, Platform } from "react-native"
import { colors } from '../../utils/colors'
import { spacing } from '../../utils/sizes'
import { Countdown } from '../../components/countdown'
import { RoundedButton } from '../../components/RoundedButton'
import { ProgressBar } from "react-native-paper";
import Timing from './timing'
import { useKeepAwake } from "expo-keep-awake";

const STATUS = {
    COMPLETED: 1,
    CANCELLED: 2
}


export const Timer = ({ focusSubject, setFocusSubject, addFocusHistorySubjectWithState }) => {
    useKeepAwake();
    const DEFAULT_TIME = 0.1
    const [ time, setTime ] = useState(DEFAULT_TIME)
    const [ timerStarted, setTimerStarted ] = useState(false)
    const [ progress, setProgress ] = useState(1)
    const [ timerFinished, setTimerFinished ] = useState(false)

    const handleTimerClick = time => {
        setTime(time)
        setProgress(1)
        setTimerStarted(false)
    }

    const vibrate = () => {
        if(Platform.OS === 'ios') {
            const interval = setInterval(() => Vibration.vibrate(), 10000)
            setTimeout(() => clearInterval(interval), 10000)
        } else {
            Vibration.vibrate(10000)
        }
    }

    const onEnd = () => {
        addFocusHistorySubjectWithState(STATUS.COMPLETED)
        vibrate()
        setTimerStarted(false)
        setProgress(1)
        setTimerFinished(true)
    }

    const handleCancel = () => {
        addFocusHistorySubjectWithState(STATUS.CANCELLED)
        setFocusSubject('')
    }

    useEffect(() => {
        if(timerFinished) {
            setFocusSubject('')
        }
    }, [timerFinished])

    return (
        <View style={styles.container}>
            <View style={styles.countdownContainer}>
                <Countdown
                    minutes={time}
                    timerStarted={timerStarted}
                    setProgress={setProgress}
                    onEnd={onEnd}
                />
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
            <View style={styles.buttonCancel}>
                <RoundedButton title="-" size={60} onPress={handleCancel} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: spacing.lg,
        alignItems: "center",
        alignSelf: 'stretch'
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
    },
    buttonCancel: {
        flex:1,
        justifyContent: "center",
        alignSelf: 'stretch'
    }
})