// code mot trang moi
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Define a simple component to display a message
const Message = () => {
    return (
        <View style={styles.messageContainer}>
        <Text style={styles.messageText}>Hello, this is a test message!</Text>
        </View>
    );
}

// Main App component
const App = () => {
    return (
        <View style={styles.container}>
            <Message />
        </View>
    );
}   

// Styles for the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    messageContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    messageText: {
        fontSize: 16,
        color: '#333',
    },
}); 
// Export the App component as default
export default App;