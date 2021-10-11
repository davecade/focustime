import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native"
import { colors } from '../../utils/colors'
import { spacing } from '../../utils/sizes'
import { Countdown } from '../../components/countdown'
import { RoundedButton } from '../../components/RoundedButton'

export const Timer = ({ focusSubject }) => {
    const [ isStarted, setIsStarted ] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.countdownContainer}>
                <Countdown isPaused={!isStarted} />
            </View>
            
            <Text style={styles.title}>{"We are focusing on:"}</Text>
            <Text style={styles.task}>{focusSubject}</Text>
            <View style={styles.buttonContainer}>
                {
                    isStarted ?
                    <RoundedButton title="pause" size={100} onPress={() => setIsStarted(false)} />
                    :
                    <RoundedButton title="start" size={100} onPress={() => setIsStarted(true)} />
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
    }
})