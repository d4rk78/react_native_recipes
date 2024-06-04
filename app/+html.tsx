import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HTMLScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HTML Screen</Text>
            <Text>Here you can display HTML content.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});


const responsiveBackground = `
body {
  background-color: #fff;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}`;
