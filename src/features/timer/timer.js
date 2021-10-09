import React from "react";
import { View, StyleSheet, Text } from "react-native"
import { colors } from '../../utils/colors'
import { spacing } from '../../utils/sizes'
import { Countdown } from '../../components/countdown'

export const Timer = ({ focusSubject }) => {

    return (
        <View style={styles.container}>
            <View style={styles.countdownContainer}>
                <Countdown />
            </View>
            
            <Text style={styles.title}>{"We are focusing on:"}</Text>
            <Text style={styles.task}>{focusSubject}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: spacing.lg
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
})