

import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native'
import React, { Component } from 'react'

const StartPage = () => {
    return (
        <SafeAreaView style={styles.startPageContainer}>
            <Image source={require('../img/logo.png')} />
        </SafeAreaView>
    )
}

export default StartPage

const styles = StyleSheet.create({
    startPageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#408080',
    }
})

