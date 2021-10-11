import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

export const RoundedButton = ({
    style = {},
    textStyle = {},
    size=50,
    setFocusSubject,
    addedSubject,
    ...props
}) => {
    return (
        <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
            <View styles={styles(size).titleContainer}>
                <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = size => StyleSheet.create({
    radius: {
        borderRadius: size/2,
        width: size,
        height: size,
        alignItems: 'center',
        borderColor: "#fff",
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: size/4,
    },
    titleContainer: {

    }
})