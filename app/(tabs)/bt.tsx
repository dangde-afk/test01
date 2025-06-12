import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={[styles.box, styles.red]} />
      <View style={[styles.box, styles.blue]} />
      <Text style={styles.time}>10:47 PM</Text>
    </View>
  );
};

const Content = () => {
  return (
    <>
      {Array(5).fill(null).map((_, index) => (
        <View key={index} style={styles.row}>
          <View style={[styles.box, styles.red]} />
          <View style={[styles.box, styles.blue]} />
          <View style={[styles.box, styles.green]} />
        </View>
      ))}
    </>
  );
};

export function Flexbox() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  red: {
    backgroundColor: 'red',
  },
  blue: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green',
  },
  time: {
    fontSize: 18,
  },
});

export default App;
export { Content, Header }; // Export components for potential reuse
