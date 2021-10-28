import React from 'react'
import { View, StyleSheet, Text } from "react-native"
import { RoundedButton } from '../../components/RoundedButton'

const Timing = ({ style, title, onPress }) => {
    return (
        <View style={style}>
            <RoundedButton onPress={onPress} title={title} size={70}/>
        </View>
    )
}

export default Timing
