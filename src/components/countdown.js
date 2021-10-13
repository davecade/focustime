import React, { useState, useEffect, useRef } from 'react'
import { Text, StyleSheet } from 'react-native'
import { fontSizes, spacing } from '../utils/sizes'
import { colors } from '../utils/colors'

const formtaTime = time => time < 10 ? `0${time}` : time
const minutesToMillies = min => min*1000*60

export const Countdown = ({ minutes = 1, isPaused, setProgress}) => {
    const interval = useRef(null)
    const [ millis, setMillis ] =  useState(minutesToMillies(minutes))
    const minute = Math.floor(millis / 1000 / 60) % 60;
    const second = Math.floor(millis / 1000) % 60;

    const countDown = () => {
        setMillis((time) => {
            if(time===0) {
                //Do stuff here
                return time;
            }
            const timeLeft = time - 1000;
            setProgress(timeLeft/minutesToMillies(minutes))
            return timeLeft
        })
    }

    useEffect(() => {
        if(isPaused) return

        interval.current = setInterval(countDown, 1000)

        return () => clearInterval(interval.current)
    }, [isPaused])

    return (
        <Text style={styles.text}>{formtaTime(minute)}:{formtaTime(second)}</Text>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight: 'bold',
        color: colors.white,
        padding: spacing.lg,
        backgroundColor: 'rgba(94, 132, 226, 0.3)',
    }
})