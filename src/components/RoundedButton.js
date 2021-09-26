import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

export const RoundedButton = ({
    style = {},
    textStyle = {},
    size=50,
    ...props
}) => {
    return (
        <TouchableOpacity style={[styles(size).radius, style]}>
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
    },
    text: {
        color: '#fff',
        fontSize: size/1.6,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
    }
})