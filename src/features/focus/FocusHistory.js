import React from 'react'
import { view, StyleSheet, FlatList, Text, SafeAreaView, View } from 'react-native'

import { fontSizes, spacing } from '../../utils/sizes'
import { RoundedButton } from '../../components/RoundedButton'


const HistoryItem = ({ item, index }) => {
    return (
        <Text style={styles.historyItem(item.status)}>
            {item.subject}
        </Text>
    )
}


const FocusHistory = ({ focusHistory, onClear }) => {

    const clearHistory = () => {
        onClear()
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                
                {!!focusHistory.length && (
                    <>
                        <Text style={styles.title}>Things we've focused on</Text>
                        <FlatList
                            style={{ flex: 1 }}
                            contentContainerStyle={{flex:1, alignItems: 'center'}}
                            data={focusHistory}
                            renderItem={HistoryItem}
                            keyExtractor={(item, index) => `${index}`}
                        />
                        <View style={styles.clearContainer}>
                            <RoundedButton size={75} title="Clear" onPress={() => clearHistory()}>
                            </RoundedButton>
                        </View>
                    </>
                )}
                
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    historyItem: status => ({
        color: status > 1 ? 'red' : 'green',
        fontSize: fontSizes.md
    }),
    title: {
        color: "white",
        fontSize: fontSizes.lg
    },
    clearContainer: {
        alignItems: 'center',
        padding: spacing.md
    }
})

export default FocusHistory
